import React from "react";
import { FiSearch } from "react-icons/fi";
import { TbMessageChatbot } from "react-icons/tb";

const ChatTypingIndicator = ({ isTyping }) => {
  return (
    <>
      {isTyping && (
        <div className="flex gap-3">
          {/* Bot Icon */}
          <div
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-primary
              text-white
            "
          >
            <TbMessageChatbot size={19} />
          </div>

          {/* Typing Bubble */}
          <div
            className="
              relative
              flex
              h-[38px]
              items-center
              gap-1.5
              rounded-2xl
              rounded-tl-md
              bg-primary/10
              px-4

              after:absolute
              after:-left-2
              after:top-0
              after:border-b-[10px]
              after:border-r-[10px]
              after:border-b-transparent
              after:border-r-gray-100
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                animate-bounce
                rounded-full
                bg-primary
                [animation-delay:-0.3s]
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                animate-bounce
                rounded-full
                bg-primary
                [animation-delay:-0.15s]
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                animate-bounce
                rounded-full
                bg-primary
              "
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatTypingIndicator;