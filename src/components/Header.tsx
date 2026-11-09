import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from '@tanstack/react-router'
import SearchBar from './search/SearchBar'
import UserMenu from './auth/UserMenu'
import CartButton from './cart/CartButton'
import NavLink from './navigation/NavLink'

export default function Header() {
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
        paddingX="32px"
        height="72px"
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

        <Box as="nav" aria-label="Main navigation">
          <HStack gap={6}>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/bestsellers">Bestsellers</NavLink>
          </HStack>
        </Box>

        <Flex align="center" gap={4}>
          <Box width="250px">
            <SearchBar />
          </Box>

          <UserMenu />
          <CartButton />
        </Flex>
      </Flex>
    </Box>
  )
}
