'use client'

import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { Card } from "@/components/ui/card"
import clsx from 'clsx'
import { FaPlaystation } from "react-icons/fa6";
import { BsSpotify } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
import { motion } from 'framer-motion'

const cardData = [
  {
    title: "Spotify",
    sub: "Spotify Premium",
    price: "21,90",
    date: "11/05",
    color: "text-green-500",
    icon: <BsSpotify size={32} />,
    gradient: "bg-gradient-to-br from-green-400 via-green-500 to-gray-700"
  },
  {
    title: "PSN",
    sub: "Playstation Plus",
    price: "59,90",
    date: "11/01",
    color: "text-white",
    icon: <FaPlaystation size={32} />,
    gradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-gray-800"
  },
  {
    title: "Netflix",
    sub: "Netflix Premium",
    price: "00,00",
    date: "10/28",
    color: "text-red-500",
    icon: <RiNetflixFill size={32} />,
    gradient: "bg-gradient-to-br from-red-400 via-red-500 to-gray-600"
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

export default function CardItem() {
  return (
    <div className='flex flex-col gap-6 w-full p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg md:text-3xl font-bold tracking-wide text-gray-900 dark:text-white'>
          Recent Transactions
        </h1>
        <div className='flex space-x-2'>
          <button className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 hover:bg-gray-700 transition rounded-lg shadow-md">
            <ArrowLeft />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 hover:bg-gray-700 transition rounded-lg shadow-md">
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-8 ">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Card
              className={clsx(
                "rounded-2xl text-white shadow-xl  transition-all duration-300 contrast-125 gray-scale-50",
                card.gradient
              )}
            >
              <div className="flex flex-col gap-6 p-6">
                <div className="flex items-center gap-4">
                  <div className={`rounded-xl p-3 bg-black ${card.color}`}>
                    {card.icon}
                  </div>
                  <div>
                    <h2 className='text-lg font-bold tracking-wide'>{card.title}</h2>
                    <p className='text-sm text-gray-100/80'>{card.sub}</p>
                  </div>
                </div>

                <div className=' bg-white/20 backdrop-blur-sm rounded-lg h-28 flex flex-col gap-2 border border-gray-400 shadow-2xl p-4'>
                    <div className='flex relative'>
                        <div className='bg-[#f11202]  rounded-full h-5 w-5'></div>
                        <div className='bg-yellow-400  rounded-full h-5 w-5 absolute left-4'></div>
                    </div>
                    <p className='text-[9px] text-gray-300'>Credit Card</p>
                    <div className='flex-col gap-2  p-2'>
                      <div className='flex space-x-30 items-center'>
                        <p className='text-[9px] text-gray-300'>Valid</p>
                        <p className='text-[9px] text-gray-300'>2015</p>
                      </div>
                      <div className='flex'>
                        <p className='text-[8px] text-gray-400 tracking-widest'>1234  5678  ****  ****  ****  1234 567890</p>
                      </div>
                    </div>
                  
                </div>
                <div className=''><ExternalLink className='text-white opacity-90' /></div>

                <div className='flex items-center justify-between text-sm pt-2  border-white/20'>
                  <span className="text-white text-lg font-semibold tracking-wide">R${card.price}</span>
                  <span className="text-white/80">{card.date}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
