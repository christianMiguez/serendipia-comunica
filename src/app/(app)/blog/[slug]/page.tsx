import Image from 'next/image'
import { notFound } from 'next/navigation'

import type { Media } from 'payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function MovieDetails({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadHMR({ config: configPromise })

  const movies = await payload.find({
    collection: 'movies',
    where: {
      slug: { equals: slug },
    },
  })

  if (movies.docs.length === 0) {
    return notFound()
  }

  const movie = movies.docs[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column: Blog content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Blog</h1>

          {/* Sample blog post */}
          <article className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">The Future of Web Development</h2>
            <p className="text-gray-600 mb-4">Published on November 15, 2023</p>
            <img
              src="/placeholder.svg?height=300&width=800"
              alt="Web Development"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="mb-4">
              As we look towards the future of web development, several exciting trends are
              emerging. From the rise of AI-assisted coding to the growing importance of web
              accessibility, the landscape is evolving rapidly.
            </p>
            <p className="mb-4">
              One of the most significant changes we're seeing is the shift towards more immersive
              and interactive web experiences. Technologies like WebGL and WebVR are pushing the
              boundaries of what's possible in a browser, allowing developers to create stunning 3D
              environments and virtual reality experiences without the need for plugins or
              additional software.
            </p>
            <p className="mb-4">
              Another area of focus is performance optimization. With users expecting near-instant
              load times and smooth interactions, developers are turning to techniques like code
              splitting, lazy loading, and serverless architectures to deliver faster, more
              responsive web applications.
            </p>
            <p className="mb-4">
              Accessibility is also becoming a top priority for many organizations. As the web
              continues to play an increasingly important role in our daily lives, ensuring that
              websites and web applications are usable by people of all abilities is not just a
              nice-to-have, but a necessity.
            </p>
            <p>
              As we move forward, it's clear that the role of the web developer will continue to
              evolve. Staying up-to-date with these trends and continuously learning new skills will
              be crucial for success in this exciting and dynamic field.
            </p>
          </article>

          {/* Additional blog posts would go here */}
        </div>

        {/* Right column: Sticky form */}
        <div className="lg:w-1/3">
          <div className="sticky top-8">
            <Card>
              <CardHeader>
                <CardTitle>Subscribe to Our Newsletter</CardTitle>
                <CardDescription>Stay updated with our latest blog posts and news.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message (optional)
                    </label>
                    <Textarea id="message" placeholder="Your message here" />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
