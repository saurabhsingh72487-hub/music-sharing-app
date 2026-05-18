import UploadForm from '../components/UploadForm.jsx'

export default function UploadPage() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Upload MP3 File
        </h1>

        <UploadForm />
      </div>
    </main>
  )
}