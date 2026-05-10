# RL-NEXUS | Modern Rocket League Tracking Ecosystem

![Rocket League](https://img.shields.io/badge/Game-Rocket%20League-blue)
![Maintained](https://img.shields.io/badge/Maintained-Yes-green)
![Status](https://img.shields.io/badge/Status-Development%20/Showcase-orange)

RL-NEXUS ist ein hochmodernes Tracking-Ökosystem für Rocket League-Spieler. Im Gegensatz zu herkömmlichen Plattformen liegt der Fokus hier auf einer cleanen User Experience, detaillierten Club-Statistiken und einer nahtlosen Integration zwischen Web-Interface und Discord-Bot.

---

## 🚀 Der Tech-Stack

Das Projekt nutzt einen professionellen Enterprise-Stack, der auf Performance, Skalierbarkeit und Typensicherheit ausgelegt ist.

### Frontend
- **Vite & React**: Blitzschnelles Tooling und komponentenbasierte UI.
- **TypeScript**: Durchgehende Typensicherheit für fehlerfreien Code.
- **SASS**: Modulares Styling mit Variablen und Mixins für komplexe Themes.

### Backend
- **NestJS (Node.js)**: Modulare Server-Architektur für saubere Geschäftslogik.
- **TypeScript**: Shared Types für die Kommunikation mit dem Frontend.
- **PostgreSQL**: Relationale Datenbank zur Speicherung von Clubs, User-Historie und Leaderboards.
- **Redis**: High-Performance Caching, um API-Rate-Limits zu umgehen und Ladezeiten zu minimieren.

### Discord Bot
- **Discord.js (JavaScript)**: Schnelle, ereignisgesteuerte Interaktion mit der Community.
- **Redis**: Zugriff auf gecachte Stats für Echtzeit-Abfragen via Slash-Commands.

---

## ✨ Kern-Features

- **Modernes Dashboard**: Weg von überladenen Tabellen, hin zu einem fokussierten Glassmorphism-Design.
- **Peak-Tracking**: Prominente Anzeige des All-Time-High MMR und Ranges.
- **Club-Management**: Eigene Sektion für Ingame-Clubs mit Mitglieder-Roster, Durchschnitts-MMR und globalem Club-Ranking.
- **Dynamischer Dark/Light Mode**: Intelligentes Theme-System, das Benutzereinstellungen dauerhaft speichert.
- **Modern Searchbar**: Intuitive Split-Searchbar mit Plattform-Auswahl und Tastatur-Shortcuts (z.B. `/`).
- **Discord Integration**: Abfrage von Profilen und Club-Stats direkt auf dem eigenen Server.

---

## 🏗️ Architektur & Workflow

1. **Datenerfassung**: Das NestJS Backend kommuniziert mit externen APIs, um Spielerdaten abzurufen.
2. **Caching-Layer**: Redis speichert diese Daten für einen definierten Zeitraum (z.B. 5 Min.), um die API zu entlasten.
3. **Persistenz**: PostgreSQL verwaltet dauerhafte Daten wie Club-Zugehörigkeiten und Langzeit-Fortschritte.
4. **Distribution**:
    - Das **Frontend** stellt die Daten visuell aufbereitet dar.
    - Der **Discord Bot** liefert die wichtigsten Kennzahlen direkt im Chat.

---

## 🛠️ Installation & Setup (Entwicklung)

### Voraussetzungen
- Node.js (v18+)
- PostgreSQL & Redis Instanz (z.B. via Docker oder Supabase)

### Backend
```bash
cd backend
npm install
npm run start:dev
```
### Backend
```bash
cd frontend
npm install
npm run dev
```

### Discord Bot
```bash
cd TrackerBot
npm install 
npm run start
```

## 🎨 Design-Philosophie
RL-NEXUS bricht mit dem veralteten Look klassischer Tracker. Wir setzen auf:

- Spacing & Whitespace: Weniger ist mehr.
- Akzentuierung: Gezielter Einsatz von Rocket League Blau und Orange.
- Responsive Design: Optimale Darstellung auf Desktop, Tablet und Smartphone.

## 📝 Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen finden Sie in der [LICENSE](LICENSE) Datei.