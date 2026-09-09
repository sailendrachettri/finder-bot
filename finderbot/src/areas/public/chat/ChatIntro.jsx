import React from "react";
import { FiSearch } from "react-icons/fi";

const ChatIntro = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center px-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
        <FiSearch size={21} />
      </div>

      <h3 className="mt-4 text-base font-semibold text-gray-900">Hi! 👋</h3>

      <p className="mt-1 text-center text-sm leading-5 text-gray-500">
        What are you looking for?
        <br />
        I'll help you find the right page.
      </p>
    </div>
  );
};

export default ChatIntro;
