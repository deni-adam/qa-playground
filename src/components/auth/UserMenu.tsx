import { IconButton } from '@chakra-ui/react'
import { UserRound } from 'lucide-react'

export default function UserMenu() {
  return (
    <IconButton
      aria-label="User account"
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
      <UserRound size={20} />
    </IconButton>
  )
}
