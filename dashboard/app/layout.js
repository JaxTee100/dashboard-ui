'use client'

import { useState } from 'react'
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/home/sidebar"
import Topbar from "@/components/home/topbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const toggleSidebar = () => setMobileSidebarOpen(prev => !prev)

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 flex`}>
        <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />
        <div className="flex-1 flex flex-col">
          <Topbar toggleSidebar={toggleSidebar} />
          <main className="p-4 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
