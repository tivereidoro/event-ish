import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/assets/images/logo.svg";

export default function Footer() {
    return (
        <footer className='border-t'>
            <div className='flex-center wrapper flex flex-between flex-col gap-4 p-5 text-center sm:flex-row'>
                <Link href="/" className='w-36'>
                    <Image src={logo} width={128} height={38} alt='Event-ish logo' />
                </Link>

                <p>
                    &copy; {new Date().getFullYear()} Event-ish, Inc. || All rights reserved
                </p>
            </div>
        </footer>
    )
}
