import { Input, InputGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

 return (
    <InputGroup startElement={<Search size={18} />}>
      <Input
        type="search"
        aria-label="Search books"
        placeholder="Search books..."
        size="md"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </InputGroup>
 )
}

