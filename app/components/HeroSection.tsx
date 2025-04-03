import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute w-auto min-w-full min-h-full max-w-none"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-HVVCSnp7q9x9a5r8tgUqLFgkL1qCFF.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
          Welcome to Hybridz Dynamics
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-md">
          Exploring the frontiers of technology and gaming
        </p>
        <Link
          href="/videos"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore Our Videos
        </Link>
      </div>
    </div>
  )
}

