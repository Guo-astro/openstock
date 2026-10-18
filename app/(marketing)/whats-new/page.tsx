import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";
import { REPO_URL } from "@/lib/constants";
import { UPDATES } from "@/lib/updates";

export const metadata = {
    title: 'What’s new',
    description: 'What changed in OpenStock, release by release.',
};

export default function WhatsNewPage() {
    return (
        <>
            <PageHero
                kicker="What’s new"
                title="What changed in OpenStock."
                sub="Every release, in plain words. OpenStock is open source, so each change is also on GitHub."
            >
                <Link href="/dashboard" className="btn btn-primary h-11 px-5 text-[15px]">Open dashboard</Link>
                <a href={`${REPO_URL}/pulls?q=is%3Apr+is%3Amerged`} target="_blank" rel="noreferrer" className="btn btn-ghost h-11 px-5 text-[15px]">Every change on GitHub</a>
            </PageHero>

            <div className="mx-auto mt-16 flex max-w-[1200px] flex-col gap-16 px-5">
                {UPDATES.map((update) => (
                    <section key={update.id} aria-labelledby={`update-${update.id}`}>
                        <p className="kicker text-brand-ink">{update.date}</p>
                        <h2 id={`update-${update.id}`} className="mt-2 text-[28px] font-bold tracking-[-0.04em] md:text-[34px]">{update.title}</h2>
                        <p className="mt-2 max-w-2xl text-[16px] text-muted-foreground">{update.headline}.</p>

                        <div className="mt-8 grid gap-3 md:grid-cols-2">
                            {update.sections.map((section) => (
                                <div key={section.title} className="hatch">
                                    <div className="card h-full p-5">
                                        <h3 className="text-[16px] font-bold">{section.title}</h3>
                                        <ul className="mt-3 flex flex-col gap-2.5 text-[14px] leading-relaxed">
                                            {section.items.map((item) => (
                                                <li key={item} className="flex gap-2.5">
                                                    <Check className="mt-1 size-4 flex-none text-brand-ink" />
                                                    <span className="text-muted-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}
