"use client"

import { ChevronDown, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Navigation() {
  const [language, setLanguage] = useState<"en" | "tr">("en")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en")
  }

  return (
    <nav className="w-full border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="SLY Team Logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 font-roboto text-sm font-medium uppercase text-white">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              HOMEPAGE
            </Link>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
              <Link href="/media">MEDIA</Link>
              <ChevronDown className="h-4 w-4" />
            </div>
            <Link href="/crew" className="hover:opacity-80 transition-opacity">
              CREW
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:opacity-80 transition-opacity"
            >
              ABOUT US
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:opacity-80 transition-opacity"
            >
              CONTACT
            </button>
            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

