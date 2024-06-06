import { BiRectangle } from "react-icons/bi";
import { LuCircle } from "react-icons/lu";
import { PiDiamondBold } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { RiText } from "react-icons/ri";
import { RxImage } from "react-icons/rx";
import { LuEraser } from "react-icons/lu";
import { IoIosColorPalette } from "react-icons/io";
import { User } from "@/context";
import { useContext } from "react";
const Tool=()=>{

    const {t,ref,cl,rect,setdraw,tno,settno}=useContext(User);
    const tool=[
      <BiRectangle/>,
      <LuCircle/>,
      <PiDiamondBold/>,
      <IoIosArrowRoundForward/>,
      <IoRemoveOutline/>,
      <GoPencil/>,
      <RiText/>,
      <RxImage/>,
      <LuEraser/>]
    return(
        <>
        <div className="p-[7px]   bg-black text-white rounded-md">
         <div className="w-full flex gap-2 text-[20px] ">
            
            {
              tool.map((arr,i)=>{
                return(
                  <div className={`p-3 hover:bg-red-700 ${tno==i?"bg-red-700":""} rounded relative`} key={i} onClick={()=>{settno(i)}}>
               {arr}
               <div className="w-fit h-fit text-[12px] absolute right-1 bottom-1">{i}</div>
            </div>
                )
              })
            }
            <div className="bg-slate-200 h-100 w-[1px]"></div>
            <div className="p-3 hover:bg-red-700 rounded relative">
              <IoIosColorPalette/>
              <div className="w-fit h-fit text-[12px] absolute right-1 bottom-1">0</div>
            </div>
           
         </div>

        </div>
        
        
        </>
    )
}
export default Tool;