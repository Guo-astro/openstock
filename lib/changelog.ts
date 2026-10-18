// OpenStock's changelog, newest first. The banner and its modal show RELEASES[0]; /changelog shows the whole timeline.
// Write "#123" in an item to link that pull request.
export type Release = {
    id: string;
    date: string;
    title: string;
    summary: string;
    highlights?: string[]; // the short list in the banner's modal (latest release only)
    sections: { title: string; items: string[] }[];
};

export const RELEASES: Release[] = [
    {
        id: '2026-10-18',
        date: '18 Oct 2026',
        title: 'October update',
        summary: 'Draw on charts, keep your indicators, and safer sign-in',
        highlights: [
            'Draw trend lines, Fibonacci and text on any stock chart.',
            'The indicators you pick stay on every chart.',
            'Tickers like M&M, Bajaj-Auto and Ericsson B now chart correctly.',
            'Sign-in and password reset are rate-limited, and a reset signs out your other devices.',
            'A prebuilt Docker image for self-hosting.',
        ],
        sections: [
            {
                title: 'Charts',
                items: [
                    'Draw on the stock chart: trend lines, horizontal lines, Fibonacci, shapes and text. #118',
                    'The indicators you pick (SMA, EMA, Bollinger Bands, VWAP, RSI, MACD, Stochastic, ATR) stay on every chart, after a reload and in fullscreen. #119',
                    'Tickers with a - or & now chart correctly: M&M and Bajaj-Auto in India, Ericsson B in Stockholm, Novo Nordisk B in Copenhagen. #117',
                ],
            },
            {
                title: 'Watchlist',
                items: [
                    'Watchlists hold up to 50 stocks, and you’re told when yours is full. #127',
                    'The Watching list in the sidebar scrolls on its own instead of pushing the page. #110',
                ],
            },
            {
                title: 'Security',
                items: [
                    'Sign-in, sign-up and password reset are rate-limited, so nobody can guess passwords or flood inboxes. #126',
                    'Resetting your password signs you out on every other device. #125',
                    'Welcome emails can no longer carry links or markup injected at sign-up. #122',
                    'A background job no longer risks emailing the whole newsletter list, and subscriber addresses stay out of the logs. #120',
                    'Next.js security update covering about 30 advisories. #121',
                ],
            },
            {
                title: 'Self-hosting',
                items: [
                    'A prebuilt Docker image for amd64 and arm64: ghcr.io/open-dev-society/openstock, on Node 22 LTS. #128',
                    'Docker builds need no database or secrets, and no key is stored in the image. #123',
                    'docker compose no longer publishes MongoDB on your network, and its password comes from .env. #124',
                    'One-click deploys on RepoCloud, ZopDay and Railway. #111 #115 #94',
                ],
            },
            {
                title: 'Community',
                items: [
                    'A Wall of love: our sponsors and supporters, and the posts, videos and articles people have made about OpenStock.',
                    'Orbit and RapidProxy joined as sponsors.',
                ],
            },
        ],
    },
    {
        id: '2026-09-25',
        date: '25 Sep 2026',
        title: 'The redesign',
        summary: 'A new look, a public landing page, more markets and a lot of fixes',
        sections: [
            {
                title: 'New',
                items: [
                    'A redesigned app: floating shell, browser-style tabs and a warmer palette. #106',
                    'A public landing page with a live NYSE session dial, and a Sponsor page. #106',
                    'More markets on the dashboard: US, India, Germany, Canada, Australia, Crypto and Forex. #106',
                    'A profile page to edit your details, see connected sign-ins and change your password, and sign-in with Google or GitHub. #106',
                ],
            },
            {
                title: 'Changed',
                items: [
                    'Quotes refresh hourly for everyone on the free site. #106',
                    'Price alerts are now part of OpenStock Cloud and self-hosting.',
                    'Server functions run in Mumbai, next to the database, so pages respond faster.',
                ],
            },
            {
                title: 'Fixed',
                items: [
                    'Watchlist and alert changes are tied to the signed-in user; before, one user could change another’s. #106',
                    'Welcome emails, price alerts and the weekly digest run again, and password reset completes. #106',
                    'Pages no longer hang when market data is slow, and email addresses with + are accepted. #106',
                    'Charts no longer get stuck on exchanges TradingView blocks, or on Hong Kong stocks.',
                    'A clearer environment check for self-hosters. #104',
                ],
            },
        ],
    },
    {
        id: '2026-08',
        date: 'Jun – Aug 2026',
        title: 'Summer fixes',
        summary: 'A market support guide, sturdier emails and a newer AI model',
        sections: [
            {
                title: 'Changes',
                items: [
                    'A Market Support guide explaining which exchanges chart, quote and alert, and why. #84',
                    'Email features are optional: the app runs without mail settings, and warning messages no longer show garbled characters. #85',
                    'Personalised emails use MiniMax’s newer M3 model by default. #87',
                ],
            },
        ],
    },
    {
        id: '2026-05',
        date: 'Apr – May 2026',
        title: 'Password reset',
        summary: 'Reset your password, see the password rules as you type, and better search',
        sections: [
            {
                title: 'Changes',
                items: [
                    'Forgot your password? Reset it by email. #71',
                    'Sign-up shows the password rules and ticks them off as you type. #79',
                    'Charts show the right time zone. #72',
                    'Search shows the correct exchange and company details. #73',
                ],
            },
        ],
    },
    {
        id: '2026-03',
        date: 'Mar 2026',
        title: 'Sentiment and 40+ exchanges',
        summary: 'What the crowd thinks, and many more markets',
        sections: [
            {
                title: 'Changes',
                items: [
                    'Sentiment on every stock page: buzz and bullishness from Reddit, X, news and Polymarket. #64',
                    'Charts for 40+ international exchanges. #65',
                    'MiniMax as an alternative AI provider for personalised emails. #61',
                    'Updated dependencies and background jobs. #63',
                ],
            },
        ],
    },
    {
        id: '2026-02',
        date: 'Feb 2026',
        title: 'China and Hong Kong charts',
        summary: 'Shanghai, Shenzhen and Hong Kong stocks chart correctly',
        sections: [
            {
                title: 'Changes',
                items: ['Shanghai, Shenzhen and Hong Kong tickers are converted to TradingView’s format, so their charts load. #57'],
            },
        ],
    },
    {
        id: '2026-01',
        date: 'Jan 2026',
        title: 'Watchlist, alerts and news',
        summary: 'Save stocks, get alerted, and read the news that matters to you',
        sections: [
            {
                title: 'New',
                items: [
                    'A Watchlist page to save stocks and follow their prices, sortable by symbol. #40 #46',
                    'Price alerts when a stock goes above or below your target. #40',
                    'A news feed for the stocks on your watchlist. #40',
                    'Fullscreen charts. #45',
                    'About, Help and API docs pages, and Siray.ai as a fallback AI provider. #40',
                ],
            },
        ],
    },
    {
        id: '2025-12',
        date: 'Dec 2025',
        title: 'Security and support',
        summary: 'A critical framework fix and a way to support the project',
        sections: [
            {
                title: 'Changes',
                items: [
                    'Fixed a critical React Server Components vulnerability. #30',
                    'Vercel Web Analytics. #31',
                    'A way to donate to the project. #32',
                ],
            },
        ],
    },
    {
        id: '2025-10',
        date: 'Oct 2025',
        title: 'OpenStock launches',
        summary: 'Free, open-source market tracking for everyone',
        sections: [
            {
                title: 'Launch',
                items: [
                    'Started on 28 Sep 2025 and first deployed on 4 Oct 2025: accounts, stock search and a TradingView-powered dashboard. #1 #9',
                    'Docker and Docker Compose support. #17',
                ],
            },
        ],
    },
];

export const LATEST_RELEASE = RELEASES[0];
