'use client'
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  
  function handleButton() {
    window.location.href = "/about"
  }

  return (
    <div>
      <p>Home</p>
      <button className = "bg-gray-300 px-4 py-4 rounded-lg cursor-pointer" onClick={handleButton}>About Me</button>
    </div>
  );
}
