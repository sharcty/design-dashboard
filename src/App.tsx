import React from 'react'
import TopBar from './components/TopBar'
import TokensPanel from './components/TokensPanel'
import AccessibilityPanel from './components/AccessibilityPanel'
import { usePalette } from './hooks/usePalette'
import ColorPicker from './components/ui/ColorPicker'
import { PalettePreview } from './components/ui/PalettePreview'
import PreviewLayout from './components/PreviewLayout'

function App() {
  const [color, setColor] = React.useState('#2563eb')
  const palette = usePalette(color)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* 1️⃣ TopBar */}
      <div className="h-12 bg-white shadow flex items-center px-4">
        <TopBar />
      </div>
      {/* 2️⃣ Main content: Sidebar + Preview */}
      <div
        className="flex min-h-screen"
        style={
          {
            '--color-primary': palette.primary,
            '--color-background': palette.background,
            '--color-surface': palette.surface,
            '--color-text-primary': palette.textPrimary,
            '--color-text-secondary': palette.textSecondary,
            '--color-accent': palette.accent,
          } as React.CSSProperties
        }
      >
        {/* Sidebar */}
        <aside className="basis-[30%] max-w-[400px] min-w-[260px] p-6">
          <ColorPicker value={color} onChange={setColor} />
        </aside>

        {/* Preview */}
        <main className="basis-[70%] flex-1 p-6 overflow-auto">
          <PreviewLayout />
        </main>
      </div>

      {/* 3️⃣ Bottom panels: Tokens + Accessibility */}
      <div className="flex gap-4 p-4">
        <div className="flex-1 bg-white p-4 border rounded">
          <PalettePreview palette={palette} />
        </div>

        <div className="flex-1 bg-white p-4 border rounded">
          <TokensPanel />
        </div>

        <div className="flex-1 bg-white p-4 border rounded">
          <AccessibilityPanel />
        </div>
      </div>
    </div>
  )
}

export default App
