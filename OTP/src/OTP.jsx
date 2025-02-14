import { useRef, useState } from "react"







export const OTP = ()=>{
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  const [end , setEnd] = useState(false);

  return(
    <div className="bg-blue-700 h-screen flex justify-center items-center flex-col">
    < div className=" flex gap-1 " >


      <One reference={ref1} onDone={(e)=>{
        ref2.current.focus();
      }}

      onBackspace={()=>{
        ref1.current.focus();
      }}
      
      />


      <One reference={ref2} onDone={()=>{
        ref3.current.focus();
      }} 
      onBackspace={()=>{
        ref1.current.focus();
      }}
      />


      <One reference={ref3} onDone={()=>{
        ref4.current.focus();
      }}
      onBackspace={()=>{
        ref2.current.focus();
      }} />


      <One reference={ref4} onDone={()=>{
        ref5.current.focus();
      }}
      onBackspace={()=>{
        ref3.current.focus();
      }} />


      <One reference={ref5} onDone={()=>{
        setEnd(true);
      }} 
      onBackspace={()=>{
        ref4.current.focus();
      }}/>
      
        </div>
        <br />
        
        <BTN end={end} fnn={()=>{
          alert("s");
        }} />
    </div>
  )
}



function One({reference,onDone , onBackspace}){
  return(
    <>
      <input ref={reference} onChange={(e)=>{
        onDone();
      }} 
      
      onKeyDown={(e) => {
        if (e.key === "Backspace" && !e.target.value) {
          onBackspace();
        }
      }}
      className="w-[30px] h-[40px] bg-blue-500 outline-none px-2 text-white"
      />
    </>
  )
}


function BTN({end,fnn}){
  return(
    <>
      <div onClick={fnn} className={`${end?"bg-red-400":"bg-gray-300"}`}  >confirm</div>
    </>
  )
}