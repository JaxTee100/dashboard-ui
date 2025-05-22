'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { MdDashboard } from "react-icons/md";
import { usePathname } from 'next/navigation'
import { navItems } from '@/config/data';
import { X } from 'lucide-react';




export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const pathname = usePathname()
  const sidebarRef = useRef(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMobileOpen(false)
      }
    }

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileOpen, setMobileOpen])

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden p-4 lg:flex flex-col overflow-y-hidden h-screen  border-r-2 border-blue-200 bg-white transition-all duration-300 ease-in-out ${expanded ? 'w-64' : 'w-20'
          }`}
      >
        {/* Toggle Button */}
      
        <div className="flex items-center justify-between px-4 pb-4 pt-2">
          <button onClick={() => setExpanded(!expanded)}>
            <MdDashboard size={24} className='text-blue-500 hover:text-blue-300' />
          </button>
          {expanded && <span className="text-lg font-semibold text-lg text-blue-500">Dashboard</span>}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-2 space-y-2">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={name}
                href={href}
                className={`flex items-center px-2 py-4 rounded-md transition-all duration-300 ease-in-out ${isActive ? 'text-blue-500 ' : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <Icon size={20} className="min-w-[20px]" />
                <span
                  className={`ml-3 text-sm whitespace-nowrap overflow-hidden transition-opacity duration-200 ${expanded ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {name}
                </span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        ref={sidebarRef}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Dashboard</span>
          <button onClick={() => setMobileOpen(false)}>
            <X />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-3 p-2 rounded-md transition-colors ${isActive ? 'text-blue-500 bg-blue-100' : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <Icon size={20} />
                <span className="text-sm">{name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
