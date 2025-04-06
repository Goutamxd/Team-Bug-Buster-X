"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Bell, Search } from "lucide-react"
import { usePathname } from "next/navigation"
import LanguageSwitcher from "./LanguageSwitcher"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find Doctors", href: "/doctors" },
  { name: "Hospitals", href: "/hospitals" },
  { name: "Medicines", href: "/medicines" },
  { name: "Health Records", href: "/records" },
  { name: "Blog", href: "/blog" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Chikitsa+ Logo" width={150} height={40} className="mr-2" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                pathname === link.href ? "text-green-600" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Sign In
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Emergency SOS</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white dark:bg-gray-950">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  pathname === link.href ? "text-green-600" : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t flex flex-col space-y-2">
              <Button variant="outline" className="border-green-600 text-green-600 w-full">
                Sign In
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 w-full">Emergency SOS</Button>
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

