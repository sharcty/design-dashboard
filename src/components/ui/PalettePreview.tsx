import { ColorSwatch } from './ColorSwatch'

type Palette = {
  background: string
  surface: string
  textPrimary: string
  textSecondary: string
  accent: string
}

type PalettePreviewProps = {
  palette: Palette
}

export function PalettePreview({ palette }: PalettePreviewProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-6">Generated Palette</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(palette).map(([name, value]) => (
          <ColorSwatch key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  )
}
