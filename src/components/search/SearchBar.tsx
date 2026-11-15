import { Input, InputGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <InputGroup startElement={<Search size={18} />} color="text.secondary">
      <Input
        type="search"
        aria-label="Search books"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        height="44px"
        bg="background.surface"
        color="text.primary"
        fontFamily="body"
        fontSize="sm"
        borderWidth="1px"
        borderColor="border.default"
        borderRadius="md"
        _placeholder={{
          color: 'text.secondary',
        }}
        _hover={{
          borderColor: 'border.interactive',
        }}
        _focusVisible={{
          borderColor: 'focus.ring',
          boxShadow: '0 0 0 2px var(--chakra-colors-focus-ring)',
        }}
      />
    </InputGroup>
  )
}
