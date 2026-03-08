# Website-Relaunch KFZ Lindner Berlin - Phasenplan

**Erstellt:** 2026-03-08
**Projekt:** Vite + React + TypeScript SPA
**ULTRATHINK angewendet**

---

## A) Ziel & Scope

**Was bauen wir?**
Modernisierung der bestehenden KFZ Lindner Website als reduzierte, professionelle Scroll-Seite mit 2 Subpages (/dienstleistungen, /karriere) plus Rechtsseiten (/impressum, /datenschutz). Zwei Firmierungen (KFZ Lindner + Autoservice Lindner) sollen als "eins" wirken.

**In Scope:**
- Startseite als Scroll-Seite (Hero, Quick-Choice, Trustbar, Leistungen-Preview, Prozess, Warum Lindner, Bewertungen, Karriere-Teaser, Kontakt)
- Terminanfrage-Modal (2-Step: Bereich wählen -> Formular)
- Subpage /dienstleistungen (SEO-Tiefe)
- Subpage /karriere (Bewerbung ohne Huerden)
- /impressum + /datenschutz
- Mobile-First, SEO-optimiert, DSGVO-konform
- Sticky CTA (Mobil)

**Out of Scope (Phase 2 / spaeter):**
- Backend / E-Mail-Versand (Formular-Logik nur Frontend, Backend spaeter)
- CMS-Integration
- PDR Cloud / repairpoint.info Integration
- Datei-Upload im Formular
- Google Maps Live-Einbindung (erstmal statisch)

---

## B) Gap-Analyse: IST vs. SOLL

| Bereich | IST (aktuell) | SOLL (TASKS.md) | Aktion |
|---------|---------------|-----------------|--------|
| Routing | Keine (Single Page) | /dienstleistungen, /karriere, /impressum, /datenschutz | react-router-dom hinzufuegen |
| Tailwind | CDN (cdn.tailwindcss.com) | Lokal installiert | tailwindcss installieren |
| Hero | Generisch | Spezifisch mit 2 CTAs (Terminanfrage + Leistungen) | Ueberarbeiten |
| Quick-Choice | Nicht vorhanden | 2 Kacheln: Karosserie/Lack vs Autoservice | Neu |
| Trustbar | Nicht vorhanden | Dezente Partner-Logos (Glasurit, Eurogarant mini) | Neu |
| Leistungen | 6 generische Karten | 2 Kategorien: Karosserie/Lack + Autoservice | Ueberarbeiten |
| Eurogarant | Prominente eigene Sektion | Nur dezent in Trustbar | Entfernen/Ersetzen |
| Prozess | Nicht vorhanden | "So laeuft's ab" 5 Schritte | Neu |
| Warum Lindner | "Ueber uns" generisch | Spezifisch: Familienbetrieb, unter einem Dach | Ueberarbeiten |
| Bewertungen | Nicht vorhanden | Handverlesene statische Review-Cards | Neu |
| Karriere-Teaser | Nicht vorhanden (nur volle Sektion) | Kurzer Teaser auf Startseite | Neu |
| Terminanfrage | Nicht vorhanden | 2-Step Modal (Bereich -> Formular) | Neu |
| Kontakt | Vorhanden, generisch | Ueberarbeitet mit "unter einem Dach" Messaging | Ueberarbeiten |
| Footer | Basic | Mit beiden Firmierungen, Rechtslinks | Ueberarbeiten |
| Navbar | Vorhanden | Anpassen: Leistungen, Ablauf, Bewertungen, Karriere, Kontakt, CTA-Button | Ueberarbeiten |

---

## C) Ordner- & Komponentenstruktur (Ziel)

```
src/
  components/
    shared/
      Navbar.tsx              (~170 Zeilen) - Navigation mit Routing
      Footer.tsx              (~120 Zeilen) - Footer mit Firmierungen
      TerminanfrageModal.tsx   (~250 Zeilen) - 2-Step Modal
      StickyCTA.tsx           (~50 Zeilen) - Mobile Sticky Button
    home/
      Hero.tsx                (~100 Zeilen) - Hero mit 2 CTAs
      QuickChoice.tsx         (~80 Zeilen) - Karosserie/Lack vs Autoservice
      Trustbar.tsx            (~60 Zeilen) - Partner-Logos
      LeistungenPreview.tsx   (~120 Zeilen) - Service-Karten 2 Kategorien
      ProcessSteps.tsx        (~100 Zeilen) - "So laeuft's ab"
      WhyLindner.tsx          (~80 Zeilen) - Warum Lindner
      ReviewCards.tsx         (~100 Zeilen) - Handverlesene Bewertungen
      KarriereTeaser.tsx      (~60 Zeilen) - Karriere-Hinweis
      ContactSection.tsx      (~150 Zeilen) - Kontakt & Standort
    dienstleistungen/
      DienstleistungenPage.tsx (~200 Zeilen) - Hauptseite
      ServiceCategory.tsx     (~120 Zeilen) - Kategorie-Block
      ServiceFAQ.tsx          (~100 Zeilen) - Mini-FAQ
    karriere/
      KarrierePage.tsx        (~200 Zeilen) - Hauptseite
      JobCard.tsx             (~80 Zeilen) - Stellenanzeige
      BewerbungsFormular.tsx  (~150 Zeilen) - Bewerbungsformular
  pages/
    HomePage.tsx              (~80 Zeilen) - Startseite (assembliert Home-Komponenten)
    DienstleistungenPage.tsx  (~30 Zeilen) - Wrapper
    KarrierePage.tsx          (~30 Zeilen) - Wrapper
    ImpressumPage.tsx         (~80 Zeilen) - Impressum
    DatenschutzPage.tsx       (~80 Zeilen) - Datenschutz
  data/
    services.ts               (~80 Zeilen) - Service-Daten
    reviews.ts                (~40 Zeilen) - Bewertungs-Daten
    jobs.ts                   (~60 Zeilen) - Job-Daten
    content.ts                (~60 Zeilen) - Texte/Content
  App.tsx                     (~40 Zeilen) - Router-Setup
  index.tsx                   (~15 Zeilen) - Entry
  types.ts                    (~40 Zeilen) - TypeScript-Typen
```

---

## D) Phasenplan

---

### Phase 1: Projektstruktur, Routing & Tailwind-Setup
**Status:** ✅ Erledigt

**Ziel:** Solide Basis schaffen: Tailwind lokal, Routing, Ordnerstruktur, Layout-Komponente.

**Was bedeutet das konkret fuer den User?** Noch keine sichtbare Aenderung, aber die technische Grundlage fuer alle weiteren Phasen.

**Tasks:**
- [x] Tailwind v4 mit `@tailwindcss/vite` installiert (v4 braucht kein PostCSS/Autoprefixer separat)
- [x] CDN-Script aus `index.html` entfernt, Tailwind-Import in `styles.css`
- [x] `react-router-dom` installiert
- [x] Ordnerstruktur angelegt: `components/shared/`, `components/home/`, `components/dienstleistungen/`, `components/karriere/`, `pages/`, `data/`
- [x] Dateien bleiben im Root (kein src/-Umzug noetig, Vite erwartet Root-Struktur)
- [x] `App.tsx` auf React Router umgebaut (BrowserRouter + Layout + Routes)
- [x] `pages/HomePage.tsx` erstellt (assembliert bestehende Home-Komponenten + scrollTo-State-Handling)
- [x] Leere Seiten-Stubs: DienstleistungenPage, KarrierePage, ImpressumPage, DatenschutzPage
- [x] Vite-Config: `resolve.alias` fuer `@/` Pfade konfiguriert
- [x] Navbar mit React Router integriert (hash-links + route-links, Subpage-Navigation)
- [x] Contact-Footer: Impressum/Datenschutz-Links auf React Router `Link` umgestellt
- [x] tsconfig.json: `shared-docs` aus TypeScript-Check ausgeschlossen
- [x] TypeScript-Check: `npx tsc --noEmit` -> 0 Fehler

**Deliverables:** Routing funktioniert, Tailwind lokal, Ordnerstruktur steht.

**Entscheidungen:**
- Tailwind v4 statt v3: Nutzt `@tailwindcss/vite` Plugin direkt, kein separates PostCSS-Setup noetig
- Kein src/-Verzeichnis: Dateien bleiben im Root, da Vite und bestehende Imports das erwarten
- Navbar-Navigation: Hash-Links scrollen auf Homepage, navigieren von Subpages zurueck zur Homepage mit scrollTo-State
- Eurogarant aus Navbar entfernt (war `#eurogarant`, wird laut Plan nicht mehr als eigene Sektion gebraucht)

**Geschaetzte Komponenten:** 3-4 (App.tsx, HomePage, Layout, Stubs)
**Geschaetzte Zeilen:** ~400

---

### Phase 2: Hero, Quick-Choice & Trustbar
**Status:** ✅ Erledigt

**Ziel:** Oberer Bereich der Startseite komplett neu: Hero mit spezifischem Content, Quick-Choice-Kacheln, dezente Trustbar.

**Was bedeutet das konkret fuer den User?** Der erste Eindruck der Website ist sofort klar: Wer, was, wo, wie anfragen.

**Tasks:**
- [x] `Hero.tsx` ueberarbeitet: Neue Texte (KFZ Lindner in Berlin), 2 CTAs (Terminanfrage starten, Dienstleistungen ansehen), onTerminanfrageClick prop fuer spaeteres Modal
- [x] `QuickChoice.tsx` erstellt: 2 grosse Kacheln (Karosserie & Lack / Autoservice), onSelect callback fuer spaeteres Modal
- [x] `Trustbar.tsx` erstellt: 3 dezente Badges (Glasurit Partner, Eurogarant Fachbetrieb, KFZ-Meisterbetrieb) mit Icons
- [x] Eurogarant-Komponente: War bereits nicht in HomePage eingebunden, bleibt als Datei bestehen aber wird nicht genutzt
- [x] Neue Komponenten in components/home/ Ordner angelegt (Hero, QuickChoice, Trustbar)
- [x] HomePage.tsx aktualisiert: Importiert neue Komponenten aus components/home/
- [x] TypeScript-Check: `npx tsc --noEmit` -> 0 Fehler

**Deliverables:** Hero + Quick-Choice + Trustbar sichtbar auf Startseite.

**Risiken/Edge-Cases:**
- Quick-Choice Klick muss spaeter Modal oeffnen (erstmal nur Scroll zu Kontakt)
- Trustbar-Logos: Platzhalter bis echte Logos vom Kunden kommen
- Hero-Bild: Platzhalter bis echtes Foto/Drohne kommt

**Geschaetzte Komponenten:** 3 (Hero, QuickChoice, Trustbar)
**Geschaetzte Zeilen:** ~300

---

### Phase 3: Leistungen-Preview, Prozess & Warum Lindner
**Status:** ✅ Erledigt

**Ziel:** Mittlerer Bereich der Startseite: Service-Karten in 2 Kategorien, 5-Schritte-Prozess, Warum-Lindner-Block.

**Was bedeutet das konkret fuer den User?** Die wichtigsten Infos auf einen Blick: Was wird angeboten, wie laeuft es ab, warum Lindner.

**Tasks:**
- [x] `data/services.ts` erstellt: Service-Daten in 2 Kategorien (Karosserie/Lack + Autoservice)
- [x] `LeistungenPreview.tsx` erstellt: 2 Spalten-Gruppen mit Karten + CTA "Alle Dienstleistungen ansehen"
- [x] `ProcessSteps.tsx` erstellt: 5 Schritte visuell (Icons + Text)
- [x] `WhyLindner.tsx` erstellt: 3 Bullets (unter einem Dach, Familienbetrieb, klare Kommunikation)
- [x] Alte `Services.tsx` + `About.tsx` aus HomePage entfernt (ersetzt durch neue Komponenten)
- [x] TypeScript-Check

**Deliverables:** Leistungen-Preview, Prozess, Warum Lindner sichtbar.

**Risiken/Edge-Cases:**
- Service-Liste muss noch final vom Kunden bestaetigt werden
- Oldtimer: "auf Anfrage" markieren
- CTA "Alle Dienstleistungen ansehen" verlinkt auf /dienstleistungen

**Geschaetzte Komponenten:** 4 (services.ts, LeistungenPreview, ProcessSteps, WhyLindner)
**Geschaetzte Zeilen:** ~450

---

### Phase 4: Bewertungen, Karriere-Teaser, Kontakt & Footer
**Status:** ✅ Erledigt

**Ziel:** Unterer Bereich der Startseite: Handverlesene Bewertungen, Karriere-Hinweis, Kontakt-Block, Footer.

**Was bedeutet das konkret fuer den User?** Vertrauen aufbauen (Bewertungen), einfach Kontakt aufnehmen, rechtlich sauber.

**Tasks:**
- [x] `data/reviews.ts` erstellt: 4 statische Bewertungen (Platzhalter bis echte kommen)
- [x] `ReviewCards.tsx` erstellt: Statische Review-Cards (Zitat + Sterne + Initialen + Quelle)
- [x] `KarriereTeaser.tsx` erstellt: Dunkler Block mit Wrench-Icon + CTA -> /karriere
- [x] `ContactSection.tsx` erstellt: "Unter einem Dach" Messaging, Map-Platzhalter, Kontaktdaten
- [x] `Footer.tsx` erstellt: Eigene Komponente in shared/ mit beiden Firmierungen, Rechtslinks, ins Layout integriert
- [x] Alte `Careers` + `Contact` von HomePage entfernt, durch neue Komponenten ersetzt
- [x] `Navbar.tsx` angepasst: Neue Nav-Items (Leistungen, Ablauf, Bewertungen, Karriere, Kontakt), Terminanfrage-Button
- [x] TypeScript-Check: `npx tsc --noEmit` -> 0 Fehler

**Deliverables:** Startseite komplett (alle Sektionen).

**Entscheidungen:**
- Footer als globale Komponente in Layout (erscheint auf allen Seiten)
- KarriereTeaser mit dunklem (neutral-900) Hintergrund fuer visuellen Kontrast
- Navbar CTA: Button "Terminanfrage" statt Telefon-Link (vorbereitet fuer Modal in Phase 5)

**Geschaetzte Komponenten:** 5 (reviews.ts, ReviewCards, KarriereTeaser, ContactSection, Footer)
**Geschaetzte Zeilen:** ~550

---

### Phase 5: Terminanfrage-Modal & Sticky CTA
**Status:** ✅ Erledigt

**Ziel:** 2-Step Terminanfrage-Modal (Bereich waehlen -> Formular) + Mobile Sticky CTA.

**Was bedeutet das konkret fuer den User?** Terminanfrage in 30 Sekunden: Bereich waehlen, Daten eingeben, absenden.

**Tasks:**
- [x] `TerminanfrageModal.tsx` erstellt: Step 1 (Karosserie/Lack vs Autoservice), Step 2 (Formular)
- [x] Formular-Felder: Name*, Email*, Telefon (optional), Anliegen/Nachricht* (Textarea)
- [x] Optionale Felder: Kennzeichen, Wunschtermin (Freitext)
- [x] Formular-State-Management (useState, kein externer State)
- [x] Erfolgs- und Fehler-Zustaende (Frontend-only, kein Backend)
- [x] `StickyCTA.tsx` erstellt: Mobile-Only Sticky Button "Terminanfrage"
- [x] Quick-Choice + Hero CTAs an Modal angebunden
- [x] Alle "Terminanfrage" Buttons auf der Seite oeffnen das Modal (Navbar Desktop + Mobile, Hero, QuickChoice, StickyCTA)
- [x] TypeScript-Check: `npx tsc --noEmit` -> 0 Fehler

**Entscheidungen:**
- Modal-State in Layout.tsx mit useOutletContext fuer saubere Prop-Weitergabe an Seiten
- TerminanfrageModal z-index 100, StickyCTA z-index 90 (unter Modal, ueber Content)
- Body-Scroll wird bei offenem Modal gesperrt (document.body.style.overflow)
- StickyCTA erscheint erst nach 600px Scroll (nach Hero), nur auf Mobile (md:hidden)
- Formular-Submit simuliert (1.5s Timeout), zeigt Erfolgs-State, kein Backend

**Deliverables:** Funktionierendes Terminanfrage-Modal, Sticky CTA auf Mobile.

**Risiken/Edge-Cases:**
- Modal muss ueber allem liegen (z-index)
- Formular-Validierung: Email-Format, Pflichtfelder
- Mobile: Modal muss gut scrollbar sein
- Kein Backend: Formular zeigt "Danke"-Meldung, sendet aber noch nicht
- Body-Scroll sperren wenn Modal offen

**Geschaetzte Komponenten:** 3 (TerminanfrageModal, StickyCTA, Modal-Hook/Context)
**Geschaetzte Zeilen:** ~400

---

### Phase 6: Subpage /dienstleistungen
**Status:** ✅ Erledigt

**Ziel:** Detailseite mit SEO-Tiefe fuer alle Leistungen, getrennt in Karosserie/Lack + Autoservice.

**Was bedeutet das konkret fuer den User?** Wer Details will, findet sie hier - klar strukturiert, nicht ueberladend.

**Tasks:**
- [x] `data/services.ts` erweitert: detailDescription, benefits[], FAQItem[], dienstleistungenFAQ, categoryKey
- [x] `DienstleistungenPage.tsx` in pages/ fertiggestellt: Hero + Kategorien + FAQ + Bottom-CTA
- [x] `ServiceCategory.tsx`: Wiederverwendbare Kategorie-Blocks mit Icon, Detail, Benefits, CTA
- [x] Pro Leistung: Kurzbeschreibung + Nutzen-Bullets + CTA "Terminanfrage stellen"
- [x] `ServiceFAQ.tsx`: 6 FAQ mit Accordion (open/close) am Ende der Seite
- [x] Oldtimer: "auf Anfrage" Badge markiert
- [x] Scroll-to-top bei Seitenwechsel (bereits in Layout.tsx via ScrollToTop-Komponente)
- [x] Terminanfrage-CTAs uebergeben categoryKey (karosserie/autoservice) an Modal
- [x] TypeScript-Check: `npx tsc --noEmit` -> 0 Fehler
- [x] Vite Build: erfolgreich

**Deliverables:** /dienstleistungen Seite mit allen Services + FAQ.

**Entscheidungen:**
- ServiceCategory als eigene Komponente in components/dienstleistungen/ fuer Wiederverwendbarkeit
- FAQ als Accordion (ein Item gleichzeitig offen) fuer bessere UX
- categoryKey in ServiceCategory-Interface hinzugefuegt um Terminanfrage-Modal mit vorausgewaehltem Bereich zu oeffnen
- Bottom-CTA "Anliegen gefunden?" als Conversion-Element am Seitenende

**Geschaetzte Komponenten:** 3 (ServiceCategory, ServiceFAQ, DienstleistungenPage)
**Geschaetzte Zeilen:** ~350

---

### Phase 7: Subpage /karriere
**Status:** ✅ Erledigt

**Ziel:** Karriereseite mit offenen Stellen und einfachem Bewerbungsformular.

**Was bedeutet das konkret fuer den User?** Bewerber koennen sich schnell und ohne Huerden bewerben.

**Tasks:**
- [x] `KarrierePage.tsx` in pages/ fertiggestellt: Hero + "Was dich erwartet" + Stellen + Formular
- [x] `data/jobs.ts`: Job-Daten extrahiert (4 Jobs: Karosseriebauer, Fahrzeuglackierer, Ausbildung, Initiativbewerbung)
- [x] `components/karriere/JobCard.tsx`: Einzelne Stellenanzeige mit Typ-Icon, Aufgaben, Anforderungen, Bewerben-CTA
- [x] `components/karriere/BewerbungsFormular.tsx`: Name*, Email*, Telefon, Position (Select), Nachricht* (kein Upload in MVP)
- [x] Initiativbewerbung als Option (eigene JobCard + Select-Option im Formular)
- [x] Keine Mitarbeiterfotos / keine Teamseite
- [x] "Jetzt bewerben" scrollt zum Formular und setzt Position vor
- [x] TypeScript-Check: `npx tsc --noEmit` -> 0 Fehler
- [x] Vite Build: erfolgreich

**Deliverables:** /karriere Seite mit Jobs + Bewerbungsformular.

**Risiken/Edge-Cases:**
- Welche Jobs aktuell offen sind muss vom Kunden kommen
- Formular: Frontend-only (kein Backend)
- Upload: Erst in Phase 2

**Geschaetzte Komponenten:** 4 (KarrierePage, JobCard, BewerbungsFormular, jobs.ts)
**Geschaetzte Zeilen:** ~500

---

### Phase 8: Impressum, Datenschutz & SEO-Grundlagen
**Status:** ✅ Erledigt

**Ziel:** Rechtsseiten + Meta-Tags + grundlegende SEO-Optimierungen.

**Was bedeutet das konkret fuer den User?** Website ist rechtlich sauber und wird von Suchmaschinen gefunden.

**Tasks:**
- [x] `ImpressumPage.tsx`: Beide Firmierungen sauber dargestellt (KFZ Lindner + Autoservice Lindner), Streitschlichtung, Haftung fuer Inhalte/Links, Urheberrecht, Platzhalter-Hinweis fuer noch fehlende Angaben
- [x] `DatenschutzPage.tsx`: Umfassende DSGVO-Struktur mit 11 Sektionen (Verantwortlicher, Allgemeines, Rechtsgrundlage, Logfiles, Kontaktformular, Bewerbungsformular, Cookies, Externe Dienste, Rechte, SSL, Aktualitaet)
- [x] Meta-Tags pro Seite: document.title + meta description via useEffect in HomePage, DienstleistungenPage, KarrierePage, ImpressumPage, DatenschutzPage
- [x] index.html: OG-Tags, Twitter-Cards, Favicon-Link, Canonical, robots meta, Schema.org LocalBusiness/AutoRepair JSON-LD
- [x] Semantisches HTML geprueft: Hero h2 -> p korrigiert (war vor h1), alle Seiten haben korrekte H1-Hierarchie
- [x] TypeScript-Check: `npx tsc --noEmit` -> 0 Fehler
- [x] Vite Build: erfolgreich (447kB JS, 92kB CSS gzip)

**Deliverables:** /impressum + /datenschutz + Meta-Tags + Schema.org + OG-Tags.

**Entscheidungen:**
- Meta-Tags per useEffect statt react-helmet (kein zusaetzliches Package noetig fuer SPA ohne SSR)
- Schema.org als AutoRepair Type (spezifischer als LocalBusiness)
- Google Fonts in Datenschutz erwaehnt (da extern geladen)
- Impressum mit visuellem "unter einem Dach"-Hinweis und Platzhalter-Warnung (amber) fuer fehlende Angaben
- OG-Image und Favicon als Kommentar/Platzhalter (bis echtes Material kommt)

**Risiken/Edge-Cases:**
- Rechtstexte muessen vom Kunden/Anwalt geprueft/finalisiert werden
- OG-Image muss noch erstellt werden
- Favicon muss noch erstellt werden
- Google Fonts: Entweder in Datenschutz behalten oder lokal hosten (self-hosting wuerde DSGVO-Abschnitt vereinfachen)

**Geschaetzte Komponenten:** 2 (ImpressumPage, DatenschutzPage)
**Geschaetzte Zeilen:** ~500

---

### Phase 9: Feinschliff & Responsive-Check
**Status:** ✅ Erledigt

**Ziel:** Mobile-First Optimierung, Animationen, Accessibility, Performance.

**Was bedeutet das konkret fuer den User?** Die Website sieht auf allen Geraeten perfekt aus und laeuft schnell.

**Tasks:**
- [x] Responsive-Check alle Breakpoints (Mobile 375px, Tablet 768px, Desktop 1280px+)
- [x] Framer-Motion Animationen feintunen (dezent, nicht ueberladend): hover:scale auf 1.02 reduziert
- [x] Scroll-Verhalten testen (Hash-Links, Subpage-Navigation, Back-Button)
- [x] Accessibility: Fokus-States, ARIA-Labels, Kontraste
- [x] Performance: Bildoptimierung, Lazy Loading, Code-Splitting
- [x] Console-Errors bereinigen (setTimeout cleanup)
- [x] TypeScript-Check final: 0 Fehler

**Deliverables:** Polierte, responsive, barrierefreie Website.

**Entscheidungen:**
- Code-Splitting: React.lazy + Suspense fuer alle Subpages (Dienstleistungen, Karriere, Impressum, Datenschutz)
- Accessibility: focus-visible Styles, prefers-reduced-motion Support, ARIA-Labels auf Navbar/Modal/FAQ/StickyCTA
- TerminanfrageModal: role="dialog", aria-modal, Escape-Key-Handler, aria-invalid/aria-describedby fuer Formularvalidierung
- ServiceFAQ: aria-expanded, aria-controls fuer Accordion
- Hero: fetchPriority="high" + preload link fuer LCP-Optimierung, hover:scale-[1.02] statt 1.05
- StickyCTA: safe-area-inset-bottom fuer iPhones mit Home-Indicator
- BewerbungsFormular: setTimeout-Cleanup via useRef bei Unmount
- styles.css: prefers-reduced-motion Media Query deaktiviert Animationen, focus-visible global

**Geschaetzte Zeilen:** ~200 (Anpassungen)

---

## E) Edge-Case-Checkliste (gebuendelt)

### UI/UX
- [ ] Mobile Menu: Schliesst bei Navigation
- [ ] Modal: Body-Scroll gesperrt
- [ ] Sticky CTA: Nur auf Mobile sichtbar
- [ ] Hash-Links: Funktionieren von Subpages zurueck zur Startseite
- [ ] "Zurueck"-Button: Korrektes Verhalten bei Subpages

### Daten
- [ ] Platzhalter-Bilder ueberall wo echte Fotos fehlen
- [ ] Platzhalter-Bewertungen klar als Beispiele markiert (intern)
- [ ] Service-Liste: Kann einfach in data/services.ts angepasst werden

### Formular
- [ ] Email-Validierung
- [ ] Pflichtfeld-Pruefung
- [ ] Erfolgs-/Fehler-States
- [ ] Kein Doppel-Submit (Button disabled nach Klick)
- [ ] Formular-Reset nach Erfolg

### Performance
- [ ] Lazy Loading fuer Bilder
- [ ] Code-Splitting fuer Subpages (React.lazy)
- [ ] Keine unnoetig grossen Bundles

---

## F) Architektur-Warnungen

1. **Tailwind CDN -> Lokal:** MUSS in Phase 1 passieren, sonst koennen wir kein purge/tree-shaking machen und der Production-Build ist riesig.

2. **Kein Backend in MVP:** Alle Formulare sind Frontend-only. Das ist OK fuer die Demo/Testumgebung, aber fuer Go-Live brauchen wir einen E-Mail-Versand-Dienst (z.B. Resend, EmailJS, oder eigener API-Endpoint).

3. **Zwei Firmierungen:** Das Impressum muss rechtlich sauber sein. Wir bauen die Struktur, aber die finalen Texte muessen vom Kunden/Anwalt kommen.

4. **Bilder:** Aktuell nur Platzhalter (Unsplash/Picsum). Fuer Go-Live brauchen wir echte Fotos. KI-generierte Bilder sind laut Transkript eine Option.
