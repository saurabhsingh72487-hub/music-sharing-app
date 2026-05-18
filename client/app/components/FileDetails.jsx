import { formatFileSize } from '@/utils/formatFileSize'

const FileDetails = ({ file }) => {
  if (!file) return null

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <p>
        <strong>Name:</strong> {file.name}
      </p>

      <p>
        <strong>Size:</strong>{' '}
        {formatFileSize(file.size)}
      </p>
    </div>
  )
}

export default FileDetails