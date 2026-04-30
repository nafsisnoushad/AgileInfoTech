import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import robotAvatar from '../assets/robot-avatar.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! 👋 Welcome to AGIEINFOTECH. How can I assist you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Show tooltip after 5 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    // Hide tooltip after 7 seconds of being shown
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
    setHasNotification(false);
  };

  const quickActions = [
    "Available Courses",
    "Internship Details",
    "Company Location",
    "Contact Support"
  ];

  const handleInquiry = (text) => {
    const userMessage = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    // Basic inquiry logic
    setTimeout(() => {
      let botResponse = "";
      const lowerText = text.toLowerCase();

      if (lowerText.includes("course") || lowerText.includes("available")) {
        botResponse = "We offer various courses including Web Development, Data Science, UI/UX Design, and Cloud Computing. You can find more details on our Services page!";
      } else if (lowerText.includes("intern") || lowerText.includes("placement")) {
        botResponse = "Our internship programs provide hands-on experience and placement assistance. Check out our Careers section for open positions!";
      } else if (lowerText.includes("location") || lowerText.includes("where")) {
        botResponse = "We are located in [Your City/Address]. You can also reach us via the Contact page.";
      } else if (lowerText.includes("contact") || lowerText.includes("support")) {
        botResponse = "You can contact us at support@agileinfotech.com or call us at +1 234 567 890.";
      } else {
        botResponse = "I'm not sure I understand. Would you like to speak with a representative or check our services?";
      }

      const botMessage = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleInquiry(inputValue);
    setInputValue('');
  };

  return (
    <div className="chatbot-container">
      {showTooltip && !isOpen && (
        <div className="chatbot-welcome-tooltip" onClick={toggleChat}>
          Hi there! 👋 Need help with anything?<br />
          Just click here to chat!
        </div>
      )}

      {isOpen && (
        <div className="chatbot-window glass">
          <div className="chatbot-header">
            <h3>AgileBot</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {messages.length < 5 && (
            <div className="quick-actions">
              {quickActions.map(action => (
                <button
                  key={action}
                  className="quick-action-btn"
                  onClick={() => handleInquiry(action)}
                >
                  {action}
                </button>
              ))}
            </div>
          )}
          <form className="chatbot-input" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="send-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}

      <button className="chatbot-toggle" onClick={toggleChat}>
        <img src={robotAvatar} alt="AgileBot" className="chatbot-avatar" />
        {hasNotification && <div className="notification-badge">1</div>}
      </button>
    </div>
  );
};

export default Chatbot;
