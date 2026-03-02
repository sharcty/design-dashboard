import { adjustLightness, getComplementary } from './colorUtils'

export function generatePalette(primary: string) {
  return {
    background: adjustLightness(primary, 45),
    surface: adjustLightness(primary, 35),
    textPrimary: adjustLightness(primary, -60),
    textSecondary: adjustLightness(primary, -40),
    accent: getComplementary(primary),
  }
}
