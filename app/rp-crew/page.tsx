import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function RPCrewPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-pirata text-6xl md:text-7xl font-normal text-white mb-8">
            RP CREW
          </h1>
          <p className="font-roboto text-lg text-white/80 mb-8">
            RP Crew sayfası yakında eklenecek...
          </p>
          <Link
            href="/"
            className="inline-block font-roboto text-white uppercase hover:opacity-80 transition-opacity"
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  )
}

