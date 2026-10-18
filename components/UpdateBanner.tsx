'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { LATEST_UPDATE } from "@/lib/updates";
import { cn } from "@/lib/utils";

const STORAGE_KEY = 'openstock:update-seen';

// Announces the latest release until it's dismissed or opened. Rendered only after mount, so people who already
// closed it never see it flash in.
export default function UpdateBanner({ className }: { className?: string }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        try { setVisible(localStorage.getItem(STORAGE_KEY) !== LATEST_UPDATE.id); } catch { setVisible(true); }
    }, []);

    if (!visible) return null;

    const markSeen = () => {
        setVisible(false);
        try { localStorage.setItem(STORAGE_KEY, LATEST_UPDATE.id); } catch { /* private mode: hidden for this visit */ }
    };

    return (
        <div
            role="region"
            aria-label="What's new"
            className={cn('flex items-center gap-2.5 rounded-[12px] bg-brand-soft/50 py-1.5 pl-2 pr-1.5 text-[13px] shadow-[inset_0_0_0_1px_oklch(0.8_0.13_176/0.25)]', className)}
        >
            <span className="pill is-brand shrink-0">New</span>
            <p className="min-w-0 flex-1 truncate">
                <span className="font-semibold text-foreground">{LATEST_UPDATE.title}:</span>{' '}
                <span className="text-muted-foreground">{LATEST_UPDATE.headline}</span>
            </p>
            <Link href="/whats-new" onClick={markSeen} className="flex shrink-0 items-center gap-1 font-semibold text-brand-ink hover:underline">
                What’s new <ArrowRight className="size-3.5" />
            </Link>
            <button type="button" onClick={markSeen} className="icon-btn size-7 shrink-0" aria-label="Dismiss update banner" title="Dismiss">
                <X className="size-3.5" />
            </button>
        </div>
    );
}
