
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <nav className="w-64 bg-gray-200 p-4 h-screen fixed border border-white bg-transparent">
    <div>
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="list-none p-0">
        <li className="mb-2 border"><Link href="/dashboard/home" className="text-blue-500 hover:underline">Home</Link></li>
        <li className="mb-2"><a href="/dashboard/about" className="text-blue-500 hover:underline">About</a></li>
        <li className="mb-2"><a href="/dashboard/services" className="text-blue-500 hover:underline">Services</a></li>
        <li className="mb-2"><a href="/dashboard/contact" className="text-blue-500 hover:underline">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Sidebar