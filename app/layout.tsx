import type { Metadata } from "next"
import { Pirata_One, Roboto } from "next/font/google"
import "./globals.css"

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "SLY Team",
  description: "SLY Team Landing Page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pirataOne.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

