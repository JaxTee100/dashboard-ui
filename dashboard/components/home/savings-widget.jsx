'use client'

import { Card } from "@/components/ui/card"
import { Car, Home, Gamepad2, Monitor, ArrowLeft, ArrowRight } from "lucide-react"

const goals = [
  { name: 'Dream Car', saved: 35380, total: 90000, icon: Car, bg: 'bg-purple-100', sb: 'bg-purple-400' },
  { name: 'House Saving', saved: 10740, total: 55000, icon: Home, bg: 'bg-blue-100', sb: 'bg-blue-400' },
  { name: 'Video Game', saved: 3800, total: 5000, icon: Gamepad2, bg: 'bg-green-100', sb: 'bg-green-400' },
  { name: 'TV', saved: 4280, total: 7000, icon: Monitor, bg: 'bg-yellow-100', sb: 'bg-yellow-400' },
]

export default function SavingsWidget() {
  return (
    <div className="p-2  w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-extrabold tracking-wide">Savings</h1>
        <div className="flex gap-2">
          <ArrowLeft className="w-10 h-10 text-white p-3 border bg-black hover:bg-slate-900 rounded-lg shadow-md transition-all duration-300 hover:scale-105 cursor-pointer" />
          <ArrowRight className="w-10 h-10 text-white p-3 border bg-black hover:bg-slate-900 rounded-lg shadow-md transition-all duration-300 hover:scale-105 cursor-pointer" />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {goals.map((goal, index) => {
          const Icon = goal.icon
          const progressPercent = (goal.saved / goal.total) * 100

          return (
            <Card
              key={index}
              className="rounded-xl p-4 bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer  flex flex-col items-center justify-center"
            >
              <div className="flex flex-col gap-2  items-center">
                <Icon
                  className={`w-10 h-10 text-gray-700 font-bold rounded-full p-3 ${goal.bg} transition-all duration-300 hover:scale-110`}
                />
                <h3 className="text-md font-bold text-gray-800">{goal.name}</h3>
              </div>
              <div className="text-sm text-gray-600">
                R${goal.saved} of R${goal.total}
              </div>
              <div className={`w-full h-2 rounded ${goal.bg} `}>
                <div
                  className={`h-2 rounded ${goal.sb} transition-all duration-500`}
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
