import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Calarasi Marina - Bărci, Motoare Nautice și Jet-ski' },
      { name: 'description', content: 'Calarasi Marina - Furnizorul tău de încredere pentru bărci, motoare nautice și jet-ski. Navigăm împreună spre excelență!' },
    ],
  }),
  shellComponent: RootDocument,
})

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      {/* Top info bar */}
      <div style={{ backgroundColor: '#0a2342' }} className="text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              <a href="tel:0771522458" className="hover:text-yellow-300 transition-colors">0771 522 458</a>
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              <a href="mailto:marinacalarasinfo@gmail.com" className="hover:text-yellow-300 transition-colors">marinacalarasinfo@gmail.com</a>
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
              1 Decembrie 1918, Nr. 88, Călărași
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-300">
            <span>L-V: 08:00-16:00 | S: 08:00-14:00 | D: Închis</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div style={{ backgroundColor: '#1a3a5c' }} className="py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <img
              src="https://i.ibb.co/5h5fVJZH/1000053855-removebg-preview.png"
              alt="Calarasi Marina Logo"
              className="h-16 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div>
              <div style={{ color: '#c8a84b' }} className="text-2xl font-bold leading-tight tracking-wide">
                CĂLĂRAȘI MARINA
              </div>
              <div className="text-white text-xs tracking-widest uppercase opacity-80">
                Navigăm împreună spre excelență!
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/" className="text-white hover:text-yellow-300 px-4 py-2 rounded font-medium transition-colors text-sm">
              Acasă
            </Link>
            <Link to="/?category=barci" className="text-white hover:text-yellow-300 px-4 py-2 rounded font-medium transition-colors text-sm">
              Bărci
            </Link>
            <Link to="/?category=motoare" className="text-white hover:text-yellow-300 px-4 py-2 rounded font-medium transition-colors text-sm">
              Motoare Nautice
            </Link>
            <Link to="/?category=jetski" className="text-white hover:text-yellow-300 px-4 py-2 rounded font-medium transition-colors text-sm">
              Jet-ski
            </Link>
            <Link to="/catalog" className="text-white hover:text-yellow-300 px-4 py-2 rounded font-medium transition-colors text-sm">
              Catalog
            </Link>
            <a href="#contact" style={{ backgroundColor: '#c8a84b', color: '#0a2342' }} className="ml-3 px-4 py-2 rounded font-bold text-sm hover:opacity-90 transition-opacity">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 border-t border-blue-600 pt-3 flex flex-col gap-1">
            <Link to="/" className="text-white hover:text-yellow-300 px-4 py-2 font-medium text-sm block" onClick={() => setMenuOpen(false)}>Acasă</Link>
            <Link to="/?category=barci" className="text-white hover:text-yellow-300 px-4 py-2 font-medium text-sm block" onClick={() => setMenuOpen(false)}>Bărci</Link>
            <Link to="/?category=motoare" className="text-white hover:text-yellow-300 px-4 py-2 font-medium text-sm block" onClick={() => setMenuOpen(false)}>Motoare Nautice</Link>
            <Link to="/?category=jetski" className="text-white hover:text-yellow-300 px-4 py-2 font-medium text-sm block" onClick={() => setMenuOpen(false)}>Jet-ski</Link>
            <Link to="/catalog" className="text-white hover:text-yellow-300 px-4 py-2 font-medium text-sm block" onClick={() => setMenuOpen(false)}>Catalog</Link>
            <a href="#contact" style={{ color: '#c8a84b' }} className="px-4 py-2 font-bold text-sm block" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: '#0a2342' }} className="text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/5h5fVJZH/1000053855-removebg-preview.png"
                alt="Calarasi Marina"
                className="h-12 w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div>
                <div style={{ color: '#c8a84b' }} className="font-bold text-lg">CĂLĂRAȘI MARINA</div>
                <div className="text-xs text-gray-400">Est. Călărași, România</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Partenerul tău de încredere pentru echipamente nautice de calitate. Bărci, motoare și jet-ski pentru fiecare aventură pe apă.
            </p>
            <div className="mt-4" style={{ color: '#c8a84b' }}>
              <p className="italic text-sm font-semibold">"Navigăm împreună spre excelență!"</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#c8a84b' }} className="font-bold text-lg mb-4 pb-2 border-b border-blue-800">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#c8a84b' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                <span>1 Decembrie 1918, Nr. 88<br />Călărași, România</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" style={{ color: '#c8a84b' }} fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                <a href="tel:0771522458" className="hover:text-yellow-300 transition-colors">0771 522 458</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" style={{ color: '#c8a84b' }} fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                <a href="mailto:marinacalarasinfo@gmail.com" className="hover:text-yellow-300 transition-colors">marinacalarasinfo@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" style={{ color: '#c8a84b' }} fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                <span>Fax: +02140213216547</span>
              </li>
            </ul>
          </div>

          {/* Program & Info */}
          <div>
            <h3 style={{ color: '#c8a84b' }} className="font-bold text-lg mb-4 pb-2 border-b border-blue-800">Program</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Luni - Vineri</span>
                <span className="font-semibold text-white">08:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sâmbătă</span>
                <span className="font-semibold text-white">08:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Duminică</span>
                <span className="font-semibold text-red-400">Închis</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-blue-800 text-xs text-gray-500">
              <p>Cod CAEN: 4764</p>
              <p className="mt-1">Societate înregistrată în România</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900 py-4 px-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Călărași Marina. Toate drepturile rezervate.</p>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
