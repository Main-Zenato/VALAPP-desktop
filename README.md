# VALAPP Desktop — Modern Companion for VALORANT

[![Download](https://img.shields.io/badge/Download-Latest%20Release-brightgreen)](https://github.com/Main-Zenato/VALAPP-desktop/releases/latest)
![Downloads](https://img.shields.io/github/downloads/Main-Zenato/VALAPP-desktop/total?cacheSeconds=0)
![Platform](https://img.shields.io/badge/Platform-Windows%2010%2F11-blue)
![Built with Tauri](https://img.shields.io/badge/Tauri-2-FFC131?logo=tauri&logoColor=white)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?logo=discord&logoColor=white)](https://discord.gg/6BZekAEqDD)

## The Valorant companion I wanted — so I built it.

**VALAPP** is a desktop companion for VALORANT. Check your shop, manage your collection, apply **loadout presets by map**, scout your lobby, and follow your matches — all outside the game, without launching the client.

**Made by a player.** 100% local — no telemetry, no tracking, no data resale.

---

## Table of Contents

- [What's New in 5.4](#whats-new-in-54)
- [Screenshots](#screenshots)
- [Core Features](#core-features)
- [Privacy & Security](#privacy--security)
- [Getting Started](#getting-started)
- [Technical Stack](#technical-stack)
- [About This Project](#about-this-project)
- [Legal](#legal)

---

## What's New in 5.4

**Friends & chat**
- Full in-app **chat** with friends — send and receive messages in real time over Riot XMPP, with persistent history and unread badges
- **Roster management** — add or remove friends and handle incoming/outgoing friend requests

**Scouting & stats**
- **Advanced scoreboard stats** — ADR, first kills/deaths, plants/defuses, and multikill badges (2K / 3K / 4K / Ace)
- **Per-player platform tags** (PC / PS5 / Xbox) — console ranks are clearly labeled and never mixed with PC ranks
- **Premade detection** — spot which players queued together as a group, on both teams, right from the live match
- **Smart rank loading** — competitive scoreboards appear instantly, with any missing ranks filling in progressively; outside competitive, ranks stay hidden and load only on demand (a **Reveal** button, or automatically when you open a player's inspector) — keeping requests well under Riot's limits

**New tabs**
- **Purchase History** — your real payment history plus every VP / RP / Kingdom Credits transaction
- **Season Goal** — set a target rank and track your RR progression over time (chart + ranked stats)
- **Game Info** — Agents (abilities), Maps (annotatable 2D layouts), and Weapons (stats & damage)
- **Lineups & Tips** — community clips for the current map, in-app
- **World Leaderboard** — regional competitive ranking

**Contracts & economy**
- Account **XP & level** card, **daily XP checkpoints**, and XP + Kingdom Credits earned per match
- Browse **previous battle passes**

**Quality of life**
- **Default account** (star) loaded first at startup
- **Account health** card (status & sanctions) in Settings
- Collection **favorites**, clear-match-cache reset, and many fixes

---

## Screenshots

### Daily Store
![Store](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/store.png)

### Collection Manager
![Collection](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/collection.png)

### Match History & Career Stats
![Profile](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/profile.png)

### Contracts & XP
![Contracts](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/contrat.png)

### Loadout Presets by Map
![Loadout Presets](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/presets.png)

### Premier
![Premier](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/premier.png)

### Crosshair Generator
![Crosshair Generator](https://raw.githubusercontent.com/Main-Zenato/VALAPP-desktop/main/.github/assets/crosshair.png)

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
- **Premade detection** — see which players queued together as a group, on both your team and the enemy's
- Enemy agent selection as the game reveals them
- Live Attack / Defense sides (updates at halftime)
- Map name and splash art
- Score updates

### Collection Manager — Browse Everything
**Organize and equip your entire inventory from one interface.**

| Category | Features |
|----------|----------|
| **Skins** | Group by weapon, preview all levels & chromas, watch demo videos, equip any variant |
| **Favorites** | Star your go-to skins into a pinned Favorites strip for one-click access |
| **Buddies** | Equip per weapon, integrated in skin detail panel |
| **Sprays** | Full 6-slot spray wheel with animation previews |
| **Player Cards** | Wide and standard art formats, equip globally |
| **Titles** | Set active title with one click |
| **Equipped Status** | Green checkmark on all currently active items |

### Loadout Presets — Per-Map Configs
**Save full loadouts and apply them in one click.**

- Build a preset from your **weapons** (skin + chroma), **sprays**, **player card**, and **title**
- Include only the categories you want — **ignored categories are left untouched** in-game
- Assign each preset to **one or more maps**
- In **Agent Select**, VALAPP suggests the matching preset — apply it instantly (pick from a list when several match)
- Everything runs through the standard loadout flow — one clean write, no game files touched

### Daily Store & Bundles
**Track your shop without launching the official client.**

- Daily weapon store with VP prices
- Featured bundles with remaining time (`2d 8h`, `1h 30m`)
- Full skin preview: levels, chromas, videos
- Accessory store (sprays, buddies, cards, titles with KC prices)
- Live wallet: VP, RP, Kernel Credits
- **Share** your Store, Night Market, or Accessories as a branded image, copied to your clipboard — ready to paste in Discord

### Match History & Career Stats
**Detailed breakdown of every competitive match.**

- Full game stats: K/D/A, ACS, HS%, W/L, RR delta
- Click any match for a detailed scoreboard with **advanced stats** — ADR, first kills / deaths, plants / defuses, and **multikill badges** (2K / 3K / 4K / Ace)
- **Platform tags** per player (PC / PS5 / Xbox) so console ranks are never mistaken for PC ranks
- Both teams ranked by performance, with agent icons, map info, and player ranks
- Recent stats summary: win rate, K/D ratio, headshot %
- **World Leaderboard** — regional competitive ranking, with your own position highlighted

### Multi-Account Manager
**Switch between Riot accounts instantly.**

- All accounts stored locally with encrypted sessions (Windows DPAPI)
- One-click account switching in the sidebar
- **Default account** (star) loaded first at startup — falls back gracefully if its session has expired
- Silent refresh on startup — no login screen for valid sessions
- Add, remove, or switch without relaunching
- Each account keeps its own stats and collections
- **Name history** — your own past Riot IDs are recorded over time and shown on your profile

### Friends & Party Network
**Real-time presence and chat powered by Riot XMPP protocol.**

- Online / In Game / Away / Offline status
- Queue type and current map for friends in-game
- Rank icons and current RR
- **In-app chat** — send and receive messages in real time, with persistent history and unread badges
- **Roster management** — add or remove friends, and accept or decline incoming/outgoing friend requests
- Click any friend to inspect stats
- Send party invitations directly through XMPP

### Player Inspector — Lobby Scout
**Instantly check any player's recent form — from party, live match, friends, or match history.**

- Current rank and RR, peak rank this season, account level
- **Recent ranked form**: rank trajectory (where they started → where they are now) with the RR gained or lost on each of their recent games — including a clear marker for two-tier jumps
- **Platform-aware** — a player's ranks are labeled by platform (PC / console), never mixed
- **Previous-act notice** when a player is unranked this act — so old stats are never mistaken for their current standing
- Loads one player at a time, on click — lightweight and rate-limit friendly

### Contracts & XP
**Never miss a mission or season reward — and see exactly what each match earns you.**

- Daily and weekly mission progress with countdowns
- Future missions grouped by week (never miss an activation)
- Battle Pass tier progression and next-reward preview
- Browse **previous battle passes**
- **Account XP & level** card with progression, plus **daily XP checkpoints**
- **Per-match breakdown** — XP and Kingdom Credits earned, including the first-win-of-the-day bonus

### Purchase History
**Every payment and in-game transaction, in one place.**

- Real payment history (your actual purchases)
- VP / RP / Kingdom Credits transactions
- Clear timeline of what you spent and when

### Season Goal
**Set a target rank and watch yourself climb toward it.**

- Pick a target rank for the act
- RR progression chart over time
- Ranked stats and a simple estimate of what's left
- Tracking starts the moment you set a goal — no noise before that

### Premier
**Follow your Premier team, its ranking, and the season schedule.**

- Your team: name, tag, **full roster composition**, and conference
- **Team ranking** and **match history**
- Eligibility status
- Season schedule by conference — upcoming match nights and tournaments, with local times and countdowns

### Game Info
**Agents, Maps, and Weapons — right inside the app.**

- **Agents** — role, abilities, and descriptions
- **Maps** — annotatable 2D layouts (draw callouts and setups)
- **Weapons** — stats and damage breakdown

### Lineups & Tips
**Community clips for the map you're about to play.**

- Curated lineup and tip clips surfaced in-app
- Watch without leaving VALAPP

### Crosshair Generator
**Design a crosshair and export it in one click.**

- Live preview that updates as you tweak color, outlines, center dot, inner & outer lines
- Primary, ADS, and Sniper profiles
- Ready-made models to start from
- Import any VALORANT crosshair code, or copy yours to share

### Game Settings Snapshots
**Save your in-game settings and re-apply them anytime — even on another account.**

- Capture your VALORANT settings: crosshair, sensitivity, keybinds, audio, minimap, HUD…
- Save multiple named snapshots
- Re-apply a snapshot to the active account in one click — settings are copied faithfully across accounts
- Recapture before applying = a built-in backup
- Works with the game closed (video/graphics options are stored locally on the PC and aren't affected)

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

### Account Health
**Know your account's standing at a glance.**

- Status and sanctions card in Settings
- Surfaces restrictions or penalties tied to the account

### Customization
- **10+ accent themes**: Valorant, Blue, Green, Purple, Jett, Omen, Phoenix, Sage, Jinx, Vi
- **UI language**: English or French
- **Resource language**: 11 regions (en-US, fr-FR, de-DE, es-ES, es-MX, pt-BR, ru-RU, tr-TR, ja-JP, ko-KR, zh-CN)
- **Streamer Mode**: hides account names and tags from the UI for privacy on stream
- **Danger zone**: Clear all accounts, or clear the collection / match cache for a clean reset

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

I got tired of launching the Riot client just to check my shop, swap a skin, or look up a player's rank in the lobby — so I built the app I wanted to use. VALAPP is an independent project, made by a player, and I keep improving it around my own needs and community feedback. No ads, no tracking, no data resale.

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

© 2025–2026 Zenato — All rights reserved.

VALAPP Desktop is proprietary freeware. The source code is not public.
Redistribution of any binaries without explicit written permission is prohibited.

VALAPP Desktop is an independent third-party tool, not affiliated with or endorsed by Riot Games.
VALORANT and all related marks are trademarks of Riot Games, Inc.
