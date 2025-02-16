import { useState } from "react";

export const Sidebar1 =()=>{
  const [darki ,setdarkii] = useState(true);

  return  (
    <div className={`${darki ? "dark" : ""}`}>

        <div className="dark:bg-green-600 h-20 w-20 bg-red-200">
        </div> 

        <button onClick={()=>{
          setdarkii((c)=>!c);
          console.log(darki);
          
          
        }}>toggle</button>

    </div>
  )
} 