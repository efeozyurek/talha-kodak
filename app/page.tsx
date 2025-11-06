import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { VideoSection } from "@/components/video-section"
import { SocialLinksSection } from "@/components/social-links-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <AboutSection />
      <VideoSection />
      <SocialLinksSection />
    </main>
  )
}

