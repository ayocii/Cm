import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="rounded-2xl p-12 border text-center max-w-lg">
        <div className="text-6xl mb-6 text-red-500">&#10005;</div>
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#0a2342' }}>Plată Anulată</h1>
        <p className="mb-8 text-gray-600">
          Plata a fost anulată. Nu a fost efectuată nicio tranzacție.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg font-bold text-white no-underline"
          style={{ backgroundColor: '#1e6fa5' }}
        >
          Înapoi Acasă
        </Link>
      </div>
    </div>
  )
}
