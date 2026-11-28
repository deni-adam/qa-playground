import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '../components/HeroSection'
import CategoryCard from '../components/CategoryCard'
import { categories } from '#/data/categories'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <HeroSection />
      <CategoryCard category={categories[0]} />
    </main>
  )
}
