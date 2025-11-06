"use client"

import Link from "next/link"
import Image from "next/image"
import { crewMembers } from "@/lib/crew-data"

export function CrewSection() {
  // İlk 2 üye, sonraki 3, son 3
  const firstRow = crewMembers.slice(0, 2)
  const secondRow = crewMembers.slice(2, 5)
  const thirdRow = crewMembers.slice(5, 8)

  return (
    <section id="crew" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-pirata text-5xl md:text-6xl font-normal text-white text-center mb-16">
          CREW
        </h2>
        <div className="space-y-8">
          {/* İlk satır: 2 üye */}
          <div className="grid grid-cols-2 gap-8 justify-items-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {firstRow.map((member) => (
              <Link key={member.name} href={`/crew/${member.slug}`} className="group w-[350px] hover:opacity-90 transition-opacity">
                <div className="relative rounded-lg overflow-hidden bg-gray-900 h-[350px] mb-4 cursor-pointer">
                  {/* Character Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="350px"
                  />
                  {/* Alias overlay */}
                  <div className="absolute top-4 left-4 text-white/90 bg-black/50 px-2 py-1 rounded font-roboto text-xs md:text-sm font-medium uppercase z-10">
                    {member.alias}
                  </div>
                </div>
                <h3 className="font-roboto text-xl font-medium text-white text-center uppercase">
                  {member.name}
                </h3>
              </Link>
            ))}
          </div>

          {/* İkinci satır: 3 üye */}
          <div className="grid grid-cols-3 gap-8 justify-items-center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {secondRow.map((member) => (
              <Link key={member.name} href={`/crew/${member.slug}`} className="group w-[350px] hover:opacity-90 transition-opacity">
                <div className="relative rounded-lg overflow-hidden bg-gray-900 h-[350px] mb-4 cursor-pointer">
                  {/* Character Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="350px"
                  />
                  {/* Alias overlay */}
                  <div className="absolute top-4 left-4 text-white/90 bg-black/50 px-2 py-1 rounded font-roboto text-xs md:text-sm font-medium uppercase z-10">
                    {member.alias}
                  </div>
                </div>
                <h3 className="font-roboto text-xl font-medium text-white text-center uppercase">
                  {member.name}
                </h3>
              </Link>
            ))}
          </div>

          {/* Üçüncü satır: 3 üye */}
          <div className="grid grid-cols-3 gap-8 justify-items-center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {thirdRow.map((member) => (
              <Link key={member.name} href={`/crew/${member.slug}`} className="group w-[350px] hover:opacity-90 transition-opacity">
                <div className="relative rounded-lg overflow-hidden bg-gray-900 h-[350px] mb-4 cursor-pointer">
                  {/* Character Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="350px"
                  />
                  {/* Alias overlay */}
                  <div className="absolute top-4 left-4 text-white/90 bg-black/50 px-2 py-1 rounded font-roboto text-xs md:text-sm font-medium uppercase z-10">
                    {member.alias}
                  </div>
                </div>
                <h3 className="font-roboto text-xl font-medium text-white text-center uppercase">
                  {member.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

