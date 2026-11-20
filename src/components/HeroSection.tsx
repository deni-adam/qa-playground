import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'

const books = [
  {
    title: 'Atomic Habits',
    src: '/images/books/atomic-habits.jpg',
    color: 'hero.archBlue',
    height: '83%',
    curve: '35.5%',
    offset: '3%',
    coverWidth: '69%',
    coverBottom: '5%',
  },
  {
    title: 'The 7 Habits of Highly Effective People',
    src: '/images/books/the-7-habits-of-highly-effective-people.jpg',
    color: 'hero.archSky',
    height: '100%',
    curve: '31.5%',
    offset: '0%',
    coverWidth: '68%',
    coverBottom: '6%',
  },
  {
    title: 'The Art of Thinking Clearly',
    src: '/images/books/the-art-of-thinking-clearly.jpg',
    color: 'hero.archLavender',
    height: '76.5%',
    curve: '38.5%',
    offset: '3%',
    coverWidth: '66%',
    coverBottom: '5.5%',
  },
]

export default function HeroSection() {
  return (
    <Box
      as="section"
      aria-labelledby="hero-heading"
      position="relative"
      overflow="hidden"
      bgGradient="to-br"
      gradientFrom="background.page"
      gradientTo="background.subtle"
    >
      <Box
        aria-hidden="true"
        position="absolute"
        inset="0"
        pointerEvents="none"
      >
        <Box
          aria-hidden="true"
          position="absolute"
          inset="0"
          pointerEvents="none"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w={{ base: '72%', lg: '48%' }}
            h={{ base: '19%', lg: '27%' }}
            bgGradient="to-tr"
            gradientFrom="transparent"
            gradientTo="hero.archBlue"
            opacity={0.65}
            css={{
              maskImage: 'linear-gradient(105deg, transparent 5%, black 80%)',
              clipPath: `polygon(
      0 0, 100% 0, 91% 29%, 80% 52%, 67% 72%,
      53% 85%, 38% 93%, 22% 96%, 0 92%
    )`,
              '@supports (clip-path: shape(from 0 0, line to 100% 100%, close))':
                {
                  clipPath: `shape(
        from 0 0,
        line to 100% 0,
        curve to 0 92% with 81% 74% / 43% 110%,
        close
      )`,
                },
            }}
          />

          <Box
            position="absolute"
            bottom="-36%"
            left="-16%"
            w="51%"
            h="48%"
            borderRadius="50%"
            transform="rotate(9deg)"
            bgGradient="to-br"
            gradientFrom="hero.archBlue"
            gradientTo="background.subtle"
            opacity={0.85}
          />

          <Box
            position="absolute"
            bottom="0"
            right="0"
            w={{ base: '62%', lg: '34%' }}
            h={{ base: '12%', lg: '23%' }}
            bgGradient="to-tr"
            gradientFrom="background.subtle"
            gradientVia="hero.archBlue"
            gradientTo="hero.archSky"
            opacity={0.7}
            css={{
              clipPath: `polygon(
        0 100%, 14% 83%, 28% 69%, 42% 58%, 54% 52%, 60% 50%,
        68% 47%, 76% 39%, 84% 25%, 92% 12%, 100% 0, 100% 100%
      )`,
              '@supports (clip-path: shape(from 0 0, line to 100% 100%, close))':
                {
                  clipPath: `shape(
          from 0 100%,
          curve to 60% 50% with 21% 72% / 43% 55%,
          curve to 100% 0 with 77% 45% / 88% 17%,
          line to 100% 100%,
          close
        )`,
                },
            }}
          />
        </Box>
      </Box>

      <Grid
        position="relative"
        maxW="1760px"
        mx="auto"
        minH={{ lg: 'clamp(35rem, 44.8vw, 49.125rem)' }}
        ps="clamp(1.25rem, 4.45vw, 4.875rem)"
        pe={{
          base: 'clamp(1.25rem, 4.45vw, 4.875rem)',
          lg: 'min(3.5vw, 3.875rem)',
        }}
        pt={{ base: '3rem', lg: 'clamp(3.75rem, 6.1vw, 6.625rem)' }}
        pb={{ base: '3.5rem', lg: 'clamp(5rem, 9.4vw, 10.25rem)' }}
        templateColumns={{
          base: 'minmax(0, 1fr)',
          lg: 'minmax(0, 0.6fr) minmax(0, 1fr)',
        }}
        gap={{ base: '2.5rem', lg: 'clamp(1.5rem, 1.85vw, 2rem)' }}
        alignItems="center"
      >
        <VStack
          align="start"
          gap={{ base: 5, md: 6, xl: 8 }}
          transform={{ lg: 'translateY(min(0.8vw, 0.875rem))' }}
        >
          <Text
            color="accent.500"
            fontSize={{ base: 'xs', md: 'sm', xl: 'lg' }}
            fontWeight="700"
            letterSpacing="0.18em"
          >
            CURATED BOOKS FOR GROWTH
          </Text>

          <Heading
            as="h1"
            id="hero-heading"
            color="brand.primary"
            fontFamily="heading"
            fontSize={{
              base: 'clamp(2rem, 10vw, 4.25rem)',
              lg: 'clamp(2.65rem, 4.7vw, 5.15rem)',
            }}
            fontWeight="800"
            lineHeight="1.02"
            letterSpacing="-0.022em"
          >
            Your next{' '}
            <Box as="span" display="block" color="accent.500">
              favourite book
            </Box>{' '}
            <Box as="span" display="block">
              is here.
            </Box>
          </Heading>

          <Text
            maxW="38rem"
            fontSize={{ base: 'md', lg: 'lg', '2xl': '2xl' }}
            lineHeight="1.55"
            color="text.secondary"
          >
            Discover thoughtfully selected books to inspire personal growth, new
            perspectives, and better habits.
          </Text>

          <Button
            asChild
            h="clamp(3.25rem, 4.35vw, 4.75rem)"
            px="clamp(1.5rem, 2.65vw, 2.9375rem)"
            gap="0.85rem"
            borderRadius={{ base: 'lg', xl: 'xl' }}
            bg="brand.primary"
            color="background.surface"
            fontSize={{ base: 'md', lg: 'lg', '2xl': '2xl' }}
            fontWeight="700"
            _hover={{ bg: 'brand.950' }}
            focusVisibleRing="outside"
            focusRingColor="focus.ring"
            focusRingWidth="3px"
            focusRingOffset="4px"
          >
            <Link to="/books">
              Explore Books
              <Box as="span" aria-hidden="true" fontSize="1.2em" lineHeight="1">
                →
              </Box>
            </Link>
          </Button>
        </VStack>

        <Grid
          w="100%"
          maxW={{ base: '42rem', lg: 'none' }}
          mx="auto"
          aspectRatio={1.95}
          templateColumns="minmax(0, 1fr) minmax(0, 1.07fr) minmax(0, 1fr)"
          templateRows="minmax(0, 1fr)"
          gap={{ base: '3%', lg: '3.5%' }}
          alignItems="end"
        >
          {books.map((book) => (
            <Box
              key={book.title}
              position="relative"
              bottom={book.offset}
              h={book.height}
              bg={book.color}
              borderTopRadius={`50% ${book.curve}`}
              borderBottomRadius="8px"
            >
              <Image
                src={book.src}
                alt={book.title}
                position="absolute"
                left="50%"
                bottom={book.coverBottom}
                transform="translateX(-50%)"
                maxW={book.coverWidth}
                maxH="80%"
                w="auto"
                h="auto"
                borderRadius="sm"
                boxShadow="xl"
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
