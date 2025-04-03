import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-1K3zv1lGK4Bd8lKKX1huRpdqigHLFJ.png"
            alt="Hybridz Dynamics Logo"
            width={300}
            height={300}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl font-bold mb-8">About Hybridz Dynamics</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-xl mb-6">
              Hybridz Dynamics is a YouTube channel dedicated to exploring the fascinating world of technology and gaming. Our mission is to bring you the latest insights, reviews, and tutorials on cutting-edge tech and exciting games.
            </p>
            <p className="text-xl mb-6">
              Founded with a passion for innovation and digital experiences, we've grown into a vibrant community of tech enthusiasts and gamers who share our excitement for the latest developments in the digital world.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300">
              To create engaging, informative, and entertaining content that helps our audience stay ahead in the rapidly evolving world of technology and gaming.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Tech Reviews</h3>
              <p className="text-gray-300">In-depth analysis and reviews of the latest technology products and innovations.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Gaming Content</h3>
              <p className="text-gray-300">Gameplay tutorials, walkthroughs, and reviews of the newest and most exciting games.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Industry News</h3>
              <p className="text-gray-300">Latest updates and analysis of developments in the tech and gaming industries.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <p className="text-xl mb-6">
              Be part of our growing community of tech enthusiasts and gamers. Connect with like-minded individuals and stay updated on our latest content.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://discord.com/channels/1318556324027437056/1318556324249731097"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Join Discord
              </a>
              <a
                href="https://www.youtube.com/channel/UC9O6i4FVwzYujsszSrWdP1w"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

