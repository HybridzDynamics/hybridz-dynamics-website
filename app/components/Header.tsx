'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'} px-4 py-4 flex justify-between items-center`}>
        <Link href="/" className="text-2xl font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-blue-400">Hybridz Dynamics</Link>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/videos">Videos</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/video-suggestion">Video Suggestion</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <button className="md:hidden transition-all duration-300 ease-in-out transform hover:scale-110" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm absolute top-full left-0 right-0 animate-fade-in">
          <nav className="flex flex-col items-center py-4">
            <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="/videos" onClick={() => setIsMenuOpen(false)}>Videos</NavLink>
            <NavLink href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
            <NavLink href="/community" onClick={() => setIsMenuOpen(false)}>Community</NavLink>
            <NavLink href="/video-suggestion" onClick={() => setIsMenuOpen(false)}>Video Suggestion</NavLink>
            <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            <NavLink href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link href={href} className="text-white hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105" onClick={onClick}>
    {children}
  </Link>
)

export default Header

