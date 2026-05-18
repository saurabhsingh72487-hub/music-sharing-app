const chunkText = (text, chunkSize = 500) => {
  if (!text) return []

  const chunks = []

  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize))
  }

  return chunks
}

module.exports = chunkText