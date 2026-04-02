"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
    const pathname = usePathname();

    const pathMapping: Record<string, string> = {
        "/events": "Event Spaces",
        "/rooms": "Rooms",
        "/dining": "Dining",
        "/about": "About Us",
        "/contact": "Contact Us",
        "/privacy-policy": "Privacy Policy",
        "/terms-conditions": "Terms & Conditions",
    };

    const isHome = pathname === "/";
    let currentName = "";
    
    if (!isHome && pathname) {
        currentName = pathMapping[pathname] || pathname.split('/').pop()?.replace(/-/g, ' ') || "";
        currentName = currentName.replace(/\b\w/g, c => c.toUpperCase());
    }

    return (
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-[#F9F2E8]/60 font-medium tracking-wide uppercase z-20 relative">
            <Link href="/" className="hover:text-[#F9F2E8] font-sans transition-colors">
                Home
            </Link>
            {!isHome && (
                <>
                    <ChevronRight className="w-4 h-4 text-[#F9F2E8]/40" />
                    <span className="text-[#F9F2E8] font-sans font-semibold">{currentName}</span>
                </>
            )}
        </nav>
    );
}
    