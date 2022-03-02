import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  uri,
}) {
  return (
    <div>
      <div>
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} uri={uri} />
        )}
      </div>
      <Box p={4}>
        <Text as="h3" fontSize="large" fontWeight="bold" className="text-3xl mb-3 leading-snug">
          <Link href={uri}>
            <a
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></a>
          </Link>
        </Text>
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
        {/* <div
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        /> */}
        <Avatar author={author} />
      </Box>
    </div>
  )
}
