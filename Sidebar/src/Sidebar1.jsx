import { useState } from "react";

export const Sidebar1 =()=>{
  const [darki ,setdarkii] = useState(true);

  return  (
    <div className="flex">

        <div className={`h-screen ${darki ? "dark:bg-green-600" : "bg-red-200"} flex-1`}>
        </div> 

        <button onClick={()=>{
          setdarkii((c)=>!c);
          console.log({darki});
          
        }}>toggle</button>

    </div>
  )
} 