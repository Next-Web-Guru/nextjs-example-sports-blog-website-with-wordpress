import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  uri,
}) {
  return (
    <section>
      <div>
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} uri={uri} />
        )}
      </div>
      <div>
        <Box p={4}>
          <Text as="h3" fontSize="large" fontWeight="bold" className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link prefetch={false} href={uri}>
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </Text>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </Box>
      </div>
    </section>
  )
}
