import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories')({
  component: BooksPage,
})

function BooksPage() {
  return <h1>Categories</h1>
}
