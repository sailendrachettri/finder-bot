import React from "react";
import ChatTypingIndicator from "./ChatTypingIndicator";
import { FiSearch } from "react-icons/fi";
import { TbMessageChatbot } from "react-icons/tb";

const ChatMessageArea = ({ messages, isTyping }) => {
    console.log({messages})
  return (
    <>
      <div className="flex flex-col gap-5">
        {messages?.map((msg) => (
          <div
            key={msg?.id}
            className={msg?.type === "user" ? "flex justify-end" : "flex gap-3"}
          >
            {/* Bot Icon */}
            {msg?.type === "bot" && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                <TbMessageChatbot size={18} />
              </div>
            )}

            {/* Message */}
            <div
              className={
                msg?.type === "user"
                  ? `
        max-w-[280px]
        rounded-2xl
        rounded-tr-md
        bg-primary
        px-4
        py-3
        text-sm
        leading-5
        text-white
      `
                  : "max-w-[300px]"
              }
            >
              {msg?.type === "user" ? (
                <div
                  className="
        rounded-2xl
        rounded-tr-md
        bg-primary
        text-sm
        leading-5
        text-white
      "
                >
                  {msg?.text}
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
                    {msg?.text}
                  </div>

                  {/* Results */}
                  {msg?.results?.length > 0 && (
                    <div className="mt-2 flex flex-col gap-1.5">
                      {msg?.results?.map((page) => (
                        <a
                          key={page?.id}
                          href={page?.url}
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
                          <span className="truncate">{page?.title}</span>

                          <span className="ml-2 text-gray-400">→</span>
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
        <ChatTypingIndicator isTyping={isTyping} />
      </div>
    </>
  );
};

export default ChatMessageArea;
