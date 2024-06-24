"use Client"
import { Roboto } from 'next/font/google';
import { User } from '@/context';
import { useContext } from 'react';
import { Font } from '@/context/font';
 

import { useRef, useState ,useEffect} from "react"
import Navbar from './Navbar'

const Canvas=()=>{
    
    
     const {t,ref,ref2,cl,rect,setdraw,tno,settno,setimg,draw,tol,stl,input,close,textch}=useContext(User);
     const font=useContext(Font);
     const [int,setint]=useState(false);
     let istouch=useRef(false);
     
      
  return (
    <>
      <div  className="overflow-hidden" onMouseDown={
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
        close()
      
      
      
      }} 
      
      onTouchStart={(e)=>{
       e.preventDefault();
        istouch.current=true;
        cl(e);
        
      
      
      }}
      onTouchMove={(e)=>{
        istouch.current=true;
        rect(e.touches[0]);
      }}
      onTouchEnd={(e)=>{
        
        istouch.current=true;
       close();
      
      }}
      
      
      ref={ref2}>
   <Navbar/>  
      <canvas
         
         
         
        ref={ref}
        
      >
       
     


      </canvas>
      <textarea className="absolute left-[-5000px] top-[-3000px] border-2 border-red-800" ref={input} onChange={textch}></textarea>
      </div>
    
     
    </>
  );
}

export default Canvas