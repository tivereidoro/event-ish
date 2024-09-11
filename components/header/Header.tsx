import React from 'react';
import headerLogo from "@/public/assets/images/logo.svg";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button'
import NavItems from '../navitems/NavItems'
import MobileNav from '../mobileNav/MobileNav'

export default function Header() {
    return (
        <header className='border-b w-full'>
            <div className='wrapper flex justify-between items-center'>
                <Link href="/" className='w-36'>
                    <Image src={headerLogo} width={128} height={38} alt='Event-ish logo' />
                </Link>

                <SignedIn>
                    <nav className='hidden md:flex-between w-full max-w-xs'>
                        <NavItems />
                    </nav>
                </SignedIn>

                <div className='flex w-32 justify-end gap-3'>
                    <SignedIn>
                        <UserButton fallbackRedirectUrl='/' />
                        <MobileNav />
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className='rounded-full' size="lg">
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}
