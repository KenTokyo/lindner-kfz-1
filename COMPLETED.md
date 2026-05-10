**11.05.2026**

# Hero Sektion
✅ Trustbar (Glasurit, Eurogarant, Kfz-Meisterbetrieb) aus dem Sub-Hero-Bereich entfernt und in den Footer verschoben.

# Dienstleistungen-Sektion
✅ Servicekarten (`LeistungenPreview.tsx`) in Liquid Glass Optik umgewandelt (halbtransparente, verschwommene Boxen mit weißem Rahmen).
✅ Schriftfarbe und Icons innerhalb der Karten für optimale Lesbarkeit auf reinweiß (`text-white`) gesetzt.
✅ Hintergrund-Overlay der Karten leicht abgedunkelt, um den Kontrast der weißen Schrift auf hellen Bildern zu verbessern.

# Karriere-Sektion
✅ Neue Foto-Collage ("Unser Team & Werkstatt") am Anfang der Karriereseite hinzugefügt (6 Platzhalter-Bilder, angelehnt an die "Über uns"-Collage).
✅ Job-Karten (`JobCard.tsx`) ebenfalls mit Hintergrundbildern versehen und in die Liquid Glass Optik umgewandelt.

# Footer
✅ Trustbar bündig in den oberen Teil des Footers integriert.

# Über uns Sektion & Navbar
✅ 'Über uns' Menüpunkt zur Navbar hinzugefügt, der via Anchor-Link (`#about`) flüssig zur Mainpage-Sektion scrollt.
✅ Einzelbild in der 'Warum Lindner' Sektion (`WhyLindner.tsx`) durch eine moderne 5-Bilder-Collage ersetzt (Bento-Grid-Layout).
✅ Bilder in der Collage mit reaktiven Hover-Effekten (`scale`) ausgestattet.
✅ Argumente-Liste (`WhyLindner.tsx`) in strukturierte Liquid Glass Karten im dunklen Theme umgewandelt (`w-full` für gleiche optische Breite wie Dienstleistungskarten).
✅ Icon-Container in den Sub-Hero-Karten sowie in den Dienstleistungs-Karten (`LeistungenPreview.tsx`) auf soliden weißen Hintergrund (`bg-white`) und dunkle Icons gesetzt, um Sichtbarkeit und Kontrast zu maximieren.

# Dienstleistungen-Unterseite
✅ Servicekarten (`ServiceCategory.tsx`) an das Liquid Glass Design der Startseite angepasst (mit vollflächigen Hintergrundbildern, abgedunkeltem Overlay und halbtransparenten Content-Boxen), dabei aber das breite Listen-Layout mit Details und Checklisten beibehalten.

# Startseite "Worum geht es?" (QuickChoice) Sektion
✅ Statische Karten in `QuickChoice.tsx` durch Karten mit Hintergrundvideos für "Karosserie & Lack" und "Autoservice" ersetzt.
✅ Videos zeigen initial ein statisches Bild und werden via Hover (`onMouseEnter`) abgespielt.
✅ Layout und Styling der Karten an das Design der Dienstleistungs-Karten (`LeistungenPreview`) angeglichen.
✅ "Terminanfrage starten"-Button als deutlich sichtbares Element in die Karte integriert, Weiterleitungsfunktionalität bleibt bestehen.

# Globaler Footer Redesign (Baggy Studio Style)
✅ Footer Container an das exakte Design von beggistudios.com angepasst: Die äußere Struktur als Schild (rounded-[3rem] mit Schatten) und vier weißen 'Löchern' (Punkte) in den Ecken zur Aufhängungs-Simulation.
✅ Footer-Design an den minimalistischen "Baggy Studio"-Stil angepasst (dunkles High-Contrast-Theme, reduzierte Struktur).
✅ Zertifizierte Partner (Glasurit, Eurogarant, Meisterbetrieb) in einer sauberen, oberen Leiste platziert.
✅ Riesiger, responsiver E-Mail-Call-to-Action (`info@autoservice-lindner.de`) im Zentrum eingebaut (`text-[7rem]` auf großen Screens).
✅ Lindner Logo, rechtliche Links (Impressum, Datenschutz) und Copyright übersichtlich in einer sauberen, unteren Leiste integriert.
✅ Jeglichen vorherigen Content (Logo, Partner, rechtliche Links) erfolgreich beibehalten und in das neue Layout übersetzt.

# Terminanfrage Modal & QuickChoice
✅ In `QuickChoice.tsx` (Worum geht es) Hover-Effekt der Buttons "Terminanfrage starten" auf blaue Kontrastfarbe (`bg-blue-600`) und blauen Schatten (`shadow-blue-600/30`) geändert.
✅ In `TerminanfrageModal.tsx` die Hover-Rahmen, Hintergründe der Icons sowie die Submit- und Schließen-Buttons in blau (inklusive blauen Schatten-Effekten) gestaltet.