// What changed in each release, newest first. The banner announces UPDATES[0] until it's dismissed, and /whats-new
// lists everything. Give each update a new id so a dismissed banner comes back for the next release.
export type Update = {
    id: string;
    date: string;
    title: string;
    headline: string;
    sections: { title: string; items: string[] }[];
};

export const UPDATES: Update[] = [
    {
        id: '2026-10-18',
        date: '18 October 2026',
        title: 'October update',
        headline: 'Draw on charts, keep your indicators, and safer sign-in',
        sections: [
            {
                title: 'Charts',
                items: [
                    'Draw on the stock chart: trend lines, horizontal lines, Fibonacci, shapes and text.',
                    'The indicators you pick (SMA, EMA, Bollinger Bands, VWAP, RSI, MACD, Stochastic, ATR) stay on every chart, after a reload and in fullscreen.',
                    'Tickers with a - or & now chart correctly, such as M&M and Bajaj-Auto in India, Ericsson B in Stockholm and Novo Nordisk B in Copenhagen.',
                ],
            },
            {
                title: 'Watchlist',
                items: [
                    'Watchlists hold up to 50 stocks, and you’re told when yours is full instead of seeing a generic error.',
                ],
            },
            {
                title: 'Community',
                items: [
                    'A new Wall of love: our sponsors and supporters, plus the posts, videos and articles people have made about OpenStock.',
                ],
            },
            {
                title: 'Security',
                items: [
                    'Sign-in, sign-up and password reset are rate-limited, so nobody can guess passwords or flood inboxes.',
                    'Resetting your password signs you out on every other device.',
                    'Welcome emails can no longer carry links or markup injected at sign-up.',
                    'Next.js security update covering about 30 advisories.',
                ],
            },
            {
                title: 'Self-hosting',
                items: [
                    'A prebuilt Docker image for amd64 and arm64: ghcr.io/open-dev-society/openstock.',
                    'Docker builds need no database or secrets, and no key is stored in the image.',
                    'docker compose no longer publishes MongoDB on your network, and its password comes from .env.',
                    'The image runs on Node 22 LTS.',
                ],
            },
        ],
    },
];

export const LATEST_UPDATE = UPDATES[0];
