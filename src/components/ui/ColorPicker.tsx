import { Palette } from 'lucide-react'
import * as React from 'react'

export function ColorPicker() {
  const [color, setColor] = React.useState('#2563eb')
  const [inputValue, setInputValue] = React.useState(color)
  const [isValid, setIsValid] = React.useState(true)

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="w-5 h-5 text-gray-700" />
        <h2 className="font-semibold text-gray-900">Color Generator</h2>
      </div>

      <div className="space-y-4">
        {/* Color input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Base Color
          </label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input
                type="color"
                aria-label="Select base color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value)
                  setInputValue(e.target.value)
                  setIsValid(true)
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div
                className="h-12 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-gray-400 transition-colors"
                style={{ backgroundColor: color }}
              />
            </div>
            <input
              type="text"
              value={inputValue.toUpperCase()}
              onChange={(e) => {
                const value = e.target.value
                setInputValue(value)
                const isHex = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(value)
                setIsValid(isHex)
              }}
              onBlur={() => {
                if (isValid) {
                  setColor(inputValue)
                  setInputValue(inputValue)
                }
              }}
              className={`w-28 px-3 py-2 border rounded-lg font-mono text-sm transition-all duration-200 ease-in-out
  ${
    isValid
      ? 'border-gray-300 focus:ring-2 focus:ring-blue-500'
      : 'border-red-500 focus:ring-2 focus:ring-red-500'
  }
`}
              placeholder="#000000"
            />
          </div>
          {!isValid && (
            <p
              className={`text-xs mt-1 transition-all duration-200 ${
                isValid
                  ? 'opacity-0 translate-y-[-4px]'
                  : 'opacity-100 translate-y-0 text-red-500'
              }`}
            >
              Please enter a valid HEX color
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
