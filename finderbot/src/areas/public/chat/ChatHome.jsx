import { useEffect, useRef, useState } from "react";
import { finderPages, topSearchPages } from "../data/finderPages";
import { findPages } from "../../../utils/finderSearch";
import ChatHead from "./ChatHead";
import ChatHeaderArea from "./ChatHeaderArea";
import ChatIntro from "./ChatIntro";
import ChatSuggestions from "./ChatSuggestions";
import ChatInputArea from "./ChatInputArea";
import ChatMessageArea from "./ChatMessageArea";

const ChatHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // Realtime search suggestions
  const searchSuggestions = message.trim()
    ? findPages(message, finderPages, 3)
    : [];

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitMessage(message);
  };

  const submitMessage = (text) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage || isTyping) return;

    const results = findPages(trimmedMessage, finderPages, 4);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "user",
        text: trimmedMessage,
      },
    ]);

    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "bot",
          text:
            results.length > 0
              ? `I found ${results.length} page${
                  results.length > 1 ? "s" : ""
                } that might help you.`
              : "Sorry, I couldn't find any relevant details.",
          results,
        },
      ]);

      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {isOpen && (
        <div
          className="
            fixed
            bottom-24
            right-6
            z-50
            flex
            h-[560px]
            w-[380px]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-2xl
          "
        >
          {/* Header */}
          <ChatHeaderArea setIsOpen={setIsOpen} />

          {/* Conversation */}
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">

            {/* Initial Empty State */}
            {messages.length === 0 && !isTyping && (
              <div className="flex flex-col items-center px-5">
                <ChatIntro />

                {/* 
                  No text typed:
                  Show default suggestions
                */}
                {!message.trim() && (
                  <ChatSuggestions
                    pages={topSearchPages}
                    submitMessage={submitMessage}
                  />
                )}

                {/* 
                  User is typing:
                  Show realtime suggestions if found
                */}
                {message.trim() && searchSuggestions.length > 0 && (
                  <ChatSuggestions
                    pages={searchSuggestions || topSearchPages}
                    submitMessage={submitMessage}
                  />
                )}
              </div>
            )}

            {/* Messages */}
            <ChatMessageArea
              isTyping={isTyping}
              messages={messages}
            />

            {/* 
              Suggestions AFTER first message
              Show them below the messages
            */}
            {messages.length > 0 &&
              !isTyping &&
              message.trim() &&
              searchSuggestions.length > 0 && (
                <ChatSuggestions
                  pages={searchSuggestions}
                  submitMessage={submitMessage}
                />
              )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <ChatInputArea
            handleSubmit={handleSubmit}
            isTyping={isTyping}
            message={message}
            setMessage={setMessage}
            
          />
        </div>
      )}

      {/* Floating Button */}
      <ChatHead
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default ChatHome;