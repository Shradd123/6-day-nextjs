"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const askAI = async () => {
    if (!question.trim()) return;
    setLoading(true);

    const newChat = [...chatHistory, { role: "user", text: question }];
    setChatHistory(newChat);
    setQuestion("");

    try {
      const res = await axios.post("/api/gemini", { question });
      setChatHistory([...newChat, { role: "ai", text: res.data.reply }]);
    } catch (error) {
      setChatHistory([...newChat, { role: "ai", text: "Error fetching AI response." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#03045E] to-[#00B4D8] p-8">
      <div className="w-full max-w-lg bg-opacity-40 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white/20">
        <h1 className="text-5xl font-bold text-center mb-6 text-white drop-shadow-lg">
          Ask Gemini AI
        </h1>

        {/* Chat Messages */}
        <div
          ref={chatRef}
          className="h-96 overflow-y-auto p-4 space-y-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-inner border-2 border-white/20"
        >
          {chatHistory.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-4 rounded-xl max-w-[75%] ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-[#ff7eb9] via-[#ff65a3] to-[#ff33b8] text-white self-end ml-auto"
                  : "bg-gradient-to-r from-[#ff4e50] via-[#f9d423] to-[#f2fcfe] text-gray-800"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
          {loading && (
            <p className="animate-pulse text-gray-300">AI is typing...</p>
          )}
        </div>

        {/* Input and Send Button */}
        <div className="mt-6 flex gap-4 items-center">
          <textarea
            className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-[#00B4D8] resize-none"
            rows="2"
            placeholder="Type something..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <motion.button
            onClick={askAI}
            className="bg-gradient-to-r from-[#00B4D8] via-[#00D4A7] to-[#00C8D8] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-90"
            disabled={loading}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {loading ? (
              <span className="animate-spin text-lg">...</span>
            ) : (
              <FaPaperPlane size={24} />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
