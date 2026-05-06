import { Link, createFileRoute, useSearch } from '@tanstack/react-router'
import { z } from 'zod'
import products from '@/data/products'
import type { Product } from '@/data/products'

const searchSchema = z.object({
  category: z.enum(['barci', 'motoare', 'jetski']).optional(),
})

export const Route = createFileRoute('/')({
  validateSearch: searchSchema,
  component: HomePage,
})

function CategoryCard({
  href,
  label,
  count,
  active,
}: {
  href: string
  label: string
  count: number
  active: boolean
}) {
  return (
    <a
      href={href}
      className={`category-card flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all cursor-pointer no-underline ${
        active
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-blue-300'
      }`}
    >
      <div className="text-center">
        <p className={`font-bold text-sm ${active ? 'text-blue-700' : 'text-gray-700'}`}>{label}</p>
        <p className="text-xs text-gray-500">{count} produse</p>
      </div>
    </a>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
      <Link
        to="/products/$productId"
        params={{ productId: product.id.toString() }}
        className="block overflow-hidden"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="product-img w-full h-full object-cover"
          />
          <span
            className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: '#1e6fa5' }}
          >
            {product.categoryLabel}
          </span>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <Link
          to="/products/$productId"
          params={{ productId: product.id.toString() }}
          className="no-underline"
        >
          <h3 className="font-bold text-gray-800 text-base mb-2 hover:text-blue-700 transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-4 flex-1 leading-relaxed">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400">Preț de la</span>
            <div className="text-xl font-bold" style={{ color: '#0a2342' }}>
              {product.price.toLocaleString('ro-RO')} €
            </div>
          </div>
          <Link
            to="/products/$productId"
            params={{ productId: product.id.toString() }}
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-colors no-underline"
            style={{ backgroundColor: '#1e6fa5' }}
          >
            Detalii
          </Link>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  const { category } = useSearch({ from: '/' })

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products

  const categoryCounts = {
    barci: products.filter((p) => p.category === 'barci').length,
    motoare: products.filter((p) => p.category === 'motoare').length,
    jetski: products.filter((p) => p.category === 'jetski').length,
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-24 px-6 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a2342 0%, #1a3a5c 50%, #1e6fa5 100%)',
        }}
      >
        {/* Wave decoration */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path
              fill="white"
              d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,181.3C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <img
              src="https://i.ibb.co/5h5fVJZH/1000053855-removebg-preview.png"
              alt="Calarasi Marina"
              className="h-28 w-auto object-contain drop-shadow-xl"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Bine ați venit la{' '}
            <span style={{ color: '#c8a84b' }}>Călărași Marina</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-200 mb-6 italic font-medium">
            "Navigăm împreună spre excelență!"
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Furnizorul tău de încredere pentru bărci, motoare nautice și jet-ski de înaltă calitate.
            Descoperă gama noastră completă de produse nautice și echipamente pentru apă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#produse"
              className="px-8 py-3 rounded-lg font-bold text-base no-underline transition-colors"
              style={{ backgroundColor: '#c8a84b', color: '#0a2342' }}
            >
              Vezi Produsele
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-bold text-base border-2 border-white text-white no-underline hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ backgroundColor: '#1a3a5c' }} className="py-5 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 text-center text-white">
          <div>
            <div className="text-2xl font-bold" style={{ color: '#c8a84b' }}>10+</div>
            <div className="text-xs text-gray-300">Modele disponibile</div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: '#c8a84b' }}>3</div>
            <div className="text-xs text-gray-300">Categorii de produse</div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: '#c8a84b' }}>Garantat</div>
            <div className="text-xs text-gray-300">Calitate premium</div>
          </div>
        </div>
      </div>

      {/* Category selector */}
      <section className="max-w-5xl mx-auto px-6 py-10" id="produse">
        <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#0a2342' }}>
          Categorii de Produse
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Alegeți categoria dorită pentru a filtra produsele
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <CategoryCard
            href="/"
            label="Toate Produsele"
            count={products.length}
            active={!category}
          />
          <CategoryCard
            href="/?category=barci"
            label="Bărci"
            count={categoryCounts.barci}
            active={category === 'barci'}
          />
          <CategoryCard
            href="/?category=motoare"
            label="Motoare Nautice"
            count={categoryCounts.motoare}
            active={category === 'motoare'}
          />
          <CategoryCard
            href="/?category=jetski"
            label="Jet-ski"
            count={categoryCounts.jetski}
            active={category === 'jetski'}
          />
        </div>
      </section>

      {/* Products grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold" style={{ color: '#0a2342' }}>
            {category
              ? products.find((p) => p.category === category)?.categoryLabel ?? 'Produse'
              : 'Toate Produsele'}
          </h2>
          <span className="text-sm text-gray-500">{filteredProducts.length} produse găsite</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ backgroundColor: '#f0f4f8' }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#0a2342' }}>
            De ce să alegi Călărași Marina?
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Experiență, calitate și servicii de excepție
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Produse de Calitate',
                desc: 'Oferim exclusiv produse nautice de la branduri consacrate, verificate și certificate pentru siguranță maximă.',
              },
              {
                title: 'Service & Suport',
                desc: 'Echipa noastră de specialiști vă oferă asistență tehnică și service autorizat pentru toate produsele achiziționate.',
              },
              {
                title: 'Garanție & Încredere',
                desc: 'Toate produsele vin cu garanție completă și beneficiați de suportul nostru pe toată durata utilizării.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="font-bold text-base mb-2" style={{ color: '#0a2342' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
