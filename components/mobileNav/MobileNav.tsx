import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from 'react';
import menu from "@/public/assets/icons/menu.svg";
import logo from "@/public/assets/images/logo.svg";
import { Separator } from "../ui/separator";
import NavItems from "../navitems/NavItems";

export default function MobileNav() {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image src={menu} alt="menu" width={24} height={24} className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden"> {/* side="top" */}
                    <Image src={logo} width={128} height={38} alt='logo' />

                    <Separator className="border border-gray-50" />

                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    )
}
