import { Input } from '@chakra-ui/react'
import { useState } from 'react'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Input
      type="search"
      placeholder="Search books..."
      size="md"
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  )
}

