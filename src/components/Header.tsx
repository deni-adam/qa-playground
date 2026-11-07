import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'
import SearchBar from './search/SearchBar'
import UserMenu from './auth/UserMenu'
import CartButton from './cart/CartButton'

export default function Header() {
  return (
    <Box as="header" width="100%" borderBottomWidth="1px">
      <Flex
        maxWidth="1200px"
        marginX="auto"
        padding="16px"
        align="center"
        justify="space-between"
      >
        <Link to="/">
          <Text fontSize="2xl" fontWeight="bold">
            Bookly
          </Text>
        </Link>

        <Box as="nav" aria-label="Main navigation">
          <HStack gap={6}>
            <Link
              to="/books"
              activeProps={{
                style: {
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                },
              }}
            >
              <Text as="span">Books</Text>
            </Link>
            <Link
              to="/categories"
              activeProps={{
                style: {
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                },
              }}
            >
              <Text as="span">Categories</Text>
            </Link>
            <Link
              to="/bestsellers"
              activeProps={{
                style: {
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                },
              }}
            >
              <Text as="span">Bestsellers</Text>
            </Link>
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
