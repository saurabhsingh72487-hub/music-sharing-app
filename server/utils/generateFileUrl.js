const generateFileUrl = (req, fileId) => {
  return `${req.protocol}://${req.get('host')}/file/${fileId}`
}

module.exports = generateFileUrl