import { useEffect, useRef, useState } from "react";
import { FiArrowUp, FiMessageCircle, FiSearch, FiX } from "react-icons/fi";
import { finderPages } from "../data/finderPages";
import { findPages } from "../../../utils/finderSearch";

const ChatHome = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  console.log({ messages });
  const messagesEndRef = useRef(null);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedMessage = message.trim();
    const results = findPages(trimmedMessage, finderPages);

    if (!trimmedMessage || isTyping) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "user",
        text: trimmedMessage,
      },
    ]);

    setMessage("");

    // Simulate FinderBot thinking
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
              : "Sorry, I couldn't find a relevant page.",
          results,
        },
      ]);

      setIsTyping(false);
    }, 800);
  };

  const handleSuggestion = (text) => {
    setMessage(text);
  };

  return (
    <>
      {/* FinderBot */}
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
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
                <FiSearch size={17} />
              </div>

              <div>
                <h2 className="text-sm font-semibold">FinderBot</h2>

                <p className="text-xs text-gray-400">
                  Find pages in your portal
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                text-gray-400
                transition
                hover:bg-gray-100
                hover:text-gray-700
              "
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Conversation */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Empty State */}
            {messages.length === 0 && !isTyping && (
              <div className="flex h-full flex-col items-center justify-center px-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <FiSearch size={21} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  Hi! 👋
                </h3>

                <p className="mt-1 text-center text-sm leading-5 text-gray-500">
                  What are you looking for?
                  <br />
                  I'll help you find the right page.
                </p>

                {/* Suggestions */}
                <div className="mt-6 flex w-full flex-col gap-2">
                  <button
                    onClick={() =>
                      handleSuggestion("Where can I manage employees?")
                    }
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      text-gray-600
                      transition
                      hover:bg-gray-50
                      hover:text-gray-900
                    "
                  >
                    Where can I manage employees?
                  </button>

                  <button
                    onClick={() =>
                      handleSuggestion("Where can I check attendance?")
                    }
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      text-gray-600
                      transition
                      hover:bg-gray-50
                      hover:text-gray-900
                    "
                  >
                    Where can I check attendance?
                  </button>

                  <button
                    onClick={() =>
                      handleSuggestion("Where can I manage leave?")
                    }
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      text-gray-600
                      transition
                      hover:bg-gray-50
                      hover:text-gray-900
                    "
                  >
                    Where can I manage leave?
                  </button>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex flex-col gap-5">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={
                    msg.type === "user" ? "flex justify-end" : "flex gap-3"
                  }
                >
                  {/* Bot Icon */}
                  {msg.type === "bot" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-black text-white">
                      <FiSearch size={13} />
                    </div>
                  )}

                 {/* Message */}
<div
  className={
    msg.type === "user"
      ? `
        max-w-[280px]
        rounded-2xl
        rounded-tr-md
        bg-black
        px-4
        py-3
        text-sm
        leading-5
        text-white
      `
      : "max-w-[300px]"
  }
>
  {msg.type === "user" ? (
    <div
      className="
        rounded-2xl
        rounded-tr-md
        bg-black
        px-4
        py-3
        text-sm
        leading-5
        text-white
      "
    >
      {msg.text}
    </div>
  ) : (
    <>
      {/* Bot message */}
      <div
        className="
          rounded-2xl
          rounded-tl-md
          bg-gray-100
          px-4
          py-3
          text-sm
          text-gray-700
        "
      >
        {msg.text}
      </div>

      {/* Results */}
      {msg.results?.length > 0 && (
        <div className="mt-2 flex flex-col gap-1.5">
          {msg.results.map((page) => (
            <a
              key={page.id}
              href={page.url}
              className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-gray-200
                bg-white
                px-3
                py-2
                text-sm
                text-gray-700
                transition
                hover:bg-gray-50
                hover:text-gray-900
              "
            >
              <span className="truncate">
                {page.title}
              </span>

              <span className="ml-2 text-gray-400">
                →
              </span>
            </a>
          ))}
        </div>
      )}
    </>
  )}
</div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-black text-white">
                    <FiSearch size={13} />
                  </div>

                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-md bg-gray-100 px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
                  </div>
                </div>
              )}
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-3">
            <form onSubmit={handleSubmit}>
              <div
                className="
                  flex
                  items-center
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-2
                  transition
                  focus-within:border-gray-300
                  focus-within:bg-white
                "
              >
                <FiMessageCircle
                  className="ml-2 shrink-0 text-gray-400"
                  size={17}
                />

                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask FinderBot..."
                  disabled={isTyping}
                  className="
                    h-11
                    min-w-0
                    flex-1
                    bg-transparent
                    px-3
                    text-sm
                    outline-none
                    placeholder:text-gray-400
                    disabled:cursor-not-allowed
                  "
                />

                <button
                  type="submit"
                  disabled={!message.trim() || isTyping}
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-black
                    text-white
                    transition
                    hover:bg-gray-800
                    disabled:cursor-not-allowed
                    disabled:bg-gray-200
                    disabled:text-gray-400
                  "
                >
                  <FiArrowUp size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating FinderBot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
            shadow-lg
            transition
            hover:scale-105
            hover:bg-gray-800
          "
          aria-label="Open FinderBot"
        >
          <FiSearch size={23} />
        </button>
      )}
    </>
  );
};

export default ChatHome;
