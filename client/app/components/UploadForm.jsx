'use client'

import { useState } from 'react'

import Dropzone from './Dropzone'
import FileDetails from './FileDetails'

import { uploadFile } from '@/services/fileService'

const UploadForm = () => {
  const [selectedFile, setSelectedFile] =
    useState(null)

  const handleUpload = async () => {
    const formData = new FormData()

    formData.append('file', selectedFile)

    await uploadFile(formData)

    alert('Uploaded')
  }

  return (
    <div>
      <Dropzone onFileSelect={setSelectedFile} />

      <FileDetails file={selectedFile} />

      <button
        onClick={handleUpload}
        className="bg-black text-white px-6 py-3 rounded-lg mt-4"
      >
        Upload
      </button>
    </div>
  )
}

export default UploadForm