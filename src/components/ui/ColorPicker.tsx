import * as React from 'react'

export function ColorPicker() {
  return (
    <div>
      <label
        htmlFor="hs-color-input"
        className="block mb-2 text-sm font-medium text-foreground"
      >
        Color picker
      </label>
      <input
        type="color"
        className="p-1 h-10 w-14 block bg-layer border border-layer-line cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
        id="hs-color-input"
        value="#2563eb"
        title="Choose your color"
      ></input>
    </div>
  )
}

export default ColorPicker
