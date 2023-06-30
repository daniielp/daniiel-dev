import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import type { PropsWithChildren } from "react";


export default function MarketingLayout({ children }: PropsWithChildren) {
    return (
        <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    )
}