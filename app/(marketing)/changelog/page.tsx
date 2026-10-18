import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import { REPO_URL } from "@/lib/constants";
import { RELEASES } from "@/lib/changelog";
import { cn } from "@/lib/utils";

export const metadata = {
    title: 'Changelog',
    description: 'Everything that changed in OpenStock, release by release, since it started in September 2025.',
};

// "#123" in an item becomes a link to that pull request
const ItemText = ({ text }: { text: string }) => (
    <>
        {text.split(/\s*(#\d+)/).map((part, i) =>
            /^#\d+$/.test(part) ? (
                <a key={i} href={`${REPO_URL}/pull/${part.slice(1)}`} target="_blank" rel="noreferrer" className="mono ml-1.5 text-[12px] text-faint transition-colors hover:text-brand-ink">
                    {part}
                </a>
            ) : (
                <span key={i}>{part}</span>
            ),
        )}
    </>
);

export default function ChangelogPage() {
    return (
        <>
            <PageHero
                kicker="Changelog"
                title="Everything that changed in OpenStock."
                sub="Every release since we started in September 2025, in plain words. Each change links to its pull request on GitHub."
            >
                <Link href="/dashboard" className="btn btn-primary h-11 px-5 text-[15px]">Open dashboard</Link>
                <a href={`${REPO_URL}/pulls?q=is%3Apr+is%3Amerged`} target="_blank" rel="noreferrer" className="btn btn-ghost h-11 px-5 text-[15px]">All merged pull requests</a>
            </PageHero>

            <ol className="mx-auto mt-16 max-w-[1200px] px-5">
                {RELEASES.map((release, i) => {
                    const latest = i === 0;
                    const last = i === RELEASES.length - 1;
                    return (
                        <li key={release.id} className="grid gap-3 md:grid-cols-[150px_minmax(0,1fr)] md:gap-8">
                            <div className="md:sticky md:top-24 md:self-start md:pt-0.5 md:text-right">
                                <p className="kicker text-foreground">{release.date}</p>
                                {latest && <span className="pill is-brand mt-2">Latest</span>}
                            </div>

                            {/* The timeline: a line down the left of each release, with a dot at its title */}
                            <section aria-labelledby={`release-${release.id}`} className={cn('relative pl-8', !last && 'pb-16')}>
                                {!last && <span className="absolute left-[5px] top-3 bottom-0 w-px bg-line" aria-hidden />}
                                <span
                                    className={cn('absolute left-0 top-1.5 size-[11px] rounded-full ring-4 ring-page', latest ? 'bg-brand' : 'bg-line-strong')}
                                    aria-hidden
                                />
                                <h2 id={`release-${release.id}`} className="text-[24px] font-bold leading-tight tracking-[-0.03em] md:text-[28px]">{release.title}</h2>
                                <p className="mt-1.5 text-[15px] text-muted-foreground">{release.summary}.</p>

                                <div className={cn('mt-6 grid gap-3', release.sections.length > 1 && 'lg:grid-cols-2')}>
                                    {release.sections.map((section) => (
                                        <div key={section.title} className="hatch">
                                            <div className="card h-full p-5">
                                                <h3 className="kicker">{section.title}</h3>
                                                <ul className="mt-3 flex flex-col gap-2.5 text-[14px] leading-relaxed">
                                                    {section.items.map((item) => (
                                                        <li key={item} className="flex gap-2.5">
                                                            <span className="mt-[9px] size-1 flex-none rounded-full bg-brand" aria-hidden />
                                                            <span className="text-muted-foreground"><ItemText text={item} /></span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </li>
                    );
                })}
            </ol>
        </>
    );
}
