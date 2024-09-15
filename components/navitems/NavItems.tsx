"use client"

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavItems() {
    // Use pathname from next navigation to allow
    // unique styling of the currently active path/link
    const pathName = usePathname();

    return (
        <ul className='flex md:flex-between w-full flex-col items-start gap-5 md:flex-row'>
            {/* Map through array of links and render
                all at once as a navitems compnent */}
            {headerLinks.map((link) => {
                // Set isActive if we're currently on pathname
                const isActive = pathName === link.route;

                return (
                    <li key={link.route} className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`} >
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                )
            })}
        </ul >
    )
}
