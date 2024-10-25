import imageData from '@/app/photos-data'
import Image from 'next/image'

export default async function PhotoPage({ params }) {
  const { id } = await params

  const photo = imageData.find((image) => image.id === id)

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">{photo.title}</h1>
      <Image
        src={photo.url}
        alt={photo.title}
        width={600} // Use a larger width for better quality on larger screens
        height={400} // Adjust height according to aspect ratio
        className="w-full max-h-[450px] object-cover max-w-[700px] rounded-lg shadow-lg" // Responsive styling
      />
    </div>
  )
}
