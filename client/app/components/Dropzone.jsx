'use client'

import { useDropzone } from 'react-dropzone'

const Dropzone = ({ onFileSelect }) => {
  const { getRootProps, getInputProps } =
    useDropzone({
      accept: {
        'audio/mpeg': ['.mp3'],
      },

      multiple: false,

      onDrop: (acceptedFiles) => {
        onFileSelect(acceptedFiles[0])
      },
    })

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed p-10 rounded-xl bg-white text-center cursor-pointer"
    >
      <input {...getInputProps()} />

      <p>
        Drag & Drop MP3 here or click to select
      </p>
    </div>
  )
}

export default Dropzone