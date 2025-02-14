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
      <One reference={ref1} onDone={()=>{
        ref2.current.focus();
      }} />
      <One reference={ref2} onDone={()=>{
        ref3.current.focus();
      }}  />
      <One reference={ref3} onDone={()=>{
        ref4.current.focus();
      }} />
      <One reference={ref4} onDone={()=>{
        ref5.current.focus();
      }} />
      <One reference={ref5} onDone={()=>{
        setEnd(true);
        
      }} />
      
    </div>
    <br />
        
        <BTN end={end} fnn={()=>{
          alert("s");
        }} />
    </div>
  )
}



function One({reference,onDone}){
  return(
    <>
      <input ref={reference} onChange={(e)=>{
        onDone();
      }} className="w-[30px] h-[40px] bg-blue-500 outline-none px-2 text-white"
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