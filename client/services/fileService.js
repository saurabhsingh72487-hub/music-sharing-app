export const uploadFile = async (formData) => {
  const response = await fetch(
    'http://localhost:5000/api/files/upload',
    {
      method: 'POST',
      body: formData,
    }
  )

  const data = await response.json()

  console.log(data)

  if (!response.ok) {
    throw new Error(
      data.message || data.error || 'Upload failed'
    )
  }

  return data
}