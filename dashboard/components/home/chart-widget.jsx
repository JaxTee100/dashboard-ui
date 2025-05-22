'use client'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, BarChart } from 'lucide-react';
import { motion } from "framer-motion"

const data = [
  { month: 'Mar 1', value: 2000 },
  { month: 'Mar 15', value: 5000 },
  { month: 'Mar 30', value: 8000 },
]

const months = [
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
]

export default function ChartWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="rounded-xl p-4 space-y-4 mt-6 shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Header */}
        <div className="flex justify-between items-start">
          {/* Text */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg lg:text-2xl font-bold">Changes Chart</h3>
            <p className="text-xs text-muted-foreground">Balance by time changing</p>
          </div>

          {/* Select input */}
          <div className="flex flex-col gap-2 items-end">
            <Select onValueChange={(value) => console.log("Selected month:", value)}>
              <SelectTrigger className="w-[90px] lg:w-[110px] bg-black text-white font-semibold rounded-lg border border-gray-500 hover:border-white transition duration-300">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border border-gray-700 rounded-lg">
                {months.map((month) => (
                  <SelectItem
                    key={month.value}
                    value={month.value}
                    className="hover:bg-gray-800 focus:bg-gray-700 transition-colors"
                  >
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-sm font-semibold text-yellow-600 transition duration-300 hover:scale-105">
              +3.24%
            </span>
          </div>
        </div>

        {/* Icons Row */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="border rounded bg-blue-500 p-1 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md">
              <Clock size={22} className="text-white" />
            </div>
            <div className="border rounded bg-black p-1 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md">
              <BarChart size={22} className="text-white" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Updated at 11:26 AM</p>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              stroke="#888"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              stroke="#888"
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderColor: "#4b5563",
                borderRadius: 8,
                padding: 8,
                color: "#fff",
              }}
              labelStyle={{ color: "#d1d5db" }}
              formatter={(value) => [`R$${value}`, 'Amount']}
            />
            <Line
              type="natural"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ r: 4 }}
              isAnimationActive={true}
              animationDuration={1000}
              animationEasing="ease-in-out"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Footer */}
        <Separator />
      </Card>
    </motion.div>
  )
}
