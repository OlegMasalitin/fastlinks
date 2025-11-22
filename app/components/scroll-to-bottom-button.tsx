'use client'; // required if using Next.js App Router

import { LuArrowDown } from 'react-icons/lu';

export default function ScrollToBottomButton() {
  const scrollToBottom = () => {
    const obj = document.documentElement;
    if (obj) {
      obj.scrollTop = obj.scrollHeight;
    }
  };

  return (
    <button className="px-3 py-1 bg-sky-300 rounded text-xl opacity-70" onClick={scrollToBottom}>
      <LuArrowDown />
    </button>
  );
}
