'use client'

import { useState } from 'react'

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xzzzwpdd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowPopup(true)
        setFormData({ name: '', email: '', subject: '', message: '' }) // Reset form
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again later.')
    }

    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-xl mb-6">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={6} 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full text-center">
              <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
              <p className="mb-4">Thank you for reaching out. We will get back to you soon.</p>
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:hybridzdynamicsofficial@zohomail.in" className="text-blue-400 hover:underline">hybridzdynamicsofficial@zohomail.in</a></li>
            <li>Twitter: <a href="https://twitter.com/HybridzDnamics" target="_blank" className="text-blue-400 hover:underline">@HybridzDnamics</a></li>
            <li>Instagram: <a href="https://instagram.com/hybridz_dynamics" target="_blank" className="text-blue-400 hover:underline">@hybridz_dynamics</a></li>
            <li>Discord: <a href="https://discord.gg/5axGBHFyed" target="_blank" className="text-blue-400 hover:underline">Join our server</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
