import Link from 'next/link'
import { Instagram, Twitter, Twitch, DiscIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-white">Hybridz Dynamics</h3>
            <p className="mb-4">Exploring the world of technology and gaming.</p>
            <div className="flex space-x-4 mb-4">
              <SocialLink href="https://www.instagram.com/hybridz_dynamics/" icon={<Instagram size={24} />} />
              <SocialLink href="https://x.com/HybridzDnamics" icon={<Twitter size={24} />} />
              <SocialLink href="https://www.twitch.tv/hybridzdynamics" icon={<Twitch size={24} />} />
              <SocialLink href="https://discord.com/channels/1318556324027437056/1318556324249731097" icon={<DiscIcon size={24} />} />
            </div>
            <p className="text-sm">Email: hybridzdynamicsofficial@zohomail.in</p>
          </div>
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/videos">Videos</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
              <FooterLink href="/video-suggestion">Video Suggestion</FooterLink>
            </ul>
          </div>
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center animate-fade-in">
          <p>&copy; {new Date().getFullYear()} Hybridz Dynamics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-125">
    {icon}
  </a>
)

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-2 inline-block">
      {children}
    </Link>
  </li>
)

export default Footer

