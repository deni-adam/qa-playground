import { Box, Text, HStack, VStack, Icon, SimpleGrid } from '@chakra-ui/react'
import { IoBookOutline, IoHeartOutline } from 'react-icons/io5'
import { BsTruck } from 'react-icons/bs'
import type { IconType } from 'react-icons'

type Benefit = {
  id: string
  icon: IconType
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    id: 'fast-delivery',
    icon: BsTruck,
    title: 'Fast delivery',
    description: 'Right to your door',
  },
  {
    id: 'read-and-grow',
    icon: IoBookOutline,
    title: 'Read & grow',
    description: 'Invest in yourself',
  },
  {
    id: 'curated-selection',
    icon: IoHeartOutline,
    title: 'Curated selection',
    description: 'Books for a better you',
  },
]

function BenefitItem({ icon, title, description }: Benefit) {
  return (
    <HStack align="center" gap={4}>
      <Icon
        as={icon}
        boxSize="32px"
        color="brand.primary"
        aria-hidden="true"
        flexShrink={0}
      />

      <VStack align="start" gap={1}>
        <Text fontWeight="semibold" fontSize="md" color="text.primary">
          {title}
        </Text>

        <Text fontSize="sm" color="text.secondary">
          {description}
        </Text>
      </VStack>
    </HStack>
  )
}

export default function BenefitsBar() {
  return (
    <Box
      as="section"
      aria-label="Shopping benefits"
      width="100%"
      bg="background.surface"
    >
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 4, md: 6 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={0}
          as="ul"
          listStyleType="none"
          m={0}
          p={0}
        >
          {benefits.map((benefit, index) => (
            <Box
              as="li"
              key={benefit.id}
              display="flex"
              justifyContent={{ base: 'flex-start', md: 'center' }}
              alignItems="center"
              py={4}
              px={4}
              borderRightWidth={{
                base: '0',
                md: index < benefits.length - 1 ? '1px' : '0',
              }}
              borderBottomWidth={{
                base: index < benefits.length - 1 ? '1px' : '0',
                md: '0',
              }}
              borderColor="border.default"
            >
              <BenefitItem {...benefit} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
