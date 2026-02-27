import React from 'react'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import PreviewWorkspace from './components/PreviewWorkspace'
import TokensPanel from './components/TokensPanel'
import AccessibilityPanel from './components/AccessibilityPanel'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* 1️⃣ TopBar */}
      <div className="h-12 bg-white shadow flex items-center px-4">
        <TopBar />
      </div>

      {/* 2️⃣ Main content: Sidebar + Preview */}
      <div className="flex flex-1 gap-4 p-4">
        <div className="w-64">
          <Sidebar />
        </div>
        <div className="flex-1 bg-white p-4 border rounded">
          <PreviewWorkspace />
        </div>
      </div>

      {/* 3️⃣ Bottom panels: Tokens + Accessibility */}
      <div className="flex gap-4 p-4">
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
