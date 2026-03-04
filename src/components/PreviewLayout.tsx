export function PreviewLayout() {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden bg-[var(--color-background)] border border-black/5">
      <TopNavbar />
      <SubNav />

      <div className="p-8 space-y-10">
        <SearchBar />
        <ProductGrid />
        <CTAButtons />
        <FeatureSection />
        <AlertsRow />
      </div>
    </div>
  )
}

export default PreviewLayout

function TopNavbar() {
  return (
    <div className="flex items-center justify-between px-8 py-5 bg-[var(--color-surface)]">
      <h2 className="font-bold text-lg text-[var(--color-text-primary)]">
        BrandName
      </h2>

      <div className="flex items-center gap-4">
        <button className="px-3 py-1 text-sm rounded-full bg-[var(--color-primary)] text-white">
          PRO
        </button>
        <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]" />
      </div>
    </div>
  )
}

function SubNav() {
  return (
    <div className="flex gap-6 px-8 py-4 border-t border-black/5 bg-[var(--color-surface)]">
      {['Home', 'Products', 'About', 'Contact'].map((item) => (
        <button
          key={item}
          className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        >
          {item}
        </button>
      ))}
    </div>
  )
}

function SearchBar() {
  return (
    <input
      placeholder="Search products..."
      className="w-full px-4 py-3 rounded-xl
      bg-[var(--color-surface)]
      text-[var(--color-text-primary)]
      border border-black/5
      focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
    />
  )
}
function ProductGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden bg-[var(--color-surface)] shadow-sm"
        >
          <div className="h-32 bg-[var(--color-primary)]/20" />

          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Product {i}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Premium quality item
            </p>

            <button className="mt-3 px-3 py-1 rounded-md bg-[var(--color-primary)] text-white text-sm">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function CTAButtons() {
  return (
    <div className="flex gap-4">
      <button className="px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white">
        Primary Action
      </button>

      <button className="px-5 py-2 rounded-xl bg-[var(--color-accent)] text-white">
        Special Offer
      </button>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="p-6 rounded-xl border border-[var(--color-accent)] bg-[var(--color-surface)]">
        <h4 className="font-semibold text-[var(--color-text-primary)]">
          Featured Member
        </h4>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Join our premium community
        </p>
      </div>

      <div className="p-6 rounded-xl bg-[var(--color-surface)]">
        <h4 className="font-semibold text-[var(--color-text-primary)]">
          Product Details
        </h4>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          This demonstrates text primary and secondary colors.
        </p>
      </div>
    </div>
  )
}

function AlertsRow() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-3 rounded-lg bg-green-100 text-green-800 text-sm">
        Success: Order completed
      </div>

      <div className="p-3 rounded-lg bg-yellow-100 text-yellow-800 text-sm">
        Warning: Low stock
      </div>

      <div className="p-3 rounded-lg bg-red-100 text-red-800 text-sm">
        Error: Payment failed
      </div>
    </div>
  )
}
