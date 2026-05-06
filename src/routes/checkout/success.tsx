import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="rounded-2xl p-12 border text-center max-w-lg">
        <div className="text-6xl mb-6" style={{ color: '#1e6fa5' }}>&#10003;</div>
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#0a2342' }}>Plată Reușită!</h1>
        <p className="mb-2 text-gray-600">
          Vă mulțumim pentru achiziție! Comanda dvs. a fost înregistrată cu succes.
        </p>
        <p className="mb-8 text-sm text-gray-500">
          Veți fi contactat în cel mai scurt timp de echipa Călărași Marina.
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
