import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/catalog')({
  component: CatalogPage,
  head: () => ({
    meta: [
      { title: 'Catalog - Călărași Marina' },
      { name: 'description', content: 'Catalog produse Călărași Marina - bărci, motoare nautice și jet-ski.' },
    ],
  }),
})

function CatalogPage() {
  const pptxUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/catalog.pptx`
      : '/catalog.pptx'

  const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(pptxUrl)}`

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f4f8' }}>
      {/* Page header */}
      <div style={{ backgroundColor: '#0a2342' }} className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 style={{ color: '#c8a84b' }} className="text-3xl font-bold mb-2">
            Catalog Produse
          </h1>
          <p className="text-gray-300 text-sm">
            Răsfoiți catalogul nostru complet de bărci, motoare nautice și jet-ski.
          </p>
        </div>
      </div>

      {/* Viewer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Toolbar */}
          <div
            style={{ backgroundColor: '#1a3a5c' }}
            className="flex items-center justify-between px-5 py-3"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: '#c8a84b' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">catalog.pptx</span>
            </div>
            <a
              href="/catalog.pptx"
              download
              style={{ backgroundColor: '#c8a84b', color: '#0a2342' }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Descarcă
            </a>
          </div>

          {/* Office Online iframe */}
          <iframe
            src={viewerUrl}
            title="Catalog Călărași Marina"
            className="w-full border-0"
            style={{ height: '75vh', minHeight: '500px' }}
            allowFullScreen
          />
        </div>

        {/* Fallback note */}
        <p className="text-center text-gray-500 text-xs mt-4">
          Dacă documentul nu se încarcă,{' '}
          <a href="/catalog.pptx" download className="underline hover:text-blue-600">
            descărcați catalogul
          </a>{' '}
          pentru a-l vizualiza local.
        </p>
      </div>
    </div>
  )
}
