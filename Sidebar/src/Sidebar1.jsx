import { useState } from "react";

export const Sidebar1 =()=>{
  const [darki ,setdarkii] = useState(true);

  return  (
    <div className={`${darki ? "dark" : ""}`}>

        
        <div className="dark:bg-black h-20 w-20 bg-pink-200">
          <p class="dark:text-white text-black">hello</p>
        </div> 

        <button onClick={()=>{
          setdarkii((c)=>!c);
          console.log(darki);
          
          
        }}>toggle</button>

    </div>
  )
} 