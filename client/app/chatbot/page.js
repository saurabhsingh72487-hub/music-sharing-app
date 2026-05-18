import Chatbot from '../components/Chatbot.jsx'

export default function ChatbotPage() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          AI Music Chatbot
        </h1>

        <Chatbot />
      </div>
    </main>
  )
}