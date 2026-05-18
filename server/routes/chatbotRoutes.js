const express = require('express')

const router = express.Router()

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body

    res.status(200).json({
      reply: `You said: ${message}`,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Chat failed',
    })
  }
})

module.exports = router