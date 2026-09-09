import React from "react";

const ChatSuggestions = ({ handleSuggestion }) => {
  return (
    <>
      <div className="mt-6 flex w-full flex-col gap-2">
        <button
          onClick={() => handleSuggestion("Where can I manage employees?")}
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
          Where can I manage employees?
        </button>

        <button
          onClick={() => handleSuggestion("Where can I check attendance?")}
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
          Where can I check attendance?
        </button>

        <button
          onClick={() => handleSuggestion("Where can I manage leave?")}
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
          Where can I manage leave?
        </button>
      </div>
    </>
  );
};

export default ChatSuggestions;
