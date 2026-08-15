const TRANSLATIONS = {
  fr: {
    // Navbar
    'nav.features':  'Fonctionnalités',
    'nav.preview':   'Aperçu',
    'nav.faq':       'FAQ',
    'nav.download':  'Télécharger',

    // Hero
    'hero.badge': 'Windows 10 / 11',
    'hero.h1':    'Le compagnon <span class="accent">Valorant</span> que je voulais.<span class="hero-sub">Alors je l\'ai codé.</span>',
    'hero.desc':  'Boutique, collection, presets de loadout, lobby en direct — au même endroit, hors du jeu. Gratuit, et vos données restent <strong>uniquement sur votre PC</strong>.',
    'hero.cta1':  'Télécharger gratuitement',
    'hero.cta2':  'Voir les fonctionnalités',
    'hero.meta.free':  'Gratuit',
    'hero.meta.local': 'Données 100% locales',

    // Features
    'features.title':    'Ce que fait VALAPP',
    'features.subtitle': 'Toutes les infos importantes de Valorant, accessibles sans lancer le jeu.',

    // Why / Story
    'why.badge': 'Le projet',
    'why.title': 'Pourquoi ce projet ?',
    'why.p1':    'J\'en avais marre de lancer le client Riot juste pour voir ma boutique, changer un skin ou checker le rang d\'un joueur en lobby. Alors j\'ai construit l\'app que je voulais utiliser.',
    'why.p2':    'VALAPP est un projet indépendant, développé par un joueur — pas une entreprise. Pas de pub, pas de tracking, pas de revente de données. Juste un outil rapide qui fait bien son travail, et que j\'améliore au fil de mes propres besoins et de vos retours.',

    'feat1.title': 'Boutique quotidienne',
    'feat1.desc':  'Vos 4 skins du jour, les bundles en vedette et les accessoires disponibles avec leurs prix VP/KC — sans avoir à lancer Valorant.',
    'feat2.title': 'Profil & Statistiques',
    'feat2.desc':  'Rang actuel, peak, Win Rate, K/D, HS% et stats avancées (ADR, premiers kills, poses, multikills) — historique détaillé, tags plateforme PC/console par joueur, et classement mondial.',
    'feat3.title': 'Party & Live Match',
    'feat3.desc':  'Gérez votre salon, changez de mode de jeu, inspectez les rangs de chaque joueur en pregame/coregame, et repérez les groupes de joueurs (qui jouent ensemble) dans les deux équipes.',
    'feat4.title': 'Collection de skins',
    'feat4.desc':  'Parcourez tous vos skins par arme, visualisez les niveaux et variantes, épinglez vos favoris. Équipez directement depuis l\'app, avant de lancer une partie.',
    'feat5.title': 'Contrats & XP',
    'feat5.desc':  'Missions daily/weekly groupées par semaine, progression du battlepass et passes précédents, plus XP & niveau de compte, checkpoints journaliers, et gains XP/Kingdom Credits par match.',
    'feat6.title': 'Liste d\'amis',
    'feat6.desc':  'Présence Riot temps réel via XMPP, plus chat intégré (envoi/réception, historique, non-lus) et gestion du roster (ajout/retrait, demandes). Inspectez un ami en un clic.',
    'feat7.title': 'Multi-comptes sécurisé',
    'feat7.desc':  'Gérez plusieurs comptes Riot simultanément. Sessions chiffrées par DPAPI Windows, aucune donnée envoyée à des serveurs tiers.',
    'feat8.title': 'Léger & rapide',
    'feat8.desc':  'Construit avec Rust + Tauri. Binaire natif Windows, démarrage quasi instantané, empreinte mémoire minimale.',
    'feat9.title':  'Presets de loadout par map',
    'feat9.desc':   'Enregistrez des configs complètes (armes, sprays, carte, titre), assignez-les à des maps, et appliquez-les en un clic — proposé directement en agent select.',
    'feat10.title': 'Scout de lobby',
    'feat10.desc':  'Cliquez un joueur en party ou en match pour voir sa forme classée récente — trajectoire de rang et RR gagné/perdu, avec rangs étiquetés par plateforme (PC/console).',
    'feat11.title': 'Générateur de viseur',
    'feat11.desc':  'Créez un viseur avec aperçu en direct, profils Primaire / ADS / Sniper, modèles prêts à l\'emploi, et import/export du code VALORANT.',
    'feat12.title': 'Premier',
    'feat12.desc':  'Suivez votre équipe Premier et le calendrier de la saison — soirées de match et tournois à venir, avec heures locales et éligibilité.',
    'feat13.title': 'Partage Discord',
    'feat13.desc':  'Partagez votre boutique, night market ou accessoires en image aux couleurs de votre thème — copiée dans le presse-papier, prête à coller.',
    'feat14.title': 'Statut des serveurs',
    'feat14.desc':  'Santé des services Riot en temps réel, incidents et maintenances en cours détaillés (dans votre langue), et disponibilité par région.',
    'feat15.title': 'Thèmes & personnalisation',
    'feat15.desc':  '10+ thèmes d\'accent, interface FR/EN, langue des ressources sur 11 régions, mode streamer, et mises à jour automatiques signées.',
    'feat16.title': 'Historique des achats',
    'feat16.desc':  'Votre historique de paiements réel et chaque transaction VP / RP / Kingdom Credits, réunis dans un onglet clair.',
    'feat17.title': 'Objectif de saison',
    'feat17.desc':  'Fixez un rang cible et suivez votre progression RR dans le temps — graphe, stats classées et estimation de ce qu\'il reste.',
    'feat18.title': 'Infos jeu',
    'feat18.desc':  'Agents (pouvoirs), Cartes (plans 2D annotables) et Armes (stats & dégâts) — directement dans l\'app.',
    'feat19.title': 'Lineups & Tips',
    'feat19.desc':  'Des clips communautaires de lineups et d\'astuces pour la carte que vous allez jouer, sans quitter VALAPP.',
    'feat20.title': 'Santé du compte',
    'feat20.desc':  'Une carte statut & sanctions dans les Paramètres : connaissez l\'état de votre compte d\'un coup d\'œil.',

    // Screenshots
    'screenshots.title':    'Aperçu de l\'application',
    'screenshots.subtitle': 'Interface sombre, 10+ thèmes d\'accent au choix. Entièrement en français et en anglais.',
    'ss1.label': 'Store — Offres du jour & bundle',
    'ss2.label': 'Profil & Statistiques',
    'ss3.label': 'Collection — Niveaux & variantes',
    'ss4.label': 'Party — Salon & match en cours',
    'ss5.label': 'Contrats & Battlepass',
    'ss6.label': 'Presets de loadout par map',
    'ss7.label': 'Premier — Équipe & calendrier',
    'ss8.label': 'Générateur de viseur',
    'ss1.ph': 'Boutique quotidienne',
    'ss2.ph': 'Profil joueur',
    'ss3.ph': 'Collection de skins',
    'ss4.ph': 'Party & Live Match',

    // Safe
    'safe.title': 'Respect du fair-play',
    'safe.desc':  'VALAPP Desktop fonctionne via votre session Riot authentifiée (OAuth) — aucune lecture de mémoire, aucune interaction avec Vanguard, aucune modification des fichiers du jeu. Application non affiliée à Riot Games.',
    'safe.badge': 'Anti-cheat safe',

    // FAQ
    'faq.title': 'Questions fréquentes',
    'faq1.q': 'VALAPP Desktop est-il sûr à utiliser ?',
    'faq1.a': 'VALAPP Desktop effectue des requêtes HTTP via votre session Riot authentifiée par OAuth — de la même façon qu\'un navigateur web accède à votre profil. L\'application ne lit jamais la mémoire du jeu, n\'accède pas au lockfile local et n\'interagit en aucune façon avec Vanguard ou les processus Riot.',
    'faq2.q': 'Y a-t-il un risque de ban de compte ?',
    'faq2.a': 'VALAPP Desktop n\'injecte rien, ne lit pas la mémoire et n\'interagit pas avec Vanguard. Toutes les interactions passent par des requêtes HTTP authentifiées vers les serveurs Riot, sans toucher aux processus du jeu. L\'application n\'est pas affiliée à Riot Games et vous l\'utilisez à votre propre discrétion.',
    'faq3.q': 'VALAPP Desktop est-il gratuit ?',
    'faq3.a': 'Oui, complètement gratuit. Aucun abonnement, aucun achat intégré, aucune publicité. Le setup est disponible sur GitHub.',
    'faq4.q': 'Où sont stockées mes données de connexion ?',
    'faq4.a': 'Tout reste sur votre PC. Aucune donnée n\'est envoyée à des serveurs tiers. Vos sessions Riot sont chiffrées avec DPAPI Windows — le même mécanisme de chiffrement utilisé par Chrome et Edge pour vos mots de passe.',
    'faq5.q': 'Quels systèmes d\'exploitation sont supportés ?',
    'faq5.a': 'Windows 10 et Windows 11 (64-bit) uniquement. macOS et Linux ne sont pas supportés pour le moment.',
    'faq6.q': 'Comment mettre à jour VALAPP Desktop ?',
    'faq6.a': 'Automatiquement. L\'application vérifie les nouvelles versions au démarrage et propose de les installer en un clic. Vous pouvez aussi vérifier manuellement depuis la page Paramètres.',
    'faq7.q': 'Puis-je gérer plusieurs comptes Riot ?',
    'faq7.a': 'Oui. Vous pouvez connecter autant de comptes Riot que vous le souhaitez et basculer entre eux en un clic depuis la sidebar. Chaque session est stockée et chiffrée séparément.',
    'faq8.q': 'VALAPP Desktop est-il affilié à Riot Games ?',
    'faq8.a': 'Non. VALAPP Desktop est un projet indépendant, non affilié, non approuvé et non sponsorisé par Riot Games. VALORANT™ est une marque déposée de Riot Games, Inc.',
    'faq9.q': 'J\'ai un problème, comment obtenir de l\'aide ?',
    'faq9.a': 'Ouvrez une issue sur le dépôt GitHub en décrivant votre problème, votre version de Windows et la version de VALAPP Desktop. Les logs d\'application (accessibles depuis les Paramètres) peuvent aussi aider au diagnostic.',

    // CTA
    'cta.title':    'Prêt à commencer ?',
    'cta.subtitle': 'Gratuit. Sans inscription. Sans collecte de données.',
    'cta.btn':      'Télécharger VALAPP Desktop',
    'cta.meta':     'Windows 10 / 11 · 64-bit · Gratuit',

    // Footer
    'footer.brand':      'VALAPP Desktop — application pour VALORANT.<br>Projet indépendant, non affilié à Riot Games.',
    'footer.col1.title': 'Application',
    'footer.col2.title': 'Support',
    'footer.features':   'Fonctionnalités',
    'footer.preview':    'Aperçu',
    'footer.download':   'Télécharger',
    'footer.faq':        'FAQ',
    'footer.bugreport':  'Signaler un bug',
    'footer.disclaimer': 'VALAPP Desktop n\'est pas associé, affilié, approuvé ou sponsorisé par Riot Games.',

    // Download page
    'dl.title':          'Télécharger <span class="accent">VALAPP Desktop</span>',
    'dl.subtitle':       'L\'application gratuite pour VALORANT.<br>Boutique, profil, collection, party — en dehors du jeu.',
    'dl.os':             'Windows',
    'dl.req.platform':   'Windows 10 / 11 · 64-bit',
    'dl.ver.label':      'Version',
    'dl.ver.value':      'Dernière version',
    'dl.lic.label':      'Licence',
    'dl.lic.value':      'Gratuit',
    'dl.type.label':     'Type',
    'dl.type.value':     'Installateur (.exe)',
    'dl.btn':            'Télécharger VALAPP Desktop',
    'dl.note':           'Si Windows affiche un avertissement "SmartScreen", cliquez <strong>Informations complémentaires → Exécuter quand même</strong>. Ce message apparaît pour tout nouveau logiciel non certifié.',
    'dl.steps.title':    'Installation en 3 étapes',
    'dl.step1.title':    'Télécharger',
    'dl.step1.desc':     'Cliquez sur le bouton ci-dessus pour télécharger l\'installateur depuis GitHub Releases.',
    'dl.step2.title':    'Installer',
    'dl.step2.desc':     'Lancez le fichier <code>.exe</code>, acceptez l\'avertissement SmartScreen si nécessaire, et laissez l\'installation se terminer.',
    'dl.step3.title':    'Connecter',
    'dl.step3.desc':     'Ouvrez VALAPP Desktop, connectez votre compte Riot via la fenêtre de login — et c\'est tout.',
    'dl.sysreq.title':   'Configuration requise',
    'dl.sysreq1.l':      'Système',       'dl.sysreq1.v': 'Windows 10 / 11 (64-bit)',
    'dl.sysreq2.l':      'RAM',           'dl.sysreq2.v': '~50 Mo',
    'dl.sysreq3.l':      'Stockage',      'dl.sysreq3.v': '~10 Mo',
    'dl.sysreq4.l':      'Réseau',        'dl.sysreq4.v': 'Connexion internet requise',
    'dl.sysreq5.l':      'Compte',        'dl.sysreq5.v': 'Compte Riot Games actif',
    'dl.sysreq6.l':      'Mises à jour',  'dl.sysreq6.v': 'Automatiques',
    'dl.back':           '← Retour à l\'accueil',
    'dl.github':         'Voir sur GitHub',
  },

  en: {
    // Navbar
    'nav.features':  'Features',
    'nav.preview':   'Preview',
    'nav.faq':       'FAQ',
    'nav.download':  'Download',

    // Hero
    'hero.badge': 'Windows 10 / 11',
    'hero.h1':    'The <span class="accent">Valorant</span> companion I wanted.<span class="hero-sub">So I built it.</span>',
    'hero.desc':  'Shop, collection, loadout presets, live lobby — in one place, outside the game. Free, and your data stays <strong>entirely on your PC</strong>.',
    'hero.cta1':  'Download for free',
    'hero.cta2':  'See features',
    'hero.meta.free':  'Free',
    'hero.meta.local': '100% local data',

    // Features
    'features.title':    'What VALAPP does',
    'features.subtitle': 'All the important Valorant info, accessible without launching the game.',

    // Why / Story
    'why.badge': 'The project',
    'why.title': 'Why I built this',
    'why.p1':    'I was tired of launching the Riot client just to check my shop, swap a skin, or look up a player\'s rank in the lobby. So I built the app I wanted to use.',
    'why.p2':    'VALAPP is an independent project, made by a player — not a company. No ads, no tracking, no data resale. Just a fast tool that does its job well, which I keep improving around my own needs and your feedback.',

    'feat1.title': 'Daily Shop',
    'feat1.desc':  'Your 4 daily skins, featured bundles and accessories with their VP/KC prices — without launching Valorant.',
    'feat2.title': 'Profile & Stats',
    'feat2.desc':  'Current rank, peak, Win Rate, K/D, HS% plus advanced stats (ADR, first kills, plants, multikills) — detailed history, per-player PC/console platform tags, and a world leaderboard.',
    'feat3.title': 'Party & Live Match',
    'feat3.desc':  'Manage your lobby, change game mode, inspect every player\'s rank in pregame/coregame, and spot premade groups on both teams.',
    'feat4.title': 'Skin Collection',
    'feat4.desc':  'Browse all your skins by weapon, view levels and variants, pin your favorites. Equip directly from the app before starting a match.',
    'feat5.title': 'Contracts & XP',
    'feat5.desc':  'Daily/weekly missions grouped by week, battlepass progress and previous passes, plus account XP & level, daily checkpoints, and XP/Kingdom Credits earned per match.',
    'feat6.title': 'Friends List',
    'feat6.desc':  'Real-time Riot presence via XMPP, plus in-app chat (send/receive, history, unread badges) and roster management (add/remove, requests). Inspect a friend in one click.',
    'feat7.title': 'Secure Multi-account',
    'feat7.desc':  'Manage multiple Riot accounts simultaneously. Sessions encrypted with Windows DPAPI, no data sent to third-party servers.',
    'feat8.title': 'Lightweight & Fast',
    'feat8.desc':  'Built with Rust + Tauri. Native Windows binary, near-instant startup, minimal memory footprint.',
    'feat9.title':  'Loadout presets by map',
    'feat9.desc':   'Save full configs (weapons, sprays, card, title), assign them to maps, and apply in one click — suggested right in agent select.',
    'feat10.title': 'Lobby scout',
    'feat10.desc':  'Click a player in your party or live match to see their recent ranked form — rank trajectory and RR gained/lost, with ranks labeled by platform (PC/console).',
    'feat11.title': 'Crosshair generator',
    'feat11.desc':  'Design a crosshair with a live preview, Primary / ADS / Sniper profiles, ready-made models, and VALORANT code import/export.',
    'feat12.title': 'Premier',
    'feat12.desc':  'Follow your Premier team and the season schedule — upcoming match nights and tournaments, with local times and eligibility.',
    'feat13.title': 'Discord share',
    'feat13.desc':  'Share your store, night market or accessories as a themed image — copied to your clipboard, ready to paste in Discord.',
    'feat14.title': 'Server status',
    'feat14.desc':  'Real-time Riot service health, active incidents and maintenance with details (in your language), and per-region availability.',
    'feat15.title': 'Themes & customization',
    'feat15.desc':  '10+ accent themes, EN/FR interface, resource language across 11 regions, streamer mode, and signed automatic updates.',
    'feat16.title': 'Purchase history',
    'feat16.desc':  'Your real payment history and every VP / RP / Kingdom Credits transaction, together in one clean tab.',
    'feat17.title': 'Season goal',
    'feat17.desc':  'Set a target rank and track your RR progression over time — chart, ranked stats, and an estimate of what\'s left.',
    'feat18.title': 'Game info',
    'feat18.desc':  'Agents (abilities), Maps (annotatable 2D layouts) and Weapons (stats & damage) — right inside the app.',
    'feat19.title': 'Lineups & Tips',
    'feat19.desc':  'Community lineup and tip clips for the map you\'re about to play, without leaving VALAPP.',
    'feat20.title': 'Account health',
    'feat20.desc':  'A status & sanctions card in Settings: know your account\'s standing at a glance.',

    // Screenshots
    'screenshots.title':    'App Preview',
    'screenshots.subtitle': 'Dark interface, 10+ accent themes to choose from. Fully available in English and French.',
    'ss1.label': 'Store — Daily offers & bundle',
    'ss2.label': 'Profile & Statistics',
    'ss3.label': 'Collection — Levels & variants',
    'ss4.label': 'Party — Lobby & live match',
    'ss5.label': 'Contracts & Battlepass',
    'ss6.label': 'Loadout presets by map',
    'ss7.label': 'Premier — Team & schedule',
    'ss8.label': 'Crosshair generator',
    'ss1.ph': 'Daily shop',
    'ss2.ph': 'Player profile',
    'ss3.ph': 'Skin collection',
    'ss4.ph': 'Party & Live Match',

    // Safe
    'safe.title': 'Fair-play compliant',
    'safe.desc':  'VALAPP Desktop operates through your Riot session authenticated via OAuth — no memory reading, no interaction with Vanguard, no modification of game files. Not affiliated with Riot Games.',
    'safe.badge': 'Anti-cheat safe',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq1.q': 'Is VALAPP Desktop safe to use?',
    'faq1.a': 'VALAPP Desktop makes HTTP requests through your Riot session authenticated via OAuth — the same way a browser accesses your profile. The app never reads game memory, doesn\'t access the local lockfile, and doesn\'t interact with Vanguard or any Riot process.',
    'faq2.q': 'Is there a risk of account ban?',
    'faq2.a': 'VALAPP Desktop doesn\'t inject anything, doesn\'t read memory, and doesn\'t interact with Vanguard. All interactions go through authenticated HTTP requests to Riot\'s servers without touching game processes. That said, the app is not affiliated with Riot Games and you use it at your own discretion.',
    'faq3.q': 'Is VALAPP Desktop free?',
    'faq3.a': 'Yes, completely free. No subscription, no in-app purchases, no ads. The installer is available on GitHub.',
    'faq4.q': 'Where is my login data stored?',
    'faq4.a': 'Everything stays on your PC. No data is sent to third-party servers. Your Riot sessions are encrypted with Windows DPAPI — the same encryption used by Chrome and Edge for your passwords.',
    'faq5.q': 'Which operating systems are supported?',
    'faq5.a': 'Windows 10 and Windows 11 (64-bit) only. macOS and Linux are not supported at this time.',
    'faq6.q': 'How do I update VALAPP Desktop?',
    'faq6.a': 'Automatically. The app checks for new versions on startup and offers to install them in one click. You can also check manually from the Settings page.',
    'faq7.q': 'Can I manage multiple Riot accounts?',
    'faq7.a': 'Yes. You can connect as many Riot accounts as you want and switch between them with one click from the sidebar. Each session is stored and encrypted separately.',
    'faq8.q': 'Is VALAPP Desktop affiliated with Riot Games?',
    'faq8.a': 'No. VALAPP Desktop is an independent project, not affiliated with, endorsed by, or sponsored by Riot Games. VALORANT™ is a registered trademark of Riot Games, Inc.',
    'faq9.q': 'I have a problem, how do I get help?',
    'faq9.a': 'Open an issue on the GitHub repository describing your problem, your Windows version, and the VALAPP Desktop version. App logs (accessible from Settings) can also help with diagnosis.',

    // CTA
    'cta.title':    'Ready to get started?',
    'cta.subtitle': 'Free. No sign-up. No data collection.',
    'cta.btn':      'Download VALAPP Desktop',
    'cta.meta':     'Windows 10 / 11 · 64-bit · Free',

    // Footer
    'footer.brand':      'VALAPP Desktop — app for VALORANT.<br>Independent project, not affiliated with Riot Games.',
    'footer.col1.title': 'App',
    'footer.col2.title': 'Support',
    'footer.features':   'Features',
    'footer.preview':    'Preview',
    'footer.download':   'Download',
    'footer.faq':        'FAQ',
    'footer.bugreport':  'Report a bug',
    'footer.disclaimer': 'VALAPP Desktop is not associated with, affiliated with, endorsed by, or sponsored by Riot Games.',

    // Download page
    'dl.title':          'Download <span class="accent">VALAPP Desktop</span>',
    'dl.subtitle':       'The free application for VALORANT.<br>Shop, profile, collection, party — outside the game.',
    'dl.os':             'Windows',
    'dl.req.platform':   'Windows 10 / 11 · 64-bit',
    'dl.ver.label':      'Version',
    'dl.ver.value':      'Latest release',
    'dl.lic.label':      'License',
    'dl.lic.value':      'Free',
    'dl.type.label':     'Type',
    'dl.type.value':     'Installer (.exe)',
    'dl.btn':            'Download VALAPP Desktop',
    'dl.note':           'If Windows shows a "SmartScreen" warning, click <strong>More info → Run anyway</strong>. This message appears for all new unsigned software.',
    'dl.steps.title':    'Install in 3 steps',
    'dl.step1.title':    'Download',
    'dl.step1.desc':     'Click the button above to download the installer from GitHub Releases.',
    'dl.step2.title':    'Install',
    'dl.step2.desc':     'Run the <code>.exe</code> file, accept the SmartScreen warning if prompted, and let the installation complete.',
    'dl.step3.title':    'Connect',
    'dl.step3.desc':     'Open VALAPP Desktop, sign in with your Riot account through the login window — that\'s it.',
    'dl.sysreq.title':   'System requirements',
    'dl.sysreq1.l':      'OS',            'dl.sysreq1.v': 'Windows 10 / 11 (64-bit)',
    'dl.sysreq2.l':      'RAM',           'dl.sysreq2.v': '~50 MB',
    'dl.sysreq3.l':      'Storage',       'dl.sysreq3.v': '~10 MB',
    'dl.sysreq4.l':      'Network',       'dl.sysreq4.v': 'Internet connection required',
    'dl.sysreq5.l':      'Account',       'dl.sysreq5.v': 'Active Riot Games account',
    'dl.sysreq6.l':      'Updates',       'dl.sysreq6.v': 'Automatic',
    'dl.back':           '← Back to home',
    'dl.github':         'View on GitHub',
  }
};

function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    document.documentElement.lang = lang;
    localStorage.setItem('valapp-lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const t = TRANSLATIONS[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = t[el.dataset.i18n];
        if (v !== undefined) el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const v = t[el.dataset.i18nHtml];
        if (v !== undefined) el.innerHTML = v;
    });
}

function initLang() {
    const saved = localStorage.getItem('valapp-lang');
    const browser = navigator.language || navigator.userLanguage || 'fr';
    const lang = saved || (browser.toLowerCase().startsWith('fr') ? 'fr' : 'en');
    applyLanguage(lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
}

document.addEventListener('DOMContentLoaded', initLang);
