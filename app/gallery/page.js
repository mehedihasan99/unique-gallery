import Image from 'next/image'
import Link from 'next/link'
import imageData from '../photos-data'

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
      {imageData.map((image) => (
        <Link key={image.id} href={`/gallery/${image.id}`}>
          <Image
            src={image.url}
            alt={image.title}
            width={200} // these values will be overridden by the 'w-full' class
            height={150}
            className="w-full h-auto" // ensures full width with auto height to maintain aspect ratio
          />
        </Link>
      ))}
    </div>
  )
}
