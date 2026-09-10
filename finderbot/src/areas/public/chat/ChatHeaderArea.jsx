import React from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { TbMessageChatbot } from "react-icons/tb";
import TypingEffectText from "../../../reusable/TypingEffectText";

const ChatHeaderArea = ({ setIsOpen }) => {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex p-1 items-center justify-center rounded-xl bg-primary/5 text-primary">
            <TbMessageChatbot size={42} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">PortalGuide</h2>

            
            <TypingEffectText text1="Find the right page, instantly" style={"text-xs text-gray-400 "}/>
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
                    hover:text-gray-700 cursor-pointer
                  "
        >
          <FiX size={18} />
        </button>
      </div>
    </>
  );
};

export default ChatHeaderArea;
