const openai = require('../config/openai')

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',

      messages: [
        {
          role: 'system',
          content: 'You are a helpful music assistant.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    })

    const reply = completion.choices[0].message.content

    res.status(200).json({
      reply,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Chatbot error',
    })
  }
}

module.exports = {
  chatWithAI,
}