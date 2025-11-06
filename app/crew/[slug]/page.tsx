import { Navigation } from "@/components/navigation"
import { getCrewMemberBySlug, getAllCrewSlugs } from "@/lib/crew-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

export async function generateStaticParams() {
  return getAllCrewSlugs().map((slug) => ({
    slug: slug,
  }))
}

export default function CrewMemberPage({
  params,
}: {
  params: { slug: string }
}) {
  const member = getCrewMemberBySlug(params.slug)

  if (!member) {
    notFound()
  }

  const sections = [
    "Physical Appearance of the character",
    "Character's Hobbies and phobias/fears",
    "Positive and Negative Personality Traits of the Character",
    "Character's life from childhood to adulthood",
    "Character's family life",
    "Character's Education Life",
    "Character's Love Life",
    "Character's Business Life",
    "Character's Culture and way of living",
    "Illegal Culture",
    "The character's reason for traveling to Los Santos",
    "Goals and things to do when he arrives in Los Santos",
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-white font-roboto text-sm mb-2">
            {member.name} is a character role-played by {member.rolePlayer}.
          </p>
          {member.streamLink && (
            <a
              href={`https://${member.streamLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-roboto text-sm underline"
            >
              {member.streamLink}
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Contents & Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Contents Box */}
            <div className="border-2 border-red-600 bg-black p-4">
              <div className="flex items-center gap-2 mb-3">
                <Menu className="h-5 w-5 text-white" />
                <h3 className="font-roboto text-white font-bold text-lg">Contents</h3>
              </div>
              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="block text-red-500 hover:text-red-400 font-roboto text-sm py-1"
                  >
                    {section}
                  </a>
                ))}
              </nav>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-8">
              {/* Physical Appearance */}
              <section id="section-0" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Physical Appearance of the character
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.physicalAppearance}
                </p>
              </section>

              {/* Hobbies and Phobias */}
              <section id="section-1" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Character&apos;s Hobbies and phobias/fears
                </h2>
                <p className="font-roboto text-white leading-relaxed mb-4">
                  <strong className="text-red-400">Hobbies:</strong> {member.hobbies}
                </p>
                <p className="font-roboto text-white leading-relaxed">
                  <strong className="text-red-400">Phobias:</strong> {member.phobias}
                </p>
              </section>

              {/* Personality Traits */}
              <section id="section-2" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Positive and Negative Personality Traits of the Character
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-roboto text-green-400 font-bold mb-2">Positive Traits</h3>
                    <ul className="font-roboto text-white space-y-1">
                      {member.positiveTraits.map((trait, index) => (
                        <li key={index}>• {trait}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-roboto text-red-400 font-bold mb-2">Negative Traits</h3>
                    <ul className="font-roboto text-white space-y-1">
                      {member.negativeTraits.map((trait, index) => (
                        <li key={index}>• {trait}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Childhood */}
              <section id="section-3" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Character&apos;s life from childhood to adulthood
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.childhood}
                </p>
              </section>

              {/* Family Life */}
              <section id="section-4" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Character&apos;s family life
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.familyLife}
                </p>
              </section>

              {/* Education */}
              <section id="section-5" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Character&apos;s Education Life
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.education}
                </p>
              </section>

              {/* Love Life */}
              <section id="section-6" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Character&apos;s Love Life
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.loveLife}
                </p>
              </section>

              {/* Business Life */}
              <section id="section-7" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Character&apos;s Business Life
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.businessLife}
                </p>
              </section>

              {/* Culture */}
              <section id="section-8" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Character&apos;s Culture and way of living
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.culture}
                </p>
              </section>

              {/* Illegal Culture */}
              <section id="section-9" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Illegal Culture
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.illegalCulture}
                </p>
              </section>

              {/* Travel Reason */}
              <section id="section-10" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  The character&apos;s reason for traveling to Los Santos
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.travelReason}
                </p>
              </section>

              {/* Goals */}
              <section id="section-11" className="scroll-mt-20">
                <h2 className="font-pirata text-3xl text-white mb-4">
                  Goals and things to do when he arrives in Los Santos
                </h2>
                <p className="font-roboto text-white leading-relaxed">
                  {member.goals}
                </p>
              </section>
            </div>
          </div>

          {/* Right Column - Character Info Card */}
          <div className="lg:col-span-4">
            <div className="bg-blue-600 border-2 border-red-700 rounded-lg overflow-hidden sticky top-4">
              {/* Character Name */}
              <div className="bg-blue-700 p-4">
                <h1 className="font-pirata text-3xl text-white">{member.name}</h1>
              </div>

              {/* Character Image */}
              <div className="relative bg-black aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Biographical Information */}
              <div className="bg-blue-600 p-4 space-y-3">
                <div className="border-b border-black pb-2">
                  <span className="font-roboto text-white font-bold">Status:</span>
                  <span className={`font-roboto ml-2 ${member.status === "Alive" ? "text-green-400" : "text-red-300"}`}>
                    {member.status}
                  </span>
                </div>
                <div className="border-b border-black pb-2">
                  <span className="font-roboto text-white font-bold">Aliases:</span>
                  <span className="font-roboto text-white ml-2">{member.alias}</span>
                </div>
                <div className="border-b border-black pb-2">
                  <h3 className="font-roboto text-white font-bold mb-2">Biography</h3>
                  <div className="space-y-1">
                    <div>
                      <span className="font-roboto text-white font-bold">Date of Birth:</span>
                      <span className="font-roboto text-white ml-2">{member.dateOfBirth}</span>
                    </div>
                    <div>
                      <span className="font-roboto text-white font-bold">Age:</span>
                      <span className="font-roboto text-white ml-2">{member.age}</span>
                    </div>
                    <div>
                      <span className="font-roboto text-white font-bold">Birth Place:</span>
                      <span className="font-roboto text-white ml-2">{member.birthPlace}</span>
                    </div>
                    <div>
                      <span className="font-roboto text-white font-bold">Nationality:</span>
                      <span className="font-roboto text-white ml-2">{member.nationality}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Crew Link */}
            <div className="mt-6">
              <Link
                href="/crew"
                className="inline-block font-roboto text-red-400 hover:text-red-300 uppercase text-sm"
              >
                ← Back to Crew
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

