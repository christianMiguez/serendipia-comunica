import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  // const movies = await payload.find({
  //   collection: 'movies',
  //   sort: '-votes',
  // })

  return (
    <>
      <main className="mt-5">
        <h1>This is a example blog post</h1>
      </main>
    </>
  )
}

export default Page
