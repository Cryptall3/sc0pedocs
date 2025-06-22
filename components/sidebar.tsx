"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
    { name: 'Introduction', href: '/introduction' },
    { name: 'Getting Started', href: '/getting-started' },
    { name: 'Core Features', href: '/features' },
    { name: 'Wallet Analysis', href: '/features/wallet-analysis' },
    { name: 'Token Analysis', href: '/features/token-analysis' },
    { name: 'AI Chatbot', href: '/features/ai-chatbot' },
    { name: 'API Reference', href: '/api-reference' },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 border-r p-4">
            <h2 className="text-lg font-semibold mb-4">sc0pe Docs</h2>
            <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "rounded-md px-3 py-2 text-sm font-medium",
                            pathname === item.href
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
} 