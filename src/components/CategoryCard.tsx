import { Box, Text, Icon, VStack } from '@chakra-ui/react'
import type { Category, CategorySlug } from '../data/categories'
import {
  IoLeafOutline,
  IoFlowerOutline,
  IoTimeOutline,
  IoHeartOutline,
} from 'react-icons/io5'
import type { IconType } from 'react-icons'

type CategoryCardProps = {
  category: Category
}

type CategoryStyle = {
  icon: IconType
  bg: string
}

const categoryStyles: Record<CategorySlug, CategoryStyle> = {
  'personal-growth': {
    icon: IoLeafOutline,
    bg: 'pastel.mint',
  },
  mindfulness: {
    icon: IoFlowerOutline,
    bg: 'pastel.lavender',
  },
  productivity: {
    icon: IoTimeOutline,
    bg: 'brand.50',
  },
  relationships: {
    icon: IoHeartOutline,
    bg: 'pastel.peach',
  },
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const style = categoryStyles[category.slug]

  return (
    <Box bg={style.bg} borderRadius="xl" p={6} textAlign="center">
      <VStack gap={3}>
        <Icon
          as={style.icon}
          boxSize="32px"
          color="brand.primary"
          aria-hidden="true"
        />

        <Text fontWeight="semibold" color="text.primary">
          {category.name}
        </Text>
      </VStack>
    </Box>
  )
}
