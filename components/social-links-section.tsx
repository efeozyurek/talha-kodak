"use client"

import { Youtube, MessageCircle } from "lucide-react"
import Link from "next/link"

export function SocialLinksSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-pirata text-5xl md:text-6xl font-normal text-white text-center mb-16">
          SOCIAL LINKS
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* YouTube */}
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group hover:opacity-80 transition-opacity"
          >
            <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center">
              <Youtube className="h-10 w-10 text-white fill-white" />
            </div>
            <span className="font-roboto text-white text-sm font-medium uppercase">
              YouTube
            </span>
          </Link>

          {/* Discord */}
          <Link
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group hover:opacity-80 transition-opacity"
          >
            <div className="w-20 h-20 bg-[#5865F2] rounded-lg flex items-center justify-center">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <span className="font-roboto text-white text-sm font-medium uppercase">
              Discord
            </span>
          </Link>

          {/* TikTok */}
          <Link
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group hover:opacity-80 transition-opacity"
          >
            <div className="w-20 h-20 bg-black rounded-lg flex items-center justify-center border-2 border-white/20 relative overflow-hidden">
              <svg
                className="h-10 w-10 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.59c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                  fill="white"
                />
              </svg>
              {/* TikTok color accents */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500"></div>
              </div>
            </div>
            <span className="font-roboto text-white text-sm font-medium uppercase">
              TikTok
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

