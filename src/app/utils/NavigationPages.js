"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationPages() {
    const pathname = usePathname();

    // Split the current URL path into parts
    const pathnames = pathname.split('/').filter((x) => x);

    return (
        <nav className="text-gray-600 border-b border-[#e1e1e1] text-[8px] text-sm mb-2 h-16 ps-6 justify-center flex flex-row w-full mx-auto">
            <ul className="flex items-center max-w-[1280px] w-full space-x-2">
                {/* Home link */}
                <li>
                    <Link href="/" className="hover:text-blue-500 uppercase">Home</Link>
                </li>

                {/* Breadcrumb navigation */}
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={to} className="flex items-center">
                            {/* Add separator */}
                            <span className="mx-2"> &gt; </span>
                            {isLast ? (
                                // If it's the last part of the path, show plain text
                                <span className="text-[#e1b671] uppercase">{formatBreadcrumb(value)}</span>
                            ) : (
                                // If not the last part, make it a link
                                <Link href={to} className="hover:text-blue-500 uppercase">
                                    {formatBreadcrumb(value)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

// Format breadcrumb text to be more readable
function formatBreadcrumb(text) {
    return text.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

export default NavigationPages;
