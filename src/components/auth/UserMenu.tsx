import { IconButton } from '@chakra-ui/react'
import { User } from 'lucide-react'

export default function UserMenu() {
  return (
    <IconButton aria-label="User account" variant="ghost">
      <User size={20} />
    </IconButton>
  )
}
