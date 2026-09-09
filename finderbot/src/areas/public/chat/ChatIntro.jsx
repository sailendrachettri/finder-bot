import { PiHandWavingBold } from "react-icons/pi";



const ChatIntro = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-10 pt-5">

      <div className="mt-4 text-base font-semibold text-gray-900 flex items-center justify-center gap-x-2 flex-nowrap"><div>Hi!</div> <PiHandWavingBold size={22} className="text-primary" /></div>

      <p className="mt-1 text-center text-sm leading-5 text-gray-500">
        What are you looking for?
        <br />
        I'll help you find the right page.
      </p>
    </div>
  );
};

export default ChatIntro;
