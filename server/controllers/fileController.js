const streamifier = require('streamifier')

const cloudinary = require('../config/cloudinary')
const File = require('../models/File')

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: 'No file uploaded',
      })
    }

    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: 'video',
            folder: 'music-sharing-app',
          },
          (error, result) => {
            if (result) {
              resolve(result)
            } else {
              reject(error)
            }
          }
        )

        streamifier.createReadStream(req.file.buffer).pipe(stream)
      })
    }

    const result = await streamUpload()

    const file = await File.create({
      fileName: req.file.originalname,
      publicId: result.public_id,
      secureUrl: result.secure_url,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
    })

    res.status(201).json({
      success: true,
      file,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'File upload failed',
    })
  }
}

const getFileById = async (req, res) => {
  try {
    const file = await File.findById(req.params.id)

    if (!file) {
      return res.status(404).json({
        message: 'File not found',
      })
    }

    res.status(200).json({
      success: true,
      file,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Server error',
    })
  }
}

module.exports = {
  uploadFile,
  getFileById,
}