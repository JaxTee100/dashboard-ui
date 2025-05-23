'use client'

import { Card } from "@/components/ui/card"
import { Pencil, Heart, Trash2, Search, Plus, Menu } from "lucide-react"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import MasterCard from "../cards/masterCard"

const cardDetails = [
  {
    title: "Credit Card",
    gradient: "bg-gradient-to-br from-black via-gray-500 to-gray-200"
  },
  {
    title: "Debit Card",
    gradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800"
  },
]

export default function MyCards() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl border bg-white  shadow-md">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="mr-auto gap-2 flex flex-col">
          <h1 className="text-lg font-bold tracking-wide">My Cards</h1>
          <p className="text-xs text-gray-400">2 Active Cards</p>
        </div>
        <Search
          size={16}
          className="text-gray-400 transition-colors duration-300 hover:text-black cursor-pointer"
        />
        <div className="border p-2 rounded-md bg-blue-500 transition-all duration-300 hover:bg-blue-600 hover:scale-105 cursor-pointer">
          <Plus size={16} className="text-white font-bold" />
        </div>
      </div>

      <Separator />

      {/* Outer relative container */}
      <div className="flex flex-col gap-4 py-8 lg:py-4">
        {
          cardDetails.map((card, index) => (
            <div className="relative  p-2" key={index}>
              <MasterCard card={card} />
              <div className="relative flex justify-between z-10 rounded-[50px] shadow-lg  border-b-50 opacity-80 py-8 border-gray-400">
                <div className="hidden lg:flex md:items-center justify-between  w-full p-2 rounded-sm">
                  <Menu
                    size={16}
                    className="text-gray-700 transition-all duration-300 hover:text-black hover:scale-110 cursor-pointer"
                  />
                  <div className="flex md:flex-col justify-between gap-2">
                    <Pencil
                      size={14}
                      className="text-blue-600 font-bold transition-colors duration-300 hover:text-blue-800 cursor-pointer hover:scale-110"
                    />
                    <Trash2
                      size={14}
                      className="text-gray-700 transition-colors duration-300 hover:text-gray-600 cursor-pointer hover:scale-110"
                    />
                    <Heart
                      size={14}
                      className="text-red-600 transition-colors duration-300 hover:text-red-400 cursor-pointer hover:scale-110"
                    />
                  </div>
                </div>
                <div className="flex lg:hidden md:items-center bg-white absolute  w-full p-2 rounded-sm justify-between">
                  <Menu
                    size={16}
                    className="text-gray-700 transition-all duration-300 hover:text-black hover:scale-110 cursor-pointer"
                  />
                  <Pencil
                      size={14}
                      className="text-blue-600 font-bold transition-colors duration-300 hover:text-blue-800 cursor-pointer hover:scale-110"
                    />
                    <Trash2
                      size={14}
                      className="text-gray-700 transition-colors duration-300 hover:text-gray-600 cursor-pointer hover:scale-110"
                    />
                    <Heart
                      size={14}
                      className="text-red-600 transition-colors duration-300 hover:text-red-400 cursor-pointer hover:scale-110"
                    />
                </div>
              </div>
            </div>
          ))
        }

        {/* Blue card BEHIND */}

        {/* Gray bordered container (the "pocket") */}
      </div>

      <Button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-105 w-[150px] mx-auto">
        Show All Cards
      </Button>
    </div>
  )
}
