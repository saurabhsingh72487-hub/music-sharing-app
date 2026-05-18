const express = require('express')

const router = express.Router()

const upload = require('../middleware/uploadMiddleware')

const {
  uploadFile,
  getFileById,
} = require('../controllers/fileController')

router.post('/upload', upload.single('file'), uploadFile)

router.get('/:id', getFileById)

module.exports = router