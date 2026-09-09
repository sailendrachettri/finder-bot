import React from "react";
import { FiArrowUp, FiMessageCircle } from "react-icons/fi";

const ChatInputArea = ({ message, handleSubmit, setMessage , isTyping}) => {
  return (
    <>
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
    </>
  );
};

export default ChatInputArea;
