import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bestsellers')({
  component: BooksPage,
})

function BooksPage() {
  return <h1>Bestsellers</h1>
}
