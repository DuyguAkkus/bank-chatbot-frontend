// src/App.js
import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // CSS dosyasını içe aktar

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (message.trim()) {
      // Kullanıcı mesajını ekle
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ]);

      try {
        // Backend'e soruyu gönder ve cevabı al
        const response = await axios.post("http://127.0.0.1:5000/get_answer", {
          question: message,
        });

        // Chatbot cevabını ekle
        if (response.data && response.data.answer) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: response.data.answer, sender: "bot" },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Cevap alınamadı. Lütfen tekrar deneyin.", sender: "bot" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching answer:", error);
        // Hata mesajı ekle
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Cevap alınamadı. Lütfen tekrar deneyin.", sender: "bot" },
        ]);
      }

      setMessage(""); // Mesaj kutusunu temizle
    }
  };

  const clearChat = () => {
    setMessages([]); // Mesajları temizle
  };

  return (
    <div className="chat-container">
      <div className="message-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mesajınızı yazın..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage(); // Enter tuşuna basıldığında mesaj gönder
            }
          }}
        />
        <button className="send-button" onClick={sendMessage}>
          Gönder
        </button>
        <button className="clear-button" onClick={clearChat}>
          Sohbeti Temizle
        </button>
      </div>
    </div>
  );
}

export default App;
