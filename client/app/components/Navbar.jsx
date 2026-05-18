import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          MusicShare
        </Link>

        <div className="flex gap-4">
          <Link href="/upload">Upload</Link>

          <Link href="/chatbot">Chatbot</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar