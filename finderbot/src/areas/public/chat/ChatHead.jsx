import React from "react";
import { TbMessageChatbot } from "react-icons/tb";

const ChatHead = ({ isOpen, setIsOpen }) => {
  return (
    <>
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
            bg-primary
            text-white
            shadow-lg
            transition
            hover:scale-105
            hover:bg-primary/90 cursor-pointer
          "
          aria-label="Open FinderBot"
        >
          <TbMessageChatbot size={43} />
        </button>
      )}
    </>
  );
};

export default ChatHead;
