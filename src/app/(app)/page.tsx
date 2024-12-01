import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import MovieCards from './MovieCards'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const movies = await payload.find({
    collection: 'movies',
    sort: '-votes',
  })

  return (
    <>
      <h1>This is a example blog post</h1>
    </>
  )
}

export default Page
