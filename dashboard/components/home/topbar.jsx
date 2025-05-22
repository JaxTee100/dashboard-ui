'use client'

import { Menu } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function Topbar({ toggleSidebar }) {
  return (
    <header className="w-full mx-3 h-16 px-4 py-4 bg-gray-100 flex items-center justify-between sticky top-0 z-40 border-b-4">
      <div className="flex items-center gap-3">
        {/* Only visible on small screens */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-700 hover:text-blue-500"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="flex items-center gap-4 pr-2">
        
        <Avatar className="w-8 h-8">
          <AvatarImage src="/assets/images/contacts/images.jpeg" alt="User Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
