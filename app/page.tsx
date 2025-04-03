import Image from 'next/image'
import Link from 'next/link'
import { fetchYouTubeVideos, fetchYouTubeChannelStats } from './utils/api'
import HeroSection from './components/HeroSection'

export default async function Home() {
  const videos = await fetchYouTubeVideos(3)
  const stats = await fetchYouTubeChannelStats()

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video: any) => (
              <div key={video.id.videoId} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <Image
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  width={320}
                  height={180}
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{video.snippet.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{video.snippet.description}</p>
                  <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-200">
                    Watch Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Channel Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Subscribers</h3>
              <p className="text-4xl font-bold text-red-500">{parseInt(stats.subscriberCount).toLocaleString()}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Views</h3>
              <p className="text-4xl font-bold text-blue-500">{parseInt(stats.viewCount).toLocaleString()}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Videos</h3>
              <p className="text-4xl font-bold text-green-500">{parseInt(stats.videoCount).toLocaleString()}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-xl mb-6">Connect with fellow enthusiasts and stay updated on our latest content.</p>
            <Link href="/community" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105">
              Join Now
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

