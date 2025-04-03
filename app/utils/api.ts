const YOUTUBE_API_KEY = 'AIzaSyB1vgWJ2bwSxOdt0P4cvGF9--sK6yyH8Xg';
const YOUTUBE_CHANNEL_ID = 'UC9O6i4FVwzYujsszSrWdP1w';
const BLOGGER_API_KEY = 'AIzaSyC9xvQz6Ch7WHYmvaxfSHYzh3ScwKeVUb4';
const BLOGGER_USER_ID = '8899072340415102108';

export async function fetchYouTubeVideos(maxResults = 10) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`
  );
  const data = await response.json();
  return data.items;
}

export async function fetchYouTubeChannelStats() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data.items[0].statistics;
}

export async function fetchBlogPosts(maxResults = 10) {
  const BLOGGER_BLOG_ID = '8899072340415102108';

  const response = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_BLOG_ID}/posts?key=${BLOGGER_API_KEY}&maxResults=${maxResults}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
  }

  const data = await response.json();
  return data.items || [];
}

