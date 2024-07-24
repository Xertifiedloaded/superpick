import React from 'react'

export default function Button({ children, bg, width, height, text }) {
    return (
      <button className={`bg-[#216A20] w-[120px] text-xs mt-4 text-[#FFC93D] rounded-lg h-[45px] text-${text}`}>
        {children}
      </button>
    );
  }