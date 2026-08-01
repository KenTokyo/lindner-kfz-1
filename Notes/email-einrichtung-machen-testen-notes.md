# email einrichtung machen testen

*8/1/2026, 12:15:42 AM*

---

**You (Draft):**
Email Einrichtung machen und testen

Hallo ihr beiden,

 

anbei die Eckdaten für das Mailkonto für die Webseite

 

webseite@kfz-lindner.de

 

Passwort: N8sFFTmwFG2pxYiUEbMParWp

 

Verbindungsdaten für IONOS Mail


Tabelle 1: Posteingangsserver

Einstellung

IMAP

POP3

Server

imap.ionos.de

pop.ionos.de

Port

993

995

Verbindungstyp / Verschlüsselung

SSL/TLS

SSL/TLS

Mehr zu IMAP und POP3 erfahren


Tabelle 2: Postausgangsserver (SMTP)

Einstellung

SMTP

Server

smtp.ionos.de

Port

465

Verbindungstyp / Verschlüsselung

SSL/TLS

 

Zur Nachverfolgung und für Test während der Einrichtung könnt Ihr auch am Webmailer anmelden.

 

SMTP-Authentifizierung ist ebenfalls aktiv:

{
      "name": "kfz-lindner.de.",
      "type": 16 /* TXT */,
      "TTL": 3600,
      "data": "v=spf1 include:_spf-eu.ionos.com include:spf.protection.outlook.com ~all"
    },

 

DMARC-Ausrichtung kommt über uns:

 

{
      "name": "_DMARC.kfz-lindner.de.",
      "type": 5 /* CNAME */,
      "TTL": 3600,
      "data": "_dmarc.nexos.de."
    }

 

Wenn Ihr Mails versendet solltet Ihre DKIM-Signaturen vermeiden.

 

Mit freundlichen Grüßen

 

Philipp Radloff

Technik

 

Fon: 49 30 285297-0

eMail:philipp.radloff@nexos.de

 

Nexos Computer GmbH – Wackenbergstr. 93 – 13156 Berlin

 

Geschäftsführer: Mario Zechmeister

Amtsgericht Berlin Charlottenburg HRB 53295 – SteuerNr: 37/137/20019 – UST-ID: DE167462487

eMail: info@nexos.de

 
D:\CODING\React Projects\Kundenprojekte\nalbach-und-hinkel-2

gh auth switch --user KenTokyo
gh auth switch --user oalabhypercode

https://lindner-kfz.de/

o@oalab.de absender

So, genau das gleiche Prinzip bitte auch hier machen. Also hier bitte dafür sorgen, dass du diese Einstellung reinbekommst, dieses, genau, dass alles korrekt eingetragen wird. Du testest das auch hier rein. Du machst das ähnlich, wie wir das bei dem anderen Kunden gemacht haben. Du musst natürlich per Vercel auch schauen, dass du die Sachen einträgst mit Vercel CLI. Wir haben da auf jeden Fall, mach mal am besten, guck mal, wir haben das auch bei Neibach und Hinkel so gemacht. Schau mal in diesen Neibach und Hinkel. Aber das ist das, was du jetzt machst, ist Jonas. Nicht verwechseln. Und bei Neibach und Hinkel haben wir eine Weiterleitung gemacht. Hier kannst du, keine Ahnung, direkt auf die E-Mail schreiben. Genau. Genau, versuch das mal bitte alles einzurichten korrekt. Du kannst auch Jonas googeln und alles. Du kannst mit Playwright CLI dann am Ende alles prüfen. Versuch aber bitte über Vercel CLI auch alles richtig zu konfigurieren. Schau mal, dass du dann in Shared Docs, ja, wir haben so einen Shared Docs Ordner, da trägst du bitte alles ein. Also, du machst einen ORLab-Ordner und schaust, was du für Daten immer brauchst. Du machst unsere ORLab-Daten rein, zum Beispiel, dass wir so einen Switch haben, dass wir Netcup verwenden meistens. Ach, irgendwelche Daten, wenn es irgendwas gebraucht wird, dass wir Kundenprojekte, also alles, was in Kundenprojekte ist, da nutzen wir ORLab als Account. Da musst du immer kurz bevor du committest, du committest auch am besten immer, ORLab Hypercode. Danach musst du rein, ja. Genau. Und dann switcht du wieder runter auf Kentokyo. Da schreibst du bitte auch irgendwo in den Coding Rules so rein, also in der Agents MD, dass du, ich schreibe das rein, committen mit ORLab Hypercode und dann zurück auf Kentokyo. Genau, du kannst natürlich im Shared Docs Ordner einen Ordner erzeugen für ORLab und da so Regeln reinschreiben, dass wir ausnahmsweise Playwright CLI nutzen dürfen für manche Zwecke, für so Testfälle, genau. Wo wir die echte Seite quasi, ne, wir haben auch, ja, und die Seite existiert, das ist diese Lindner Kfz-Seite, die ist auch schon ab, kannst du dir anschauen. Genau, versuch das mal jetzt mit den, genau, nutzt am besten auch React Templates für die E-Mail-Versendungen, dass der User auch eine zurückbekommt. Und versuch mal, Absender o@orlab zu sein. Dass ich quasi eine Confirmation E-Mail bekomme. Genau.