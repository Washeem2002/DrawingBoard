'use client'
import {createContext, useRef,useState,useEffect, useContext, useLayoutEffect} from "react";
import square from "@/reducers/square";
import circle from "@/reducers/circle";
import roumbus from "@/reducers/roumbus";
import arrow from "@/reducers/arrow";
import line from "@/reducers/line";
import brush from "@/reducers/brush";
import image from "@/reducers/image";
import eracer from "@/reducers/erracer";
import { Font } from "./font";
export  const User=createContext(null);
export const AppWrapper=({children})=>{
    const ref=useRef(null);
    const ref2=useRef(null);
    // --which tool
    const [tno,settno]=useState(0);
    //--end
    //key
    const [word,setword]=useState(["|"]);

    //key-end
    //input ref
    const input =useRef(null);
    // input ref
    // toolbar ref
    const tol=useRef(null);
    // toolbar
    //style ref
    const stl=useRef(null);
    //style ref
    const font=useContext(Font)
    const [draw,setdraw]=useState(false);
    const [erace,seterace]=useState(false);
    const [x,setx]=useState(null);
    const [y,sety]=useState(null);
    const [img_data,setimg_data]=useState(null);
    const [text,settext]=useState(false);
    
   const [img,setimg]=useState(null);
   const [points,setpoints]=useState([]);
   const [screen,setscreen]=useState(null);
    const cl=(e)=>{
     
      
      const canvas = ref.current;
      
      const ctx = canvas.getContext("2d");
      ctx.lineWidth=font.strokewidth;
      ctx.fillStyle=(font.background);
      ctx.strokeStyle=font.stroke;
      ctx.font=`${font.fontsize}px Arial`;
      ctx.globalAlpha=1-font.opacity/100;
      const rect = canvas.getBoundingClientRect();
    
    
      if(tol )
        {if(tol.current.contains(e.target) )
          {
          
            
            if(tno==6 && text)
              {
                
                ctx.lineWidth=font.strokewidth;
                    ctx.fillStyle=(font.background);
                    ctx.strokeStyle=font.stroke;
                   ctx.font=`${font.fontsize}px Arial`;
                   ctx.globalAlpha=1-font.opacity/100;
                   ctx.clearRect(0, 0, canvas.width, canvas.height);
                   let x2=x;
                   let y2=y;
                   if(img_data)
                     {
                       ctx.putImageData(img_data, 0, 0);
                     }
                     const t=(input.current.value).split("");
                     console.log(t)
                     let tex="";
                     for(let i=0;i<t.length;i++)
                      {
                        if(t[i]==="\n")
                          {
                            ctx.fillText(tex, x2, y2);
                            y2+=font.fontsize;
                            tex=""
                          }
                          else{
                              tex+=t[i];
                          }
                      }
                      ctx.fillText(tex, x2, y2);
                     
                      const image=ctx.getImageData(0, 0, canvas.width, canvas.height);
                      setimg_data(image);
                      settext(!text);
                      input.current.blur();
          
          
          
          
          }
            
            return;
          }}
          if(stl.current)
            {
              if(stl.current.contains(e.target) )
                {
                  
                  if(tno===6 && text)
                    {

                      ctx.lineWidth=font.strokewidth;
                    ctx.fillStyle=(font.background);
                    ctx.strokeStyle=font.stroke;
                   ctx.font=`${font.fontsize}px Arial`;
                   ctx.globalAlpha=1-font.opacity/100;
                   ctx.clearRect(0, 0, canvas.width, canvas.height);
                   if(img_data)
                     {
                       ctx.putImageData(img_data, 0, 0);
                     }
                     ctx.fillText(input.current.value, x, y);
                      const image=ctx.getImageData(0, 0, canvas.width, canvas.height);
                      setimg_data(image);
                      settext(!text);
                      input.current.blur();
                    }
                  
                  return;
                }
            }
      
      setdraw(true);
     
      if(tno==6)
        {
           
           if(!text)
            {   
              const x1 = e.touches?e.touches[0].clientX:e.clientX ;
              const y1 = e.touches?e.touches[0].clientY:e.clientY ;
                setx(x1);
                sety(y1);
                
                
                if(input.current)
                  {
                    input.current.value="";
                    input.current.focus();
                    ctx.lineWidth=font.strokewidth;
                    ctx.fillStyle=(font.background);
                    ctx.strokeStyle=font.stroke;
                   ctx.font=`${font.fontsize}px Arial`;
                   ctx.globalAlpha=1-font.opacity/100;
                    ctx.fillText("|", x1, y1);
                  }
                    

                    
                    settext(!text);}

                    else{
                      
      
                      ctx.lineWidth=font.strokewidth;
                    ctx.fillStyle=(font.background);
                    ctx.strokeStyle=font.stroke;
                   ctx.font=`${font.fontsize}px Arial`;
                   ctx.globalAlpha=1-font.opacity/100;
                   ctx.clearRect(0, 0, canvas.width, canvas.height);
                   let x2=x;
                   let y2=y;
                   if(img_data)
                     {
                       ctx.putImageData(img_data, 0, 0);
                     }
                     const t=(input.current.value).split("");
                     console.log(t)
                     let tex="";
                     for(let i=0;i<t.length;i++)
                      {
                        if(t[i]==="\n")
                          {
                            ctx.fillText(tex, x2, y2);
                            y2+=font.fontsize;
                            tex=""
                          }
                          else{
                              tex+=t[i];
                          }
                      }
                      ctx.fillText(tex, x2, y2);
                      const image=ctx.getImageData(0, 0, canvas.width, canvas.height);
                      setimg_data(image);
                      settext(!text);
                      input.current.blur();
                      

                      
                    }
                    
                    return;
        }

        const x1 = e.touches?e.touches[0].clientX:e.clientX ;
      const y1 = e.touches?e.touches[0].clientY:e.clientY ;
     
      setx(x1);
      sety(y1);
     
    
      
        if(tno==8)
          {
            ctx.clearRect(x1-15,y1-15,30,30)
          }
        if(tno==5)
          {
            setpoints((points)=>[{x1:e.clientX ,y1:e.clientY}])
          }
       
    }

  
    const rect=(e)=>{
      if(tno===6)
        {
          return;
        }
     
       if(draw)
        {

          switch(tno){
            case 0:
              square(e,img_data,x,y,ref);
              break;
            case 1:
              circle(e,img_data,x,y,ref);
              break;
            case 2:
              roumbus(e,img_data,x,y,ref);
              break;
            case 3:
              arrow(e,img_data,x,y,ref);
              break;
            case 4:
              line(e,img_data,x,y,ref);
              break;
            case 5:
              brush(e,img_data,ref,points,setpoints);  
              break;
            case 7:
              image(e,img_data,x,y,ref,img);
              break;
            case 8:
              eracer(e,ref);
              break;





          }
         
            
        }
    }
  
    // rectangle
    const clearcan=()=>{
      seterace(!erace);
     
    }
   
   

 // case 6

    const textch=(e)=>{
      console.log(e.target.value.split(""));

      const canvas=ref.current;
      const ctx=canvas.getContext("2d");
      ctx.lineWidth=font.strokewidth;
      ctx.fillStyle=(font.background);
      ctx.strokeStyle=font.stroke;
      ctx.font=`${font.fontsize}px Arial`;
      ctx.globalAlpha=1-font.opacity/100;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if(img_data)
        {
          ctx.putImageData(img_data, 0, 0);
        }
        let x2=x;
        let y2=y;
        if(img_data)
          {
            ctx.putImageData(img_data, 0, 0);
          }
          const t=(input.current.value).split("");
          console.log(t)
          let tex="";
          for(let i=0;i<t.length;i++)
           {
             if(t[i]==="\n")
               {
                 ctx.fillText(tex, x2, y2);
                 y2+=font.fontsize;
                 tex=""
               }
               else{
                   tex+=t[i];
               }
           }
           ctx.fillText(tex+"|", x2, y2);
        
    }
    




    const close=()=>{
      if(tno===6)
        {
          return;
        }
      const canvas = ref.current;
      
      const ctx = canvas.getContext("2d");
      const image=ctx.getImageData(0, 0, canvas.width, canvas.height);
      setimg_data(image);
      setdraw(false);
      
    }
    
//  case 6
    

useEffect(() => {
  
  const setCanvasSize = () => {
    
    
      setscreen({a:window.innerWidth,b:window.innerHeight})
  };
  
  
  window.addEventListener('resize', setCanvasSize); // Adjust size on window resize

  return () => {
    window.removeEventListener('resize', setCanvasSize); // Cleanup listener on unmount
  };
}, [ref]);
useEffect(()=>{
    console.log(window.innerWidth);
    const canvas = ref.current;
   
       canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
       const ctx = canvas.getContext("2d");
  
       console.log("before")
    
  
     if(img_data!==null)
       {
         ctx.putImageData(img_data, 0, 0);
         console.log("hello")
       }
      
       
      console.log(img_data)
},[screen])
useEffect(()=>{
console.log(img_data)
},[img_data])
    const t=90
    return(
      <User.Provider value={{t,ref,ref2,cl,rect,setdraw,tno,settno,setimg,draw,tol,stl,input,close,textch}}>
        {children}
         
         
      </User.Provider>
    )
}
