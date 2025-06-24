"use client"
import { useState } from "react";
import Link from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@heroui/react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "./theme-switch";
import { Brush } from "lucide-react";

export default function AppNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            maxWidth="xl"
            className="bg-background/70 backdrop-blur-lg"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <div className="justify-between flex items-center gap-2">
                        <Brush className="w-4 h-4 text-primary-500 mx-auto" />
                        <Link href="/" className="font-bold text-inherit">
                            {siteConfig.name}
                        </Link>
                    </div>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <Link
                            className="hover:opacity-80 transition-opacity"
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="pt-6">
                {siteConfig.navMenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.href}-${index}`} className="mb-2">
                        <Link
                            className="w-full text-lg py-2 block hover:text-primary-500 transition-colors"
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}