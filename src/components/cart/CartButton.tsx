import { IconButton } from '@chakra-ui/react'
import { ShoppingCart } from 'lucide-react'

export default function CartButton() {
  return (
    <IconButton aria-label="Shopping cart" variant="ghost">
      <ShoppingCart size={20} />
    </IconButton>
  )
}
