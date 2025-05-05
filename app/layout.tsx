import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Piano with Hardik | Piano, Guitar & Ukulele Lessons",
  description:
    "Expert music lessons for all ages and skill levels. Learn piano, guitar, and ukulele with Hardik Pandya, a qualified Western music teacher with over 10 years of experience.",
  keywords:
    "piano lessons, guitar lessons, ukulele lessons, music teacher, online music lessons, Hardik Pandya, music education, Trinity College London certified",
  authors: [{ name: "Hardik Pandya" }],
  creator: "Hardik Pandya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pianowithhardik.com",
    title: "Piano with Hardik | Music Academy",
    description:
      "Expert music lessons for all ages and skill levels. Learn piano, guitar, and ukulele with Hardik Pandya.",
    siteName: "Piano with Hardik",
    images: [
      {
        url: '/hardik-3.jpeg',
        width: 400,
        height: 400,
        alt: 'LRV Group',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Move these to a Script component or add them in the head section of your app */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
