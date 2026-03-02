type ColorSwatchProps = {
  name: string
  value: string
}

export function ColorSwatch({ name, value }: ColorSwatchProps) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
      <div className="h-24" style={{ backgroundColor: value }} />

      <div className="p-4">
        <p className="text-sm text-gray-500 font-mono">{name}</p>
        <p className="text-sm font-semibold font-mono">{value.toUpperCase()}</p>
      </div>
    </div>
  )
}
