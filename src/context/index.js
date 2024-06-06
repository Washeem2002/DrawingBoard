'use client'
import {createContext, useRef,useState,useEffect} from "react"
export  const User=createContext(null);
export const AppWrapper=({children})=>{
    const ref=useRef(null);
    // --which tool
    const [tno,settno]=useState(0);
    //--end
    const [draw,setdraw]=useState(false);
    const [erace,seterace]=useState(false);
    const [x,setx]=useState(null);
    const [y,sety]=useState(null);
    const [img_data,setimg_data]=useState(null);
    const cl=(e)=>{

      const canvas = ref.current;
      const ctx = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX ;
      const y = e.clientY ;
      setx(x);
      sety(y);
      setdraw(true);
      ctx.save();
      const image=ctx.getImageData(0, 0, canvas.width, canvas.height);
      setimg_data(image)
  
    }
    const rect=(e)=>{
       if(draw)
        {
          const canvas = ref.current;
          const ctx = canvas.getContext("2d");
          const rect = canvas.getBoundingClientRect();
          const x1 = e.clientX - rect.left;
          const y1 = e.clientY - rect.top;
          ctx.restore();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if(img_data)
            {
              ctx.putImageData(img_data, 0, 0);
            }

            
            const radius = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));

            if(tno==0)
              {
               ctx.fillStyle = 'blue';
               ctx.fillRect(x, y, x1-x, y1-y);
              }
              if(tno==1)
                {
                  ctx.beginPath();
                 ctx.arc(x, y, radius, 0, 2 * Math.PI);
                 ctx.fillStyle = 'red';
                 ctx.fill();
                }
            if(tno==2)
              {
                ctx.beginPath();
                ctx.moveTo(x+(x1-x)/2,y);
                 ctx.lineTo(x,y+(y1-y)/2);
                ctx.lineTo(x+(x1-x)/2,y1);
                 ctx.lineTo(x1,y+(y1-y)/2);
                 ctx.fillStyle = 'red';
                 ctx.fill();               

              }

              if(tno==3)
                {
                  ctx.beginPath();
                  ctx.moveTo(x,y);
                   ctx.lineTo(x1,(y1));
                   
                  
                 ctx.stroke();
                }
  
        }
    }
  
    // rectangle
    const clearcan=()=>{
      seterace(!erace);
     
    }
    useEffect(() => {
      const canvas = ref.current;
      if (canvas) {
        canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
      }
      
    }, [])
    const t=90
    return(
      <User.Provider value={{t,ref,cl,rect,setdraw,tno,settno}}>
         {children}
      </User.Provider>
    )
}
