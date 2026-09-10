import React, { useState } from "react";
import ChatTypingIndicator from "./ChatTypingIndicator";
import { FiSearch, FiUser, FiUserMinus } from "react-icons/fi";
import { TbMessageChatbot } from "react-icons/tb";
import { TbExternalLinkFilled } from "react-icons/tb";

const ChatMessageArea = ({ messages, isTyping }) => {
  // console.log({ messages });
  const [pageId, setPageId] = useState(null);

  return (
    <>
      <div className="flex flex-col gap-5 ">
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
                  ? "flex max-w-[280px] justify-end"
                  : "max-w-[300px]"
              }
            >
              {msg?.type === "user" ? (
                /* User message */
                <div
                  className="
        relative
        rounded-2xl
        rounded-tr-md
        bg-primary
        px-4
        py-3
        text-sm
        leading-5
        text-white

        after:absolute
        after:-right-1
        after:top-0
        after:border-b-[10px]
        after:border-l-[10px]
        after:border-b-transparent
        after:border-l-primary
      "
                >
                  {msg?.text}
                </div>
              ) : (
                <>
                  {/* Bot message */}
                  <div
                    className="
          relative
          rounded-2xl
          rounded-tl-md
          bg-primary/10
          px-4
          py-3
          text-sm
          leading-5
          text-gray-700

          after:absolute
          after:-left-2
          after:top-0
          after:border-b-[10px]
          after:border-r-[10px]
          after:border-b-transparent
          after:border-r-gray-100
        "
                  >
                    {msg?.text}
                  </div>

                  {/* Results */}
                  {msg?.results?.length > 0 && (
                    <div className="mt-2 flex flex-col gap-1.5 group">
                      {msg?.results?.map((page) => (
                        <a
                          onMouseOver={() => {
                            setPageId(page?.id);
                          }}
                          key={page?.id}
                          href={page?.url}
                          className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-primary/20
                bg-white
                px-3
                py-2
                text-sm
                text-gray-700
                transition
                hover:bg-primary/5
                hover:text-gray-900
              "
                        >
                          <span className="truncate">{page?.title}</span>

                          <span className="ml-2 text-gray-400">
                            <TbExternalLinkFilled
                              className={`${pageId == page?.id ? "group-hover:text-primary" : ""} `}
                            />
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            {/* User Icon - RIGHT SIDE */}{" "}
            <div className="ms-3">
              {msg?.type === "user" && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                  {" "}
                  <FiUser size={17} />{" "}
                </div>
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
