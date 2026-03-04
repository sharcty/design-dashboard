import { useMemo } from 'react'
import { generatePalette } from '../utils/paletteUtils'
import type { Palette } from '../types/palette'

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
