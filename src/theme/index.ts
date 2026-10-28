
import {
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#EDF3FC' },
          100: { value: '#C8D9F2' },
          300: { value: '#8EA8D8' },
          500: { value: '#4668A9' },
          900: { value: '#202C83' },
          950: { value: '#17246F' },
        },
        navy: {
          600: { value: '#536482' },
          900: { value: '#202E4A' },
        },
        pastel: {
          lavender: { value: '#DCD7F5' },
          mint: { value: '#DDEFE9' },
          peach: { value: '#F8E7DA' },
        },
      },
      fonts: {
        heading: { value: "'Plus Jakarta Sans', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
fontSizes: {
  xs: { value: '12px' },
  sm: { value: '14px' },
  md: { value: '16px' },
  lg: { value: '18px' },
  xl: { value: '20px' },
  '2xl': { value: '24px' },
  '3xl': { value: '32px' },
  '4xl': { value: '40px' },
  '5xl': { value: '56px' },
},
radii: {
  sm: { value: '6px' },
  md: { value: '10px' },
  lg: { value: '16px' },
  xl: { value: '24px' },
},
    },
  },
  globalCss: {
    body: {
      bg: '#FAFBFF',
      color: '#202E4A',
      fontFamily: 'body',
    },
  },
})

export const system = createSystem(defaultConfig, config)
