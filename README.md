# VALAPP Desktop — Modern Companion for VALORANT

[![Download](https://img.shields.io/badge/Download-Latest%20Release-brightgreen)](https://github.com/Main-Zenato/VALAPP-desktop/releases/latest)
![Downloads](https://img.shields.io/github/downloads/Main-Zenato/VALAPP-desktop/total?cacheSeconds=0)
![Platform](https://img.shields.io/badge/Platform-Windows%2010%2F11-blue)
![Built with Tauri](https://img.shields.io/badge/Tauri-2-FFC131?logo=tauri&logoColor=white)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?logo=discord&logoColor=white)](https://discord.gg/6BZekAEqDD)

## The fastest way to manage your VALORANT inventory.

**VALAPP** is a **lightweight, secure, and ultra-fast desktop companion for VALORANT**. Get instant access to your skins, loadout, match history, and party status — without the bloat of the official client.

**100% local. No telemetry. No tracking. Just works.**

---

## Table of Contents

- [Screenshots](#screenshots)
- [Core Features](#core-features)
- [Privacy & Security](#privacy--security)
- [Getting Started](#getting-started)
- [Technical Stack](#technical-stack)
- [About This Project](#about-this-project)
- [Legal](#legal)

---

## Screenshots

### Daily Store
![Store](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/store.png)

### Collection Manager
![Collection](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/collection.png)

### Match History & Career Stats
![Profile](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/profile.png)

### Contracts & Battle Pass
![Contracts](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/contrat.png)

---

## Core Features

### Pre-Game Loadout Manager
**Swap skins, buddies, and chromas in Agent Selection — before the match starts.**

- Browse all owned skin levels and variants with live previews
- Watch video showcases of premium skins
- Equip any owned chroma in one click
- No waiting for slow menus to load

### Live Match Intelligence
**See your team composition in real-time.**

- Party members with current rank and RR
- Enemy agent selection as the game reveals them
- Your starting side (Attack / Defense)
- Map name and splash art
- Score updates

### Collection Manager — Browse Everything
**Organize and equip your entire inventory from one interface.**

| Category | Features |
|----------|----------|
| **Skins** | Group by weapon, preview all levels & chromas, watch demo videos, equip any variant |
| **Buddies** | Equip per weapon, integrated in skin detail panel |
| **Sprays** | Full 6-slot spray wheel with animation previews |
| **Player Cards** | Wide and standard art formats, equip globally |
| **Titles** | Set active title with one click |
| **Equipped Status** | Green checkmark on all currently active items |

### Daily Store & Bundles
**Track your shop without launching the official client.**

- Daily weapon store with VP prices
- Featured bundles with remaining time (`2d 8h`, `1h 30m`)
- Full skin preview: levels, chromas, videos
- Accessory store (sprays, buddies, cards, titles with KC prices)
- Live wallet: VP, RP, Kernel Credits

### Match History & Career Stats
**Detailed breakdown of every competitive match.**

- Full game stats: K/D/A, ACS, HS%, W/L, RR delta
- Click any match to view detailed scoreboard
- Both teams ranked by performance
- Agent icons, map info, player ranks
- Recent stats summary: win rate, K/D ratio, headshot %

### Multi-Account Manager
**Switch between Riot accounts instantly.**

- All accounts stored locally with encrypted sessions (Windows DPAPI)
- One-click account switching in the sidebar
- Silent refresh on startup — no login screen for valid sessions
- Add, remove, or switch without relaunching
- Each account keeps its own stats and collections

### Friends & Party Network
**Real-time presence powered by Riot XMPP protocol.**

- Online / In Game / Away / Offline status
- Queue type and current map for friends in-game
- Rank icons and current RR
- Click any friend to inspect stats
- Send party invitations directly through XMPP

### Player Inspector
**Instantly check any player's stats — from party, friends, or match history.**

- Current rank and RR
- Peak rank this season
- Account level

### Contracts & Battle Pass
**Never miss a mission or season reward.**

- Daily and weekly mission progress with countdowns
- Future missions grouped by week (never miss an activation)
- Battle Pass tier progression
- Next reward preview

### Server Status Monitor
**Check Riot infrastructure in real-time.**

- Service health grid: Client, Store, In-Game, Voice, etc.
- 30-day incident timeline
- Global status summary
- Per-region availability

### Automatic Updates
**Always up-to-date without manual downloads.**

- Checks for updates on launch
- Direct in-app download and install
- Progress bar during installation
- Signed releases with **minisign** verification

### Customization
- **4 accent themes**: Valorant red, Blue, Green, Purple
- **UI language**: English or French
- **Resource language**: 11 regions (en-US, fr-FR, de-DE, es-ES, es-MX, pt-BR, ru-RU, tr-TR, ja-JP, ko-KR, zh-CN)
- **Streamer Mode**: hides account names and tags from the UI for privacy on stream
- **Danger zone**: Clear all accounts or collection cache

---

## Privacy & Security

Your data stays on your machine.

- **100% local** — zero data sent to external servers
- **No telemetry, no analytics, no tracking**
- Credentials encrypted with Windows DPAPI per account
- **Never touches:**
  - Game client files or logs
  - Game process memory
  - Vanguard anti-cheat
  - Your system registry

**Architecture:**
- Native binary (Rust) — instant startup, minimal memory
- Encrypted sessions stored locally
- Rate-limited requests to prevent abuse
- Signed releases with minisign verification

---

## Getting Started

### System Requirements

- **OS:** Windows 10 / 11 (64-bit)
- **RAM:** 100 MB minimum (typically 50-70 MB in use)
- **Dependencies:** WebView2 Runtime (for secure login)
  - Windows 11: Built-in
  - Windows 10: Auto-installed if missing

### Installation (2 minutes)

1. Download from [Releases](https://github.com/Main-Zenato/VALAPP-desktop/releases/latest)
2. Run `VALAPP Desktop_x.x.x_x64-setup.exe`
   - Windows may warn "Publisher could not be verified" → click **More info** → **Run anyway**
3. Let it install (~30 seconds)
4. Launch VALAPP from Start menu

**That's it.** Future updates install automatically.

**WebView2 (Windows 10 only):** If missing, VALAPP will auto-download it on first launch.

### First Run

1. **Log in** with your Riot account (secure OAuth login)
2. *(Optional)* Go to **Settings** → customize theme, language, region
3. Start with **Store** to see your daily shop
4. Check **Collection** to set up your loadout
5. Invite friends from **Party**

---

## Technical Stack

Built on proven, industry-standard technologies:

| Layer | Technology | Why |
|-------|-----------|-----|
| **Backend** | Rust + Tauri 2 | Fast, secure, minimal footprint |
| **Frontend** | React 19 + TypeScript | Modern, type-safe UI |
| **Styling** | Tailwind CSS v4 | Consistent design system |
| **Encryption** | Windows DPAPI | OS-level account security |
| **Protocol** | Riot XMPP (TCP/TLS) | Real-time friend presence |
| **Updates** | tauri-plugin-updater + minisign | Tamper-proof releases |
| **CI/CD** | GitHub Actions | Automated builds and signing |

---

## About This Project

VALAPP Desktop is an **independent third-party companion** — not affiliated with or endorsed by Riot Games.

**How VALAPP works:**
- Authenticates using your Riot credentials
- Accesses data through Riot's infrastructure
- Same data scope as the official client

**What VALAPP never does:**
- ❌ Touches game client files, logs, or memory
- ❌ Interacts with Vanguard anti-cheat
- ❌ Injects or modifies any system processes
- ❌ Sends data to non-Riot servers

---

## Legal

© 2025 Zenato — All rights reserved.

VALAPP Desktop is proprietary freeware. The source code is not public.
Redistribution of any binaries without explicit written permission is prohibited.

VALAPP Desktop is an independent third-party tool, not affiliated with or endorsed by Riot Games.
VALORANT and all related marks are trademarks of Riot Games, Inc.
