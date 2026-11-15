import { IconButton } from '@chakra-ui/react'
import { ShoppingCart } from 'lucide-react'

export default function CartButton() {
  return (
    <IconButton
      aria-label="Shopping cart"
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
    >
      <ShoppingCart size={20} />
    </IconButton>
  )
}
