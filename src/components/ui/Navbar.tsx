"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
// import { SolarLogo } from "../../../public/SolarLogo"
import { Button } from "../Button"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-transparent shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0"
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          {/* ✅ Logo */}
          <Link href={siteConfig.baseLinks.home} aria-label="Home" className="flex items-center">
            <Image
              src="/images/logi.png"
              alt="LaunchLabs Logo"
              width={120}
              height={40}
              className="h-auto w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] object-contain"
              priority
            />
          </Link>


          {/* ✅ Desktop Nav */}
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link className="px-2 py-1 text-black" href="#solutions">
                Om oss
              </Link>
              <Link className="px-2 py-1 text-black" href="#farm-management">
                Kvalifisering
              </Link>
              <Link className="px-2 py-1 text-black" href="#services">
                Våre tjenester
              </Link>
              <Link className="px-2 py-1 text-black" href="#partner">
                Bli partner
              </Link>
            </div>
          </nav>

          {/* ✅ Desktop Button */}
          <Link href="/form">
            <Button variant="secondary" className="hidden h-10 font-semibold sm:block">
              Søk nå
            </Button>
          </Link>

          {/* ✅ Mobile Menu Toggle */}
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 sm:hidden"
            aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill className="size-6 shrink-0 text-gray-900" aria-hidden />
            ) : (
              <RiCloseFill className="size-6 shrink-0 text-gray-900" aria-hidden />
            )}
          </Button>
        </div>

        {/* ✅ Mobile Nav */}
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden"
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href="#solutions">Om oss</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#farm-management">Kvalifisering</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#services">Våre tjenester</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#partner">Bli partner</Link>
            </li>
          </ul>

          {/* ✅ Mobile CTA button - visible only on small screens */}
          <Link href="/form">
            <Button
              variant="secondary"
              className="block h-10 font-semibold sm:hidden"
            >
              Søk nå
            </Button>
          </Link>
        </nav>
      </div>
    </header>)
}