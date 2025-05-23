import React from 'react'
import { Card } from '../ui/card'

const MasterCard = ({ card }) => {
    return (
        <div className='relative'>
            <Card className={`drop-shadow-xl/25 absolute top-8 md:top-20 lg:top-24 border-2 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-colors duration-300 -translate-y-1/2 w-70 h-30 lg:w-74 lg:h-40 ${card.gradient} rounded-lg shadow-md p-4 flex  z-0 transition-all duration-300 hover:scale-105 hover:shadow-xl`}>

                <div className=''>
                    <div className='flex relative'>
                        <div className='bg-[#f11202]  rounded-full h-5 w-5'></div>
                        <div className='bg-yellow-400  rounded-full h-5 w-5 absolute left-4'></div>
                    </div>

                    <span className="text-white text-[10px] md:text-[10px] ">{card.title}</span>
                </div>
            </Card>
        </div>
    )
}

export default MasterCard