import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Music Sharing App
        </h1>

        <p className="text-gray-600 mb-6">
          Upload and share MP3 files
        </p>

        <Link
          href="/upload"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Upload Music
        </Link>
      </div>
    </main>
  )
}