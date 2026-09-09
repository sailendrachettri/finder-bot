import React from "react";
import { FiSearch } from "react-icons/fi";

const ChatIntro = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-10 pt-5">

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
