export default function FAQ() {
  const faqs = [
    {
      question: "What kind of content does Hybridz Dynamics create?",
      answer: "Hybridz Dynamics creates content focused on technology and gaming. This includes tech reviews, gaming tutorials, industry news, DIY tech projects, and interviews with experts in the field."
    },
    {
      question: "How often do you upload new videos?",
      answer: "We aim to upload new videos weekly. However, the frequency may vary depending on the complexity of the content and current events in the tech and gaming world."
    },
    {
      question: "Can I suggest ideas for future videos?",
      answer: "We love hearing from our community. You can suggest video ideas through our 'Community' page or by leaving comments on our videos."
    },
    {
      question: "Do you do product reviews?",
      answer: "Yes, we regularly review the latest tech products, including smartphones, gaming hardware, and other gadgets."
    },
    {
      question: "How can I support Hybridz Dynamics?",
      answer: "The best way to support us is by subscribing to our YouTube channel, liking and sharing our videos, and engaging with our content. You can also join our Discord community and follow us on social media."
    },
    {
      question: "Do you accept sponsorships or collaborations?",
      answer: "We're open to sponsorships and collaborations that align with our channel's focus and values. Please contact us through our 'Contact' page for business inquiries."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-xl">
          Don't see your question here? Feel free to reach out to us through our <a href="/contact" className="text-blue-400 hover:underline">Contact page</a> or join our <a href="/community" className="text-blue-400 hover:underline">Discord community</a> for more support.
        </p>
      </div>
    </div>
  )
}

