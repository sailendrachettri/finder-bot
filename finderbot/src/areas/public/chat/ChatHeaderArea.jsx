import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

const ChatHeaderArea = ({ setIsOpen }) => {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            <FiSearch size={17} />
          </div>

          <div>
            <h2 className="text-sm font-semibold">FinderBot</h2>

            <p className="text-xs text-gray-400">Find pages in your portal</p>
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
