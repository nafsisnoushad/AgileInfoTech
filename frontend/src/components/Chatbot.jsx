import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import robotAvatar from '../assets/robot-avatar.png';

const chatFlow = {
  main: {
    text: "Hello! 👋 Welcome to AGIEINFOTECH. How can I assist you today?",
    buttons: ["Services", "Pricing", "Portfolio", "Contact Us", "Back to Menu"]
  },
  services: {
    text: "We offer various services including: Web Development, Mobile App Development, SEO Optimization, Domain and Hosting, and IT Consultations.",
    buttons: ["Web Development", "Mobile Apps", "SEO Optimization", "Consultation", "Hosting", "Back to Menu"]
  },
  "web development": {
    text: "We create custom websites tailored to your business needs, using the latest technologies for a modern and responsive design.",
    buttons: ["Web Development", "Mobile Apps", "SEO Optimization", "Consultation", "Hosting", "Back to Menu"]
  },
  "mobile apps": {
    text: "Android apps as well as cross-platform solutions using React Native or Flutter.",
    buttons: ["Web Development", "Mobile Apps", "SEO Optimization", "Consultation", "Hosting", "Back to Menu"]
  },
  "consultation": {
    text: "Our IT consultation services help you strategize and implement the best tech solutions for your business growth.",
    buttons: ["Web Development", "Mobile Apps", "SEO Optimization", "Consultation", "Hosting", "Back to Menu"]
  },
  "seo optimization": {
    text: "📈 Our SEO Optimization services help you rank higher on Google:\n\n• Keyword research & on-page SEO\n• Technical SEO (speed, structure)\n• Link building & off-page SEO\n• Local SEO & Google My Business\n\nStart getting more organic traffic today! Contact us at +91 7907248735.",
    buttons: ["Web Development", "Mobile Apps", "SEO Optimization", "Consultation", "Hosting", "Back to Menu"]
  },
  "hosting": {
    text: "We provide reliable hosting solutions with 99.9% uptime guarantee, daily backups, and free SSL certificates.",
    buttons: ["Web Development", "Mobile Apps", "SEO Optimization", "Consultation", "Hosting", "Back to Menu"]
  },
  pricing: {
    text: "Our pricing varies based on project requirements. We'd be happy to provide a customized quote.",
    buttons: ["Web Pricing →", "Mobile Pricing →", "SEO Pricing →", "Hosting Pricing →", "Back to Menu →"]
  },
  "web pricing →": {
    text: "Web development projects typically range from ₹5,000 to ₹25,000 depending on complexity.",
    buttons: ["Web Pricing →", "Mobile Pricing →", "SEO Pricing →", "Hosting Pricing →", "Back to Menu"]
  },
  "mobile pricing →": {
    text: "Mobile app development usually starts at ₹10,000 and can go up based on features and platforms.",
    buttons: ["Web Pricing →", "Mobile Pricing →", "SEO Pricing →", "Hosting Pricing →", "Back to Menu"]
  },
  "seo pricing →": {
    text: "Our SEO packages start at ₹3000/month for small businesses.",
    buttons: ["Web Pricing →", "Mobile Pricing →", "SEO Pricing →", "Hosting Pricing →", "Back to Menu"]
  },
  "hosting pricing →": {
    text: "Hosting plans:\nBasic: ₹1500/month\nBusiness: ₹5000/month\nEnterprise: ₹15000/month",
    buttons: ["Web Pricing →", "Mobile Pricing →", "SEO Pricing →", "Hosting Pricing →", "Back to Menu"]
  },
  "contact us": {
    text: "You can reach us at:\n\nPhone: +91 7907248735\n\nEmail: enquiryagileinfotech@gmail.com\n\nHours: Monday–Saturday, 9:30AM–5:30PM EST",
    buttons: ["Request Callback →", "Send Email →", "Visit Office →", "Contact Form →", "Back to Menu →"]
  },
  "request callback →": {
    text: "Great! Please provide your contact details and our team will call you back.\n\nOpening WhatsApp to connect with our team...",
    action: "whatsapp",
    buttons: ["Request Callback →", "Send Email →", "Visit Office →", "Contact Form →", "Back to Menu"]
  },
  "send email →": {
    text: "Opening your email client...",
    action: "email",
    buttons: ["Request Callback →", "Send Email →", "Visit Office →", "Contact Form →", "Back to Menu"]
  },
  "visit office →": {
    text: "Our office is located at:\nAgileInfoTech\nThycaud, Thiruvananthapuram,\nKerala – 605014\n\nOpening Google Maps for directions...",
    action: "map",
    buttons: ["Request Callback →", "Send Email →", "Visit Office →", "Contact Form →", "Back to Menu"]
  },
  "contact form →": {
    text: "Taking you to our contact page...",
    action: "contact_page",
    buttons: ["Request Callback →", "Send Email →", "Visit Office →", "Contact Form →", "Back to Menu"]
  },
  "portfolio": {
    text: "Taking you to our portfolio...",
    action: "portfolio",
    buttons: ["Services", "Pricing", "Portfolio", "Contact Us", "Back to Menu"]
  },
  "back to menu": {
    text: "Need help with your website?",
    buttons: ["Services", "Pricing", "Portfolio", "Contact Us", "Back to Menu"]
  },
  "back to menu →": {
    text: "Need help with your website?",
    buttons: ["Back to Menu"]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: chatFlow.main.text,
      sender: 'bot',
      buttons: chatFlow.main.buttons
    }
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
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
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

  const handleAction = (actionText) => {
    const userMessage = { id: Date.now(), text: actionText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const lowerAction = actionText.toLowerCase();
      let flowNode = chatFlow[lowerAction];

      if (!flowNode) {
        // Fallback for typed input that doesn't match exactly
        flowNode = {
          text: "I'm not sure about that. Please select an option from the menu.",
          buttons: chatFlow.main.buttons
        };
      }

      const botMessage = {
        id: Date.now() + 1,
        text: flowNode.text,
        sender: 'bot',
        buttons: flowNode.buttons
      };

      setMessages(prev => [...prev, botMessage]);

      // Handle specific actions like redirects
      if (flowNode.action === 'whatsapp') {
        window.open('https://wa.me/917907248735', '_blank');
      } else if (flowNode.action === 'email') {
        window.location.href = 'mailto:enquiryagileinfotech@gmail.com';
      } else if (flowNode.action === 'map') {
        window.open('https://www.google.com/maps/search/?api=1&query=AgileInfoTech+Thycaud+Thiruvananthapuram+Kerala+605014', '_blank');
      } else if (flowNode.action === 'contact_page') {
        window.location.pathname = '/contact';
      } else if (flowNode.action === 'portfolio') {
        window.location.pathname = '/portfolio';
      }

    }, 600);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleAction(inputValue);
    setInputValue('');
  };

  // Get the buttons from the LAST message, if they exist
  const lastMessageButtons = messages[messages.length - 1]?.buttons;

  return (
    <div className="chatbot-container">
      {showTooltip && !isOpen && (
        <div className="chatbot-welcome-tooltip" onClick={toggleChat}>
          Hi there! 👋 Need help with your website?<br />
          Ask AgileBot!
        </div>
      )}

      {isOpen && (
        <div className="chatbot-window glass">
          <div className="chatbot-header">
            <h3>AgileBot 🤖</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.text.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < msg.text.split('\n').length - 1 && <br />}</span>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {lastMessageButtons && (
            <div className="quick-actions">
              {lastMessageButtons.map(btn => (
                <button
                  key={btn}
                  className="quick-action-btn"
                  onClick={() => handleAction(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          )}

          <form className="chatbot-input" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask a question or select an option..."
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
