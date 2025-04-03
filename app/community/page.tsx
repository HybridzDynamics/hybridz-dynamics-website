import Link from 'next/link'
import { DiscIcon } from 'lucide-react'

export default function Community() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">Join Our Community</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 animate-slide-in">Discord Server</h2>
        <p className="text-xl mb-6 animate-fade-in">Join our Discord server to connect with other Hybridz Dynamics fans, discuss our latest videos, and get exclusive updates!</p>
        <Link href="https://discord.com/channels/1318556324027437056/1318556324249731097" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow-indigo animate-bounce-in">
          <DiscIcon className="mr-2" />
          Join Our Discord
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 animate-slide-in">Community Events</h2>
        <p className="text-xl mb-6 animate-fade-in">Stay tuned for upcoming community events, live streams, and Q&A sessions with the Hybridz Dynamics team!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow-blue animate-fade-in">
            <h3 className="text-2xl font-semibold mb-2">Monthly Game Night</h3>
            <p>Join us for our monthly community game night where we play and discuss the latest games!</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow-green animate-fade-in">
            <h3 className="text-2xl font-semibold mb-2">Tech Talk Tuesdays</h3>
            <p>Every Tuesday, we host a live discussion about the latest in technology and gaming.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 animate-slide-in">Get Involved</h2>
        <p className="text-xl mb-6 animate-fade-in">There are many ways to get involved with the Hybridz Dynamics community. Here are a few:</p>
        <ul className="list-disc list-inside space-y-2 animate-fade-in">
          <li className="transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:text-blue-400">Participate in discussions on our Discord server</li>
          <li className="transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:text-blue-400">Comment on our YouTube videos and share your thoughts</li>
          <li className="transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:text-blue-400">Follow us on social media for the latest updates and behind-the-scenes content</li>
          <li className="transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:text-blue-400">Attend our live streams and community events</li>
        </ul>
      </section>
    </div>
  )
}

