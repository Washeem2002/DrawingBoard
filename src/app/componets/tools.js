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
import { useContext, useRef } from "react";
const Tool=()=>{

    const {t,ref,ref2,cl,rect,setdraw,tno,settno,setimg}=useContext(User);
    const ref3=useRef(null)
    const tool=[
      <BiRectangle/>,
      <LuCircle/>,
      <PiDiamondBold/>,
      <IoIosArrowRoundForward/>,
      <IoRemoveOutline/>,
      <GoPencil/>,
      <RiText/>,
      <RxImage/>,
      <LuEraser/>];

  const scale=()=>{
    const canvas=ref.current;
    const ctx=canvas.getContext("2d");
    const image_data=ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale()
  };

  const handleimage=(event)=>{
    
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setimg(reader.result);
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
    } else {

     setimg(null);
    }
   
  }
     
    return(
        <>
        <div className="p-[7px]   bg-black text-white rounded-md">
         <div className="w-full flex gap-2 text-[20px] ">
            
            {
              tool.map((arr,i)=>{
                return(
                  <div className={`p-3 hover:bg-red-700 ${tno==i?"bg-red-700":""} rounded relative`} key={i} onClick={()=>{
                    settno(i);
                    if(i===7)
                    {ref3.current.click();}

                  }}>
               {arr}
               <div className="w-fit h-fit text-[12px] absolute right-1 bottom-1">{i}</div>
            </div>
                )
              })
            }

<input 
        type="file"
        accept='image/*' 
        ref={ref3} 
        style={{ display: 'none' }} 
        onChange={handleimage}
      />
            <div className="bg-slate-200 h-100 w-[1px]"></div>
            <div className="p-3 hover:bg-red-700 rounded relative" >
              <IoIosColorPalette/>
              <div className="w-fit h-fit text-[12px] absolute right-1 bottom-1">9</div>
            </div>
           
         </div>

        </div>
        
        
        </>
    )
}
export default Tool;