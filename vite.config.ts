import path from 'path';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import formsHandler from './api/forms';

const MAX_BODY_SIZE_BYTES = 1024 * 1024;

const readJsonBody = (req: IncomingMessage): Promise<unknown> =>
  new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let total = 0;

    req.on('data', (chunk: Buffer) => {
      total += chunk.length;
      if (total > MAX_BODY_SIZE_BYTES) {
        reject(new Error('Payload too large'));
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8').trim();
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error('Invalid JSON payload'));
      }
    });

    req.on('error', reject);
  });

const createFormsResponse = (res: ServerResponse) => {
  const responseLike = {
    status(statusCode: number) {
      res.statusCode = statusCode;
      return responseLike;
    },
    json(payload: unknown) {
      if (!res.headersSent) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
      }
      res.end(JSON.stringify(payload));
    },
    setHeader(name: string, value: string) {
      res.setHeader(name, value);
    },
  };

  return responseLike;
};

const formsApiDevPlugin = (): Plugin => ({
  name: 'forms-api-dev-plugin',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/api/forms', async (req, res) => {
      try {
        const body = await readJsonBody(req);
        await formsHandler(
          { method: req.method, body },
          createFormsResponse(res)
        );
      } catch (error) {
        console.error('Local /api/forms handler error:', error);
        if (!res.headersSent) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
        }
        res.end(
          JSON.stringify({
            ok: false,
            message: 'Ungueltige Anfrage fuer /api/forms.',
          })
        );
      }
    });
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Make non-VITE vars (SMTP_*) available to local dev middleware.
  for (const [key, value] of Object.entries(env)) {
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }

  return {
    server: {
      port: 5173,
      host: '0.0.0.0',
      strictPort: false,
    },
    plugins: [formsApiDevPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
