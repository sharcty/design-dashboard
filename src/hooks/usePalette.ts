import { useMemo } from 'react'
import { generatePalette } from '../utils/paletteUtils'

export type Palette = {
  primary: string
  background: string
  surface: string
  textPrimary: string
  textSecondary: string
  accent: string
}

export function usePalette(primaryColor: string): Palette {
  const palette = useMemo(() => {
    const generated = generatePalette(primaryColor)

    return {
      primary: primaryColor,
      ...generated,
    }
  }, [primaryColor])

  return palette
}
