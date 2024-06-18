"use Client"
import { Roboto } from 'next/font/google';
import { User } from '@/context';
import { useContext } from 'react';
import { Font } from '@/context/font';
 

import { useRef, useState ,useEffect} from "react"
import Navbar from './Navbar'

const Canvas=()=>{
    
    
     const {t,ref,ref2,cl,rect,setdraw,tno,settno,setimg,draw,tol,stl,input}=useContext(User);
     const font=useContext(Font);
     const [int,setint]=useState(false);
     let istouch=useRef(false);
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
      <div  className="overflow-hidden no-scroolbar" onMouseDown={
        (e)=>{
          e.preventDefault();
          if(istouch.current)
            {
              return;
            }
            
            
            
          cl(e)
        }
        
      
      
      } 
      
      onMouseMove={
        
        
        (e)=>{
          if(istouch.current)
            {
              return;
            }
            rect(e);
        }
        
      
      
      
      } onMouseUp={()=>{
        
        if(istouch.current)
          {
            return;
          }
        setdraw(false)
      
      
      
      }} 
      
      onTouchStart={(e)=>{
       
        istouch.current=true;
        cl(e);
        
      
      
      }}
      onTouchMove={(e)=>{
        istouch.current=true;
        rect(e.touches[0]);
      }}
      onTouchEnd={(e)=>{
        
        istouch.current=true;
        setdraw(false)
      
      }}
      
      
      ref={ref2}>
   <Navbar/>  
      <canvas
         
         
         
        ref={ref}
        
      >
       
     


      </canvas>
      <input type="text" className="absolute left-[50px] top-[30px] border-2 border-red-800 hidden" ref={input}></input>
      </div>
    
     
    </>
  );
}

export default Canvas