import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '../components/HeroSection'
import BenefitsBar from '../components/BenefitsBar'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <HeroSection />
      <BenefitsBar />
    </main>
  )
}
