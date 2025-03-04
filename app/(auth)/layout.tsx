import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image src="/android-chrome-192x192.png" alt="Nebula-Suite Logo" fill priority className="rounded-md object-contain" />
            </div>
            <span className="font-bold">Nebula-Suite</span>
          </Link>
          <ModeToggle />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Nebula-Suite. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
