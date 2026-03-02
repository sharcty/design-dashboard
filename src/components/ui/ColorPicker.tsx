import { Palette } from 'lucide-react'
import * as React from 'react'

type ColorPickerProps = {
  value: string
  onChange: (color: string) => void
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [inputValue, setInputValue] = React.useState(value)
  const [isValid, setIsValid] = React.useState(true)

  React.useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="w-5 h-5 text-gray-700" />
        <h2 className="font-semibold text-gray-900">Color Generator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Base Color
          </label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input
                type="color"
                value={value}
                aria-label="Select base color"
                onChange={(e) => {
                  onChange(e.target.value)
                  setInputValue(e.target.value)
                  setIsValid(true)
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {/*TODO: decide if I want to "validate" color picker as well*/}
              <div
                className={`h-12 rounded-lg border-2 cursor-pointer transition-colors duration-200 ease-in-out
                  ${isValid ? 'border-gray-300 hover:border-gray-400' : 'border-red-500'}
                `}
                style={{ backgroundColor: value }}
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
                if (isHex) {
                  onChange(value.startsWith('#') ? value : `#${value}`)
                }
              }}
              onBlur={() => {
                if (isValid) {
                  onChange(
                    inputValue.startsWith('#') ? inputValue : `#${inputValue}`,
                  )
                  setInputValue(inputValue.toUpperCase())
                }
              }}
              className={`w-28 px-3 py-2 border rounded-lg font-mono text-sm transition-all duration-200 ease-in-out
                ${isValid ? 'border-gray-300 focus:ring-2 focus:ring-blue-500' : 'border-red-500 focus:ring-2 focus:ring-red-500'}
              `}
              placeholder="#000000"
            />
          </div>
          <div className="h-5 relative">
            <p
              className={`absolute left-0 text-xs text-red-500 transition-all duration-200 ease-in-out
                ${isValid ? 'opacity-0 translate-y-[-4px]' : 'opacity-100 translate-y-0'}
              `}
            >
              Please enter a valid HEX color
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
