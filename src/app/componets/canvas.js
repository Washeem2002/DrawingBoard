"use Client"
import { Roboto } from 'next/font/google';
import { User } from '@/context';
import { useContext } from 'react';
import { Font } from '@/context/font';
 

import { useRef, useState ,useEffect} from "react"
import Navbar from './Navbar'

const Canvas=()=>{

     const {t,ref,ref2,cl,rect,setdraw,tno,settno,setimg}=useContext(User);
     const font=useContext(Font);
     useEffect(() => {
      const canvas = ref.current;
      const setCanvasSize = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };
      
      setCanvasSize(); // Set initial size
      window.addEventListener('resize', setCanvasSize); // Adjust size on window resize
    
      return () => {
        window.removeEventListener('resize', setCanvasSize); // Cleanup listener on unmount
      };
    }, [ref]);
      
  return (
    <>
      <div  className="overflow-hidden no-scroolbar" onMouseDown={cl} onMouseMove={rect} onMouseUp={()=>{setdraw(false)}} 
      
      onTouchStart={(e)=>{cl(e.touches[0]);}}
      onTouchMove={(e)=>{rect(e.touches[0])}}
      onTouchEnd={(e)=>{setdraw(false)}}
      
      
      ref={ref2}>
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