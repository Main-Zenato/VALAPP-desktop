const TRANSLATIONS = {
  fr: {
    // Navbar
    'nav.features':  'Fonctionnalités',
    'nav.preview':   'Aperçu',
    'nav.faq':       'FAQ',
    'nav.download':  'Télécharger',

    // Hero
    'hero.badge': 'Windows 10 / 11',
    'hero.h1':    'L\'application<br><span class="accent">Valorant</span><br>qu\'il vous faut',
    'hero.desc':  'Boutique quotidienne, profil & stats, collection de skins, party en live — tout en un, gratuit, rapide, et stocké <strong>uniquement sur votre PC</strong>.',
    'hero.cta1':  'Télécharger gratuitement',
    'hero.cta2':  'Voir les fonctionnalités',
    'hero.meta.free':  'Gratuit',
    'hero.meta.local': 'Données 100% locales',

    // Features
    'features.title':    'Tout ce dont vous avez besoin',
    'features.subtitle': 'Toutes les informations importantes de Valorant, accessibles sans lancer le jeu.',

    'feat1.title': 'Boutique quotidienne',
    'feat1.desc':  'Vos 4 skins du jour, les bundles en vedette et les accessoires disponibles avec leurs prix VP/KC — sans avoir à lancer Valorant.',
    'feat2.title': 'Profil & Statistiques',
    'feat2.desc':  'Rang actuel, peak, Win Rate, K/D, HS% — calculés sur tous vos matchs avec historique détaillé et inspection de chaque partie.',
    'feat3.title': 'Party & Live Match',
    'feat3.desc':  'Gérez votre salon, changez de mode de jeu, inspectez les rangs de chaque joueur pendant le pregame et le coregame.',
    'feat4.title': 'Collection de skins',
    'feat4.desc':  'Parcourez tous vos skins par arme, visualisez les niveaux et variantes. Équipez directement depuis l\'app, avant de lancer une partie.',
    'feat5.title': 'Contrats & Battlepass',
    'feat5.desc':  'Suivez vos missions daily et weekly groupées par semaine, la progression du battlepass et les récompenses à venir.',
    'feat6.title': 'Liste d\'amis',
    'feat6.desc':  'Présence Riot en temps réel via XMPP — statut, jeu en cours, rang, file d\'attente. Inspectez le profil d\'un ami en un clic.',
    'feat7.title': 'Multi-comptes sécurisé',
    'feat7.desc':  'Gérez plusieurs comptes Riot simultanément. Sessions chiffrées par DPAPI Windows, aucune donnée envoyée à des serveurs tiers.',
    'feat8.title': 'Léger & rapide',
    'feat8.desc':  'Construit avec Rust + Tauri. Binaire natif Windows, démarrage quasi instantané, empreinte mémoire minimale.',

    // Screenshots
    'screenshots.title':    'Aperçu de l\'application',
    'screenshots.subtitle': 'Interface sombre, 4 thèmes d\'accent au choix. Entièrement en français et en anglais.',
    'ss1.label': 'Store — Offres du jour & bundle',
    'ss2.label': 'Profil & Statistiques',
    'ss3.label': 'Collection — Niveaux & variantes',
    'ss4.label': 'Party — Salon & match en cours',
    'ss5.label': 'Contrats & Battlepass',
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
    'hero.h1':    'The <span class="accent">Valorant</span><br>app you need',
    'hero.desc':  'Daily shop, profile & stats, skin collection, live party — all in one, free, fast, and stored <strong>entirely on your PC</strong>.',
    'hero.cta1':  'Download for free',
    'hero.cta2':  'See features',
    'hero.meta.free':  'Free',
    'hero.meta.local': '100% local data',

    // Features
    'features.title':    'Everything you need',
    'features.subtitle': 'All the important Valorant information, accessible without launching the game.',

    'feat1.title': 'Daily Shop',
    'feat1.desc':  'Your 4 daily skins, featured bundles and accessories with their VP/KC prices — without launching Valorant.',
    'feat2.title': 'Profile & Stats',
    'feat2.desc':  'Current rank, peak, Win Rate, K/D, HS% — calculated across all your matches with detailed history and per-game inspection.',
    'feat3.title': 'Party & Live Match',
    'feat3.desc':  'Manage your lobby, change game mode, inspect every player\'s rank during pregame and coregame.',
    'feat4.title': 'Skin Collection',
    'feat4.desc':  'Browse all your skins by weapon, view levels and variants. Equip directly from the app before starting a match.',
    'feat5.title': 'Contracts & Battlepass',
    'feat5.desc':  'Track your daily and weekly missions grouped by week, battlepass progress and upcoming rewards.',
    'feat6.title': 'Friends List',
    'feat6.desc':  'Real-time Riot presence via XMPP — status, current game, rank, queue. Inspect a friend\'s profile in one click.',
    'feat7.title': 'Secure Multi-account',
    'feat7.desc':  'Manage multiple Riot accounts simultaneously. Sessions encrypted with Windows DPAPI, no data sent to third-party servers.',
    'feat8.title': 'Lightweight & Fast',
    'feat8.desc':  'Built with Rust + Tauri. Native Windows binary, near-instant startup, minimal memory footprint.',

    // Screenshots
    'screenshots.title':    'App Preview',
    'screenshots.subtitle': 'Dark interface, 4 accent themes to choose from. Fully available in English and French.',
    'ss1.label': 'Store — Daily offers & bundle',
    'ss2.label': 'Profile & Statistics',
    'ss3.label': 'Collection — Levels & variants',
    'ss4.label': 'Party — Lobby & live match',
    'ss5.label': 'Contracts & Battlepass',
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
