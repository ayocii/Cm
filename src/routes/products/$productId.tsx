import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Produsul nu a fost găsit')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#f0f4f8' }} className="py-3 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-700 transition-colors">Acasă</Link>
          <span>›</span>
          <Link to={`/?category=${product.category}`} className="hover:text-blue-700 transition-colors">
            {product.categoryLabel}
          </Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product main section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
                style={{ maxHeight: '480px' }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span
              className="inline-block self-start text-xs font-bold px-3 py-1 rounded-full text-white mb-3"
              style={{ backgroundColor: '#1e6fa5' }}
            >
              {product.categoryLabel}
            </span>
            <h1 className="text-3xl font-bold mb-4" style={{ color: '#0a2342' }}>
              {product.name}
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {/* Price & CTA */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: '#f0f4f8', border: '2px solid #e2e8f0' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-sm text-gray-500">Preț de la</span>
                  <div className="text-3xl font-bold" style={{ color: '#0a2342' }}>
                    {product.price.toLocaleString('ro-RO')} €
                  </div>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>TVA inclus</p>
                  <p>Livrare în toată România</p>
                </div>
              </div>
              <BuyButton productId={product.id} className="w-full justify-center text-base font-bold py-3" />
              <p className="text-center text-xs text-gray-500 mt-3">
                Sau contactați-ne la{' '}
                <a href="tel:0771522458" className="font-semibold" style={{ color: '#1e6fa5' }}>
                  0771 522 458
                </a>{' '}
                pentru detalii
              </p>
            </div>

            {/* Quick specs preview */}
            <div className="grid grid-cols-2 gap-3">
              {product.specifications.slice(0, 4).map((spec) => (
                <div key={spec.label} className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="text-xs text-gray-500">{spec.label}</div>
                  <div className="font-bold text-sm" style={{ color: '#0a2342' }}>{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications section */}
        <div className="mt-12">
          <div
            className="rounded-2xl overflow-hidden shadow-sm border border-gray-200"
          >
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ backgroundColor: '#0a2342' }}
            >
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h2 className="text-white font-bold text-lg">Specificații Tehnice</h2>
            </div>
            <table className="spec-table w-full">
              <tbody>
                {product.specifications.map((spec) => (
                  <tr key={spec.label}>
                    <td
                      className="py-3 px-6 font-semibold text-sm border-b border-gray-100 w-1/2"
                      style={{ color: '#1a3a5c' }}
                    >
                      {spec.label}
                    </td>
                    <td className="py-3 px-6 text-sm border-b border-gray-100 text-gray-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            to={`/?category=${product.category}`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors no-underline"
            style={{ color: '#1e6fa5' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Înapoi la {product.categoryLabel}
          </Link>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section style={{ backgroundColor: '#f0f4f8' }} className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-6" style={{ color: '#0a2342' }}>
              Produse Similare
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to="/products/$productId"
                  params={{ productId: p.id.toString() }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow no-underline block"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-gray-800 mb-1">{p.name}</h3>
                    <div className="text-base font-bold" style={{ color: '#0a2342' }}>
                      {p.price.toLocaleString('ro-RO')} €
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
