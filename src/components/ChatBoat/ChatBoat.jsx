"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ChatBoat = () => {
  const [open, setOpen] = useState(false);
  const [chatStarted , setChatStarted ] = useState(false)

  return (
    <>
      {/* Floating Chat Icon */}
      <img
        src="chatboat.png"
        alt="chat_boat"
        className="fixed w-20 h-48 object-cover bottom-50 left-0 z-50 cursor-pointer"
        onClick={() => setOpen(!open)} // 👈 toggle open
      />

      {/* Chat Window (only show when open true) */}
      {open && (
        <div className="fixed md:bottom-21 md:left-20 bottom-20 left-8 h-100 w-80 bg-white rounded-2xl shadow-lg z-50">
          {/* Header */}
          <div className="bg-[#D01A1A] h-20 rounded-t-2xl px-4 py-2 text-white">
            <p className="text-2xl font-bold">XTORC</p>
            <span className="text-sm">Replies in few seconds</span>
          </div>

          {/* Body */}
          <div className="p-4">
         {!chatStarted ? (
             
            <div className="bg-[#D01A1A] rounded-3xl w-full h-12 my-60 flex items-center justify-center cursor-pointer"
            onClick={() =>  setChatStarted(true)}
            >
              <p className="flex items-center gap-2 text-white font-medium">
                Start conversation
                <MdOutlineKeyboardArrowRight className="text-white text-2xl" />
              </p>
            </div>
         ) :(
            <div className="flex items-center gap-3  px-3 py-2 my-63">
                <img src="mood.png" alt="mood" className="h-6 w-6 cursor-pointer" />
                <img src="attach_file.png" alt="attach" className="h-5 w-5 cursor-pointer" />
                <input
  type="text"
  placeholder="Type your message..."
  className="flex-1 min-w-0 text-lg font-poppins rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.2)] bg-white text-black pl-2"
/>
                
              </div>
         )}
          </div>


          {/* Close Button */}
          

        <div
            className="absolute -bottom-20 mx-33 h-15 w-15 bg-white rounded-full shadow flex items-center justify-center cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <img
              src="dangerous.png"
              alt="Cross Logo"
              className="h-9 w-9"
            />
          </div>
                  </div>
      )}
    </>
  );
};

export default ChatBoat;
