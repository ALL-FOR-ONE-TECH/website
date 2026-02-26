import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tutorials, and updates from the AFOT team on web development, technology trends, and digital innovation.',
  openGraph: {
    title: 'Blog | AFOT',
    description: 'Tech insights and tutorials from the AFOT team.',
  },
}

const posts = [
  {
    slug: 'nextjs-14-features',
    title: 'Next.js 14: What You Need to Know',
    excerpt: 'Explore the latest features in Next.js 14 including Server Actions, Partial Prerendering, and more.',
    date: '2024-12-15',
    category: 'Web Development',
    readTime: '5 min read',
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into React Server Components and how they change the way we build React applications.',
    date: '2024-12-10',
    category: 'React',
    readTime: '8 min read',
  },
  {
    slug: 'ai-web-development',
    title: 'AI in Web Development: 2024 Trends',
    excerpt: 'How artificial intelligence is transforming web development workflows and user experiences.',
    date: '2024-12-05',
    category: 'AI',
    readTime: '6 min read',
  },
  {
    slug: 'performance-optimization',
    title: 'Core Web Vitals Optimization Guide',
    excerpt: 'Practical tips to improve your website performance and achieve better Core Web Vitals scores.',
    date: '2024-11-28',
    category: 'Performance',
    readTime: '10 min read',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2024',
    excerpt: 'Level up your TypeScript skills with these modern best practices and patterns.',
    date: '2024-11-20',
    category: 'TypeScript',
    readTime: '7 min read',
  },
  {
    slug: 'mobile-app-trends',
    title: 'Mobile App Development Trends',
    excerpt: 'The latest trends shaping mobile app development including cross-platform solutions.',
    date: '2024-11-15',
    category: 'Mobile',
    readTime: '5 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Blog"
            title="Insights & Updates"
            description="Stay updated with the latest in technology, development tips, and industry insights."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <GlassCard className="h-full group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-xs bg-neon-purple/20 text-neon-purple rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-purple transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <time className="text-gray-500 text-xs">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
