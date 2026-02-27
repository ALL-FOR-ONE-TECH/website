import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would typically come from a CMS or MDX files
const posts: Record<string, { title: string; content: string; date: string; category: string; readTime: string }> = {
  'nextjs-14-features': {
    title: 'Next.js 14: What You Need to Know',
    content: `
      <p>Next.js 14 brings exciting new features that make building web applications even more powerful and efficient.</p>
      
      <h2>Server Actions</h2>
      <p>Server Actions allow you to define server-side functions that can be called directly from your components, eliminating the need for API routes in many cases.</p>
      
      <h2>Partial Prerendering</h2>
      <p>This experimental feature combines static and dynamic rendering, giving you the best of both worlds for optimal performance.</p>
      
      <h2>Improved Performance</h2>
      <p>Next.js 14 includes significant performance improvements, with faster local development and optimized production builds.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 continues to push the boundaries of what's possible with React, making it easier than ever to build fast, scalable web applications.</p>
    `,
    date: '2024-12-15',
    category: 'Web Development',
    readTime: '5 min read',
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: `Read about ${post.title} on the AFOT blog.`,
    openGraph: {
      title: post.title,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-24">
      <article className="section-padding">
        <div className="container-custom max-w-3xl">
          <Link href="/blog" className="text-neon-purple hover:underline mb-8 inline-block">
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-sm bg-neon-purple/20 text-neon-purple rounded">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              {post.title}
            </h1>
            <time className="text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          <div
            className="prose prose-invert prose-purple max-w-none
              prose-headings:font-display prose-headings:text-white
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-neon-purple prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-code:text-neon-purple prose-code:bg-dark-deeper prose-code:px-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-dark-border">
            <h3 className="text-xl font-semibold text-white mb-4">Share this article</h3>
            <div className="flex gap-4">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://afot.in/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
