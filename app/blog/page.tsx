import Link from 'next/link'
import { fetchBlogPosts } from '../utils/api'

export default async function Blog() {
  let posts = [];
  let error = null;

  try {
    posts = await fetchBlogPosts();
  } catch (e) {
    error = e.message;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {error ? (
        <div className="bg-red-500 text-white p-4 rounded-md mb-8">
          <p>Error: {error}</p>
          <p>Please try again later or contact support if the problem persists.</p>
        </div>
      ) : posts.length === 0 ? (
        <p className="text-xl text-gray-400">No blog posts found. Check back later for new content!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.content.replace(/<[^>]*>?/gm, '')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{new Date(post.published).toLocaleDateString()}</span>
                  <Link href={post.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

