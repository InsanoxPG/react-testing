'use client'
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  
  const [name, setName] = useState<String | null>("");


  const handleButtonClick = () => {
        // window.open("https://www.youtube.com", "_blank", "noopener,noreferrer");
        setName(prompt("whats ur name"));


  }

  const submit = () => {
    window.open(`https://www.google.com/search?q=${name}`)
  }

  return (
   <div className="flex gap-4 flex-col align-middle justify-center items-center h-screen">
    <p className="text-blue-800">Code with Minh-Ky</p>
    <button onClick={handleButtonClick} className="bg-gray-500 px-4 py-4 rounded-lg cursor-pointer align-middle">youtube</button>
    <div className="flex flex-col align-middle">
    <label htmlFor="name">Enter your name</label>
    <input id="name" className="bg-white text-green-500" placeholder="Bob" type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={submit} className="bg-gray-500 px-4 py-4 rounded-lg cursor-pointer align-middle">search google</button>

    <p className="text-red-500">{name}</p>
    </div>
   </div>
  );
}
