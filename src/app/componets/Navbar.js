import Tool from "./tools";
import { User } from "@/context";
import { useContext } from "react";
import { Font } from "@/context/font";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
const Navbar=()=>{
    const contxt=useContext(User);
    const font=useContext(Font)
    const color=["#F1F1F1","#1e1e1e","#e03131","#2f9e44","#1971c2"];
    return(
        <>
        <div className="w-full py-2 fixed  flex flex-col px-[2px] sm:px-5 "> 
        
        <div className="w-full flex justify-between items-center  pb-4  ">
        <div className={`w-[34px] h-[34px] sm:w-[51px] sm:h-[51px]  h-100  text-[18px] sm:text-[20px] rounded bg-black text-white flex items-center justify-center restricted`} ref={contxt.downloadref}>
               <IoMdDownload/>
               
            </div>
            <div className="w-fit h-fit restricted" ref={contxt.tol}><Tool ></Tool></div>
        
        <div className="w-[30px] h-[30px] bg-transparent hidden sm:block"></div>
       
        </div>
        
     {(font.style)? <div className="w-fit max-h-[calc(100vh-100px)]  rounded-md shadow-md shadow-stone-900 bg-white p-3 overflow-y-scroll no-scrollbar flex flex-col gap-3 restricted" onClick={()=>{contxt.setdraw(false)}} ref={contxt.stl}>
            
             {/* Stroke */}
           <div className="w-full flex flex-col gap-[10px] ">
             <div className="text-[13px]">Stroke</div>
             <div className="w-full h-fit flex gap-[5px] items-center">
              {color.map((arr,i)=>(<div className={` rounded-lg p-1 ${arr===font.stroke?"border-2":""} border-black`} onClick={()=>{font.setstroke(arr)}}>
              <div className="w-[24px] h-[24px] rounded-md" style={{backgroundColor:arr}}>
                
                </div>
              </div>))}

             
                <div className="w-[1.5px] h-[26px] bg-black">
                
                </div>
                <div className="w-[26px] h-[26px] rounded-md" style={{backgroundColor:font.stroke}}>
                
                </div>

             </div>

           </div>
            {/* stroke */}

              {/* Background */}
              <div className="w-full flex flex-col gap-[10px] ">
             <div className="text-[13px]">Background</div>
             <div className="w-full h-fit flex gap-[5px] items-center">
             {color.map((arr,i)=>(<div className={` rounded-lg p-1 ${arr===font.background?"border-2":""} border-black`} onClick={()=>{font.setbackground(arr)}}>
              <div className="w-[24px] h-[24px] rounded-md" style={{backgroundColor:arr}}>
                
                </div>
              </div>))}
             
                <div className="w-[1.5px] h-[26px] bg-black">
                
                </div>
                <div className="w-[26px] h-[26px]  rounded-md" style={{backgroundColor:font.background}}>
                
                </div>

             </div>

           </div>
            {/* Background*/}
            {/* strokewidth */}
            <div className="w-full flex flex-col gap-[10px] ">
             <div className="text-[13px]">Stroke Width</div>
             <div className="w-full h-fit flex gap-[9px] items-center">
              
              <div className={`w-[27px] h-[27px] ${font.strokewidth===5?"bg-blue-300":"bg-slate-300"} rounded-md flex justify-center items-center`} onClick={()=>{font.setstrokewidth(5)}}>
                <div className="w-[10px] h-[1px] bg-black"></div>
                </div>
                <div className={`w-[27px] h-[27px] ${font.strokewidth===10?"bg-blue-300":"bg-slate-300"} rounded-md flex justify-center items-center`} onClick={()=>{font.setstrokewidth(10)}} >
                <div className="w-[10px] h-[2.4px] bg-black"></div>
                </div>
                <div className={`w-[27px] h-[27px] ${font.strokewidth===15?"bg-blue-300":"bg-slate-300"} rounded-md flex justify-center items-center`} onClick={()=>{font.setstrokewidth(15)}}>
                <div className="w-[10px] h-[3.5px] bg-black"></div>
                </div>
             </div>

           </div>

             {/* strokewidth */}

             {/*font size */}


             <div className="w-full flex flex-col gap-[10px] ">
             <div className="text-[13px]">Font Size</div>
             <div className="w-full h-fit flex gap-[9px] items-center">
              
              <div className={`w-[30px] h-[30px] ${font.fontsize===10?"bg-blue-300":"bg-slate-300"} rounded-md flex justify-center items-center text-[16px]`} onClick={()=>{font.setfontsize(10)}}>
                S
                </div>
                <div className={`w-[30px] h-[30px] ${font.fontsize===20?"bg-blue-300":"bg-slate-300"} rounded-md flex justify-center items-center text-[16px]`} onClick={()=>{font.setfontsize(20)}}>
                M
                </div>
                <div className={`w-[30px] h-[30px] ${font.fontsize===30?"bg-blue-300":"bg-slate-300"} rounded-md flex justify-center items-center text-[16px]`} onClick={()=>{font.setfontsize(30)}}>
                L
                </div>
                <div className={`w-[30px] h-[30px] ${font.fontsize===40?"bg-blue-300":"bg-slate-300"} rounded-md flex justify-center items-center text-[16px]`} onClick={()=>{font.setfontsize(40)}}>
                XL
                </div>
                
             </div>

           </div>



             {/*font size */}

            
             {/*opacity*/}
             <div className="w-full flex flex-col gap-[10px] ">
             <div className="text-[13px]">Opacity</div>
            <input type="range" min={0} max={100} step={10} onChange={(e)=>{font.setopacity(e.target.value)}} value={font.opacity}></input>

           </div>

             {/*opacity*/}

        </div>:null}
        
       
        </div>  
        
        </>
    )
};
export default Navbar;


// const [stroke,setstroke]=useState("#F1F1F1");
// const [background,setbackground]=useState("#F1F1F1");
// const [strokewidth,setstrokewidth]=useState(5);
// const [fontsize,setfontsize]=useState(40);
// const [opacity,setopacity]=useState(0);
