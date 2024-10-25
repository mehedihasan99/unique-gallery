import imageData from '@/app/photos-data'
import Modal from '@/components/Modal'
import Image from 'next/image'

export default async function PhotoPage({ params }) {
  const { id } = await params

  const photo = imageData.find((image) => image.id === id)

  return (
    <Modal>
      <div className="flex flex-col items-center bg-gray-300 justify-center mt-20 p-4">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">
          {photo.title}
        </h1>
        <Image
          src={photo.url}
          alt={photo.title}
          width={700} // Adjusting max width for larger screens
          height={467} // Maintaining aspect ratio for the image
          className="w-full h-auto object-cover max-h-[60vh] sm:max-w-[600px] lg:max-w-[700px] rounded-lg shadow-lg" // Ensuring responsiveness
        />
      </div>
    </Modal>
  )
}
