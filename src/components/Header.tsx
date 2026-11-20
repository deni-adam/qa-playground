import { Box, Flex, HStack, Text, IconButton } from '@chakra-ui/react'
import { Link as RouterLink } from '@tanstack/react-router'
import SearchBar from './search/SearchBar'
import UserMenu from './auth/UserMenu'
import CartButton from './cart/CartButton'
import NavLink from './navigation/NavLink'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Box
      as="header"
      width="100%"
      bg="background.surface"
      color="text.primary"
      borderBottomWidth="1px"
      borderColor="border.default"
    >
      <Flex
        maxWidth="1200px"
        marginX="auto"
        paddingX={{ base: '16px', md: '24px', lg: '32px' }}
        height={{ base: '64px', lg: '72px' }}
        align="center"
        justify="space-between"
      >
        <RouterLink to="/">
          <Text
            fontFamily="heading"
            fontSize="2xl"
            fontWeight="700"
            color="brand.primary"
            letterSpacing="-0.015em"
          >
            Bookly
          </Text>
        </RouterLink>

        <Box
          as="nav"
          display={{ base: 'none', lg: 'block' }}
          aria-label="Main navigation"
        >
          <HStack gap={6}>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/bestsellers">Bestsellers</NavLink>
          </HStack>
        </Box>

        <Flex align="center" gap={4} display={{ base: 'none', lg: 'flex' }}>
          <Box width="250px">
            <SearchBar />
          </Box>

          <UserMenu />
          <CartButton />
        </Flex>

        <Flex align="center" gap={2} display={{ base: 'flex', lg: 'none' }}>
          <CartButton />

          <IconButton
            variant="ghost"
            color="brand.primary"
            size="md"
            borderRadius="md"
            _hover={{
              bg: 'background.subtle',
              color: 'brand.secondary',
            }}
            _focusVisible={{
              outlineColor: 'focus.ring',
            }}
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
        <Box
          maxWidth="1200px"
          marginX="auto"
          paddingX={{ base: '16px', md: '24px' }}
          paddingBottom={4}
        >
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
        <Box
          maxWidth="1200px"
          marginX="auto"
          paddingX={{ base: '16px', md: '24px' }}
          paddingY={4}
        >
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
