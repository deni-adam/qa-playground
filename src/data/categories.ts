export type CategorySlug =
  | 'personal-growth'
  | 'mindfulness'
  | 'productivity'
  | 'relationships'

export type Category = {
  id: string
  name: string
  slug: CategorySlug
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Personal Growth',
    slug: 'personal-growth',
  },
  {
    id: '2',
    name: 'Mindfulness',
    slug: 'mindfulness',
  },
  {
    id: '3',
    name: 'Productivity',
    slug: 'productivity',
  },
  {
    id: '4',
    name: 'Relationships',
    slug: 'relationships',
  },
]