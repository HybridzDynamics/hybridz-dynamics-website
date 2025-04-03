import Image from 'next/image'
import Link from 'next/link'
import { fetchYouTubeVideos } from '../utils/api'

export default async function Videos() {
  const videos = await fetchYouTubeVideos(12)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video: any) => (
          <div key={video.id.videoId} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              width={320}
              height={180}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{video.snippet.title}</h3>
              <p className="text-gray-400 mb-4">{video.snippet.description}</p>
              <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200">
                Watch Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

