import { Box, Flex, HStack, Text, IconButton } from '@chakra-ui/react'
import type { SystemStyleObject } from '@chakra-ui/react'
import { Link as RouterLink } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { IoBook } from 'react-icons/io5'
import { useState } from 'react'
import SearchBar from './search/SearchBar'
import UserMenu from './auth/UserMenu'
import CartButton from './cart/CartButton'
import NavLink from './navigation/NavLink'

const headerLayout = {
  maxWidth: '1760px',
  marginX: 'auto',
  paddingX: { base: 4, md: 6, lg: 'clamp(1.5rem, 5.5vw, 5rem)' },
} as const

const searchStyles = {
  '& input': {
    height: '2.375rem',
    bg: 'background.subtle',
    borderRadius: 'lg',
    borderColor: 'transparent',
    fontSize: 'sm',
    _placeholder: { color: 'text.secondary' },
    _focusVisible: { outline: '2px solid', outlineColor: 'focus.ring' },
  },
} satisfies SystemStyleObject

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Box
      as="header"
      width="100%"
      bg="background.surface"
      color="text.primary"
      borderBottomWidth="1px"
      borderColor="background.subtle"
    >
      <Flex
        {...headerLayout}
        height={{ base: '4rem', lg: 'clamp(4.25rem, 5.55vw, 6.875rem)' }}
        align="center"
        gap={{ base: 3, lg: 'clamp(1.5rem, 5.25vw, 4.25rem)' }}
      >
        <HStack asChild gap={2} flexShrink={0} color="brand.primary">
          <RouterLink to="/">
            <Box
              as="span"
              position="relative"
              lineHeight="0"
              _after={{
                content: '""',
                position: 'absolute',
                top: '23%',
                bottom: '18%',
                left: '50%',
                width: '1px',
                bg: 'background.surface',
                transform: 'translateX(-50%)',
              }}
            >
              <IoBook
                size={34}
                fill="currentColor"
                aria-hidden="true"
              />
            </Box>

            <Text
              as="span"
              fontFamily="heading"
              fontSize={{ base: '2xl', lg: 'clamp(1.75rem, 2.25vw, 2.25rem)' }}
              fontWeight="800"
              letterSpacing="-0.035em"
            >
              Bookly
            </Text>
          </RouterLink>
        </HStack>

        <Box
          as="nav"
          display={{ base: 'none', lg: 'block' }}
          flexShrink={0}
          aria-label="Main navigation"
        >
          <HStack
            gap="clamp(1rem, 2.15vw, 2.375rem)"
            css={{
              '& a': {
                fontSize: { lg: 'xs', xl: 'sm' },
                whiteSpace: 'nowrap',
              },
            }}
          >
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/bestsellers">Bestsellers</NavLink>
          </HStack>
        </Box>

        <Flex
          display={{ base: 'none', lg: 'flex' }}
          align="center"
          justify="flex-end"
          marginLeft="auto"
          minWidth="0"
          gap={4}
        >
          <Box
            width="clamp(10rem, 23.5vw, 23rem)"
            minWidth="0"
            css={searchStyles}
          >
            <SearchBar />
          </Box>

          <HStack gap={2} flexShrink={0}>
            <UserMenu />
            <CartButton />
          </HStack>
        </Flex>

        <Flex
          display={{ base: 'flex', lg: 'none' }}
          align="center"
          marginLeft="auto"
          gap={2}
        >
          <CartButton />

          <IconButton
            variant="ghost"
            color="brand.primary"
            size="md"
            borderRadius="full"
            _hover={{
              bg: 'background.subtle',
              color: 'brand.secondary',
            }}
            _focusVisible={{ outlineColor: 'focus.ring' }}
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </IconButton>
        </Flex>
      </Flex>

      <Box display={{ base: 'block', lg: 'none' }}>
        <Box {...headerLayout} paddingBottom={4} css={searchStyles}>
          <SearchBar />
        </Box>
      </Box>

      <Box
        as="nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        display={{ base: isMenuOpen ? 'block' : 'none', lg: 'none' }}
        bg="background.surface"
        borderTopWidth="1px"
        borderColor="border.default"
      >
        <Box {...headerLayout} paddingY={4}>
          <Flex direction="column" align="flex-start" gap={4}>
            <NavLink to="/books" onClick={() => setIsMenuOpen(false)}>
              Books
            </NavLink>
            <NavLink to="/categories" onClick={() => setIsMenuOpen(false)}>
              Categories
            </NavLink>
            <NavLink to="/bestsellers" onClick={() => setIsMenuOpen(false)}>
              Bestsellers
            </NavLink>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
