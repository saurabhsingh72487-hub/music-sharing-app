'use client'

import { useState } from 'react'
import axios from 'axios'

const Chatbot = () => {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChat = async () => {
    try {
      setLoading(true)

     const res = await axios.post(
  'http://localhost:5000/api/chat/chat',
  {
    message,
  }
)

      console.log(res.data)

      setResponse(res.data.reply)
    } catch (error) {
      console.log(error.response)
      console.log(error.response?.data)
      console.log(error.message)

      setResponse(
        error.response?.data?.message ||
          'Something went wrong'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <textarea
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask something..."
        className="w-full border p-3 rounded-lg h-32"
      />

      <button
        onClick={handleChat}
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-lg mt-4"
      >
        {loading ? 'Loading...' : 'Ask AI'}
      </button>

      {response && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          {response}
        </div>
      )}
    </div>
  )
}

export default Chatbot