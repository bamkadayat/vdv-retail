import Link from 'next/link'
import { FaChevronLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="inline-block px-6 py-3 text-white bg-black rounded-lg transition duration-300">
        <div className="flex items-center">
            <FaChevronLeft size={16} color="white" /> <span>Return home</span>
          </div>
         
        </Link>
      </div>
    </div>
  )
}
