"use Client"
import { Roboto } from 'next/font/google';
import { User } from '@/context';
import { useContext } from 'react';
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
import { useRef, useState ,useEffect} from "react"
import Navbar from './Navbar'

const Canvas=()=>{

     const {t,ref,cl,rect,setdraw,tno,settno}=useContext(User);
      
  return (
    <>
      <div className="w-fit h-fit  "
      onMouseDown={cl}
        onMouseMove={rect}
        onMouseUp={()=>{setdraw(false)}}>
   <Navbar/>  
      <canvas
         
         
         
        ref={ref}
        
      >
     


      </canvas>
      </div>
    
     
    </>
  );
}

export default Canvas