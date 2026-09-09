import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const TypingEffectText = ({ text1, style }) => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text1.length) {
        setCurrentText(text1.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text1]);

  return (
    <div className={style || "text-xs text-gray-400"}>
      {currentText}
      {isTyping && <span>|</span>}
    </div>
  );
};

export default TypingEffectText;