import React from "react";

const ChatSuggestions = ({ pages, submitMessage }) => {
 

  return (
    <div className="mt-6 flex w-full flex-col gap-2">
      {pages?.map((suggestion) => (
        <button
          key={suggestion.id}
         onClick={() => submitMessage(suggestion.title)}
          className="
            rounded-xl
            border
            border-gray-200
            px-3
            py-2.5
            text-left
            text-xs
            text-gray-600
            transition
            hover:bg-gray-50
            hover:text-gray-900
          "
        >
          {suggestion.title}
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;