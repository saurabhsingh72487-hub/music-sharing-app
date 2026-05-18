'use client'

import { useEffect, useState } from 'react'

import { getFileById } from '@/services/fileService'

import DownloadButton from '@/components/DownloadButton'

const FilePage = ({ params }) => {
  const [file, setFile] = useState(null)

  useEffect(() => {
    fetchFile()
  }, [])

  const fetchFile = async () => {
    try {
      const data = await getFileById(params.id)

      setFile(data.file)
    } catch (error) {
      console.log(error)
    }
  }

  if (!file) {
    return <p className="p-10">Loading...</p>
  }

  return (
    <main className="min-h-screen p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">
          {file.fileName}
        </h1>

        <audio controls className="w-full mb-4">
          <source
            src={file.secureUrl}
            type="audio/mpeg"
          />
        </audio>

        <DownloadButton url={file.secureUrl} />
      </div>
    </main>
  )
}

export default FilePage