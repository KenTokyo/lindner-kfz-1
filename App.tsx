import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/Layout';
import { HomePage } from './pages/HomePage';

// Lazy load subpages for code splitting
const DienstleistungenPage = lazy(() => import('./pages/DienstleistungenPage').then(m => ({ default: m.DienstleistungenPage })));
const KarrierePage = lazy(() => import('./pages/KarrierePage').then(m => ({ default: m.KarrierePage })));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage').then(m => ({ default: m.ImpressumPage })));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage').then(m => ({ default: m.DatenschutzPage })));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dienstleistungen" element={
            <Suspense fallback={<div className="min-h-screen pt-28 flex items-center justify-center"><div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin" /></div>}>
              <DienstleistungenPage />
            </Suspense>
          } />
          <Route path="/karriere" element={
            <Suspense fallback={<div className="min-h-screen pt-28 flex items-center justify-center"><div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin" /></div>}>
              <KarrierePage />
            </Suspense>
          } />
          <Route path="/impressum" element={
            <Suspense fallback={<div className="min-h-screen pt-28 flex items-center justify-center"><div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin" /></div>}>
              <ImpressumPage />
            </Suspense>
          } />
          <Route path="/datenschutz" element={
            <Suspense fallback={<div className="min-h-screen pt-28 flex items-center justify-center"><div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin" /></div>}>
              <DatenschutzPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
