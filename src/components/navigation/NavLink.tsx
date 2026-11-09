import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from '@tanstack/react-router'

type NavLinkProps = {
  to: '/books' | '/categories' | '/bestsellers'
  children: React.ReactNode
}

export default function NavLink({ to, children }: NavLinkProps) {
  return (
    <ChakraLink
      asChild
      fontFamily="body"
      fontSize="sm"
      fontWeight="500"
      color="text.primary"
      textDecoration="none"
      _hover={{
        color: 'brand.secondary',
        textDecoration: 'none',
      }}
      _currentPage={{
        color: 'brand.primary',
        fontWeight: '600',
        textDecoration: 'underline',
      }}
    >
      <RouterLink to={to} activeOptions={{ exact: true }}>
        {children}
      </RouterLink>
    </ChakraLink>
  )
}
