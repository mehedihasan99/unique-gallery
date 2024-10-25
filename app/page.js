'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mt-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Gallery</h1>
        <p className="text-lg">Click on an image to view it in a modal.</p>
        {/* create a gallery button */}
        <button
          onClick={() => router.push('/gallery')}
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Gallery
        </button>
      </div>
    </div>
  )
}
