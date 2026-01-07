'use client'

import { useState } from "react";

export default function Home() {

  const DATA = ["Blue jacket", "Glasses"]
  const [doorState, setDoorState] = useState<boolean | null>(null)
  const [isCodeCorrect, setIsCodeCorrect] = useState<boolean | null>(null)

  const handleDoorClick = async (isOpen: boolean) => {
    try {
      const response = await fetch("/api/door", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "door_is_open": isOpen
        })
      })
      const data = await response.json()
      setDoorState(data.door_is_open)
    } catch (error) {
      console.error("Failed to update door:", error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black w-screen">

      <main className="flex min-h-screen  py-32 px-16 bg-red-200 dark:bg-black sm:items-start justify-around w-screen">


<div>
        <h1 className="font-['Moga'] text-6xl">Clues</h1> <hr></hr>
      <ul>
      {DATA.map((e, i)=>{
        return (
          <li key={i}>{e}</li>
        )
      })}
      </ul>

</div>
      <button onClick={() => handleDoorClick(true)}  className="bg-red-700 cursor-pointer p-4 rounded-sm font-['PT']">Open door</button>
      {/*<button onClick={() => handleDoorClick(false)} className="bg-blue-700 p-4 rounded-sm font-['PT']">Close door</button>*/}


      </main>
      
        {!isCodeCorrect && 
<form>   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        </div>
        <input type="search" id="search" className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Code" required />
        <button type="button" className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
    </div>
</form>
}

    </div>
  );
}
