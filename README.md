# VALAPP Desktop — Modern Companion for VALORANT

[![Download](https://img.shields.io/badge/Download-Latest%20Release-brightgreen)](https://github.com/Main-Zenato/VALAPP-desktop/releases/latest)
![Downloads](https://img.shields.io/github/downloads/Main-Zenato/VALAPP-desktop/total?cacheSeconds=0)
![Platform](https://img.shields.io/badge/Platform-Windows%2010%2F11-blue)
![Version](https://img.shields.io/badge/Version-5.0.0-orange)
![Built with Tauri](https://img.shields.io/badge/Tauri-2-FFC131?logo=tauri&logoColor=white)

VALAPP is a **lightweight, secure, and high-performance desktop companion for VALORANT**.  
Designed for players who want **full control over their inventory, match insights, and loadout** — without dealing with the slow menus of the official client.

> **v5.0** — Complete rewrite from WPF to **Tauri 2 (Rust + React)**: faster, more secure, and modernized from the ground up.

---

## What's New in v5.0

VALAPP Desktop has been fully rebuilt on **Tauri 2** (Rust backend + TypeScript/React frontend), replacing the previous WPF/.NET 8 architecture.

| What changed | Why it matters |
|---|---|
| **Modern web UI** | Smooth animations, responsive layout, better visuals |
| **Auto-updates** | In-app update check and install — no manual re-download |
| **Multi-language UI** | English and French out of the box |
| **11 resource locales** | Skin names, agent names, mission titles in your language |
| **Buddy equipping** | Equip weapon buddies directly from the skin detail panel |
| **Full item equipping** | Equip player cards, sprays (6-slot wheel), titles — all in-app |
| **Store skin previews** | Browse levels, chromas, and videos directly in the store |
| **Match detail panel** | Click any match to see full scoreboard with KDA, ACS, HS% |
| **Player Inspector** | Click any player in party, friends, or match history to view their rank and peak |

---

## Features

### Pregame Skin Swapping
Change your **weapon skins, buddies, and chromas during Agent Selection**, before the match starts.  
Browse levels and chromas with preview images and videos — then equip in one click.

### Tactical Insights
Upon entering the **pregame phase**, VALAPP shows:
- Your starting side (**Attack or Defense**)
- Live party composition with agent picks and ranks
- Match map with name and splash art

### Quick Dodge
Leave a match during Agent Selection with a single click — with a confirmation prompt, no automation.

### Full Collection Manager
Browse your entire inventory: **skins, buddies, sprays, player cards, and titles**.

- **Skins** — grouped by weapon, detail panel with all levels, chromas, and videos. Equip any owned level or chroma.
- **Buddies** — equip per weapon directly from the skin detail panel.
- **Player Cards** — wide and standard art preview, equip globally.
- **Sprays** — full 6-slot spray wheel, equip per slot with animation previews.
- **Titles** — equipped title displayed with one click.
- **Equipped badges** — green checkmark on every currently equipped item across all categories.

### Daily Store & Bundle Tracker
Check your **daily weapon store offers** and **featured bundles** without launching the game.

- Skin level and chroma preview directly in the store (with videos)
- Remaining time in readable format (e.g. `2d 8h`, `1h 30m`)
- VP / RP / Kernel Credits wallet display
- Accessory store (sprays, buddies, cards, titles) with prices

### Multi-Account Management
Switch between multiple **Riot accounts in seconds**.

- Accounts stored locally, sessions encrypted with **Windows DPAPI**
- Seamless account switch — one click in the sidebar
- Silent refresh on startup — no login screen if sessions are valid
- Full add / remove / switch without relaunching

### Friends & Party Panel
Real-time friends list powered by the **Riot XMPP protocol**.

- Online / In Game / Away / Offline status
- Queue type and map for friends in a match
- Rank icon next to each friend
- Click any friend to open the **Player Inspector**
- Party invitations via XMPP

### Player Inspector
Click any player — in party, friends, or match history — to open a side panel showing:
- Current rank and RR
- Peak rank reached
- Account level
- Cached for 5 minutes to stay within rate limits

### Match History & Details
Full match history on your profile page.

- K/D/A, ACS, HS%, W/L per match
- RR delta for competitive games
- Click any match to expand a full scoreboard: both teams, all players, ranked by ACS
- Agent icons, map name and splash

### Contracts & Battlepass
- Daily and weekly missions with progress bars and countdowns
- Future weekly missions shown in advance, grouped by week
- Battlepass current tier and next reward preview

### Server Status
Real-time Riot server status per region.

- Service grid (Client, Store, Ingame, Voice, etc.)
- 30-day incident history chart
- Global status summary

### Auto-Updates
VALAPP checks for updates on launch.

- Download and install directly from the app
- Progress bar during download
- Signed releases with **minisign** — tamper-proof

### Settings
- **4 accent themes**: Valorant (pink-red), Blue, Green, Purple
- **UI language**: English / French
- **Resource language**: 11 locales for skin names, agent names, mission titles
  - `en-US`, `fr-FR`, `de-DE`, `es-ES`, `es-MX`, `pt-BR`, `ru-RU`, `tr-TR`, `ja-JP`, `ko-KR`, `zh-CN`
- Danger zone: clear all accounts, clear collection cache

---

## Privacy & Security

- **100% local** — no data sent to any third-party server
- **No analytics, no telemetry, no tracking**
- Credentials encrypted with **Windows DPAPI** per account
- No interaction with game files, game memory, or Vanguard (anti-cheat)
- No log reading, no process injection, no memory reading
- Operates exclusively through **authenticated Riot web APIs (OAuth)**

---

## Installation

1. Download the **latest installer** from the [Releases](https://github.com/Main-Zenato/VALAPP-desktop/releases/latest) tab.
2. Run `VALAPP Desktop_x.x.x_x64-setup.exe`.
3. Launch the app — it will prompt you to log in via the **Riot secure login WebView**.

**Auto-updates are included** — future versions will install without re-downloading manually.

---

## Requirements

- Windows 10 / 11 (64-bit)
- WebView2 Runtime *(pre-installed on most Windows 11 systems)*

> No .NET runtime required — VALAPP v5.0 is a fully native Rust binary.

---

## Technical Stack

| Layer | Technology |
|---|---|
| Backend | Rust (Tauri 2) |
| Frontend | TypeScript + React 19 |
| Styling | Tailwind CSS v4 |
| Font | Inter Variable |
| Icons | Lucide React |
| Session encryption | Windows DPAPI |
| Friends protocol | Riot XMPP (TCP/TLS) |
| Updates | tauri-plugin-updater + minisign |
| CI/CD | GitHub Actions — build + sign + release on tag |

---

## Disclaimer

VALAPP Desktop is an **independent third-party application** and is **not affiliated with Riot Games**.

It does **not** interact with the game client, game files, logs, memory, or Vanguard.  
It operates exclusively through authenticated Riot web APIs, the same way the official client does.

Use of third-party tools remains **at the user's own discretion**.
