'use client'

import { Pencil, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Card } from '../ui/card'
import Image from 'next/image'
import { motion } from 'framer-motion'

const contacts = [
    { id: 1, name: 'Alice', avatar: '/assets/images/contacts/images.jpeg' },
    { id: 2, name: 'Bob', avatar: '/assets/images/contacts/images.jpeg' },
    { id: 3, name: 'Carol', avatar: '/assets/images/contacts/images.jpeg' },
    { id: 4, name: 'Dave', avatar: '/assets/images/contacts/images.jpeg' },
    { id: 5, name: 'Dave', avatar: '/assets/images/contacts/images.jpeg' },
    { id: 6, name: 'Dave', avatar: '/assets/images/contacts/images.jpeg' },
]

export default function ContactsCard() {
    const router = useRouter()

    return (
        <Card className="w-full flex  p-4 rounded-2xl shadow-md bg-white">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-bold">Contacts</h2>
                    <p className="text-sm text-gray-500">Last payments for the last 3 days</p>
                </div>
                <button className="flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline">
                    <Pencil className="w-4 h-4" />
                    Edit
                </button>
            </div>

            {/* Scrollable Avatars */}
            <div className='flex gap-4 items-center'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex overflow-x-hidden space-x-4   items-center"
                >
                    {contacts.map(contact => (
                        <div
                            key={contact.id}
                            className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 p-1 shadow-sm flex items-center justify-center"
                        >
                            <Image
                           height={40}
                                width={40}  
                                src={contact.avatar}
                                alt={contact.name}
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                    ))}

                    {/* Search Button */}

                </motion.div>
                <span className='text-gray-500'>|</span>
                <motion.button
                    onClick={() => router.push('/contacts')}
                    className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100  flex items-center justify-center hover:bg-blue-200"
                >
                    <Search className="w-6 h-6 text-blue-700" />
                </motion.button>
            </div>

        </Card>
    )
}
