import React from "react";
import { FiSearch } from "react-icons/fi";

const ChatTypingIndicator = ({ isTyping }) => {
  return (
    <>
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
    </>
  );
};

export default ChatTypingIndicator;
