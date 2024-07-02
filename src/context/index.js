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
import redraw from "@/reducers/redraw";
import find from "@/reducers/find";
import move from "@/reducers/move";
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
   const [shapes,setshapes]=useState([]);
   const [end,setend]=useState(null);
   const [originaldata,setoriginaldata]=useState(null);
   
    const cl=(e)=>{
     
      
      const canvas = ref.current;
      
      const ctx = canvas.getContext("2d");
      
      const rect = canvas.getBoundingClientRect();
    
      ctx.lineWidth=font.strokewidth;
      ctx.fillStyle=(font.background);
      ctx.strokeStyle=font.stroke;
      ctx.font=`${font.fontsize}px Arial`;
      ctx.globalAlpha=1-font.opacity/100;
      if(tol )
        {if(tol.current.contains(e.target) )
          {
          
            
            if(tno==6 && text)
              {
                
              
                   ctx.clearRect(0, 0, canvas.width, canvas.height);
                   let x2=x;
                   let y2=y;
                   
                   redraw(shapes,ref)
                     const t=(input.current.value).split("");
                     ctx.lineWidth=font.strokewidth;
                    ctx.fillStyle=(font.background);
                    ctx.strokeStyle=font.stroke;
                   ctx.font=`${font.fontsize}px Arial`;
                   ctx.globalAlpha=1-font.opacity/100;
                     let tex="";
                     let ex=x;
                     let maxex=x;
                     for(let i=0;i<t.length;i++)
                      {
                        if(t[i]==="\n")
                          {
                            maxex=Math.max(maxex,ex);
                            ex=x;
                            ctx.fillText(tex, x2, y2);
                            y2+=font.fontsize;
                            tex=""
                          }
                          else{
                            ex=ex+font.fontsize
                              tex+=t[i];
                          }
                      }
                      ctx.fillText(tex, x2, y2);
                     
                      maxex=Math.max(ex,maxex);
                      settext(!text);
                      input.current.blur();
                      setshapes((shapes)=>{
                        let sh={};
                        sh.tno=tno;
                        sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
                        sh.data={sx:x,sy:y,ex:maxex,ey:y2+font.fontsize,text:t};
                        return [...shapes,sh];
             
             
                       })
          
          
          
          
          }
            
            return;
          }}
          if(stl.current)
            {
              if(stl.current.contains(e.target) )
                {
                  
                  if(tno===6 && text)
                    {
                     
                      
                      let fot={strokewidth:font.strokewidth,background:font.background,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity}
               ctx.clearRect(0, 0, canvas.width, canvas.height);
               let x2=x;
               let y2=y;
               
               redraw(shapes,ref)
                 const t=(input.current.value).split("");
                 ctx.lineWidth=fot.strokewidth;
                    ctx.fillStyle=(fot.background);
                    ctx.strokeStyle=fot.stroke;
                   ctx.font=`${fot.fontsize}px Arial`;
                   ctx.globalAlpha=1-fot.opacity/100;
                   let ex=x;
                     let maxex=x;
                 let tex="";
                 for(let i=0;i<t.length;i++)
                  {
                    if(t[i]==="\n")
                      { 
                        maxex=Math.max(maxex,ex);
                        ex=x;
                        ctx.fillText(tex, x2, y2);
                        y2+=font.fontsize;
                        tex=""
                      }
                      else{
                        ex=ex+fot.fontsize
                          tex+=t[i];
                      }
                  }
                  ctx.fillText(tex, x2, y2);
                 
                  
                  settext(!text);
                  input.current.blur();
                  setshapes((shapes)=>{
                    let sh={};
                    sh.tno=tno;
                    sh.font={background:fot.background,strokewidth:fot.strokewidth,stroke:fot.stroke,fontsize:fot.fontsize,opacity:fot.opacity};
                    sh.data={sx:x,sy:y,ex:x2+fot.fontsize,ey:y2+fot.fontsize,text:t};
                    return [...shapes,sh];
         
         
                   })
                     
                    }
                  
                  return;
                }
            }

            
      
      
     
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
                      
      
                      
                   
                   let x2=x;
                   let y2=y;
                   ctx.clearRect(0, 0, canvas.width, canvas.height);
                   redraw(shapes,ref)
                   ctx.lineWidth=font.strokewidth;
                   ctx.fillStyle=(font.background);
                   ctx.strokeStyle=font.stroke;
                  ctx.font=`${font.fontsize}px Arial`;
                  ctx.globalAlpha=1-font.opacity/100;
                   
                     const t=(input.current.value).split("");
                     
                     let tex="";
                   
                     let maxex=0;
                     for(let i=0;i<t.length;i++)
                      {
                        if(t[i]==="\n")
                          {
                            
                            const mesure=ctx.measureText(tex);
                            maxex=Math.max(mesure.width,maxex);
                            ctx.fillText(tex, x2, y2);
                            y2+=font.fontsize;
                            tex=""
                          }
                          else{
                              tex+=t[i];
                              
                          }
                      }
                      const mesure=ctx.measureText(tex);
                      maxex=Math.max(mesure.width,maxex);
                      ctx.fillText(tex, x2, y2);
                     console.log(maxex)
                      settext(!text);
                      input.current.blur();
                      
                      setshapes((shapes)=>{
                        let sh={};
                         sh.tno=tno;
                         sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
                         sh.data={sx:x,sy:y,ex:x+maxex,ey:y2,text:t};
                        return [...shapes,sh];


                          })
                      

                     

                      
                    }
                    
                    return;
        }
    

        const x1 = parseInt(e.touches?e.touches[0].clientX:e.clientX) ;
      const y1 =parseInt(e.touches?e.touches[0].clientY:e.clientY) ;
     
      setx(x1);
      sety(y1);
     
    
      setend({x:x1 ,y:y1})
       
        if(tno==5)
          {
            setdraw(true);
            setpoints((points)=>[{x:x1 ,y:y1}])
          }
       if(tno==9)
        {
          let idx=find(shapes,x1,y1);
          if(idx===-1)
            {
              setdraw(false);
              return;
            }
            else
            {
              console.log(shapes[idx].tno===5?{dx:shapes[idx].data.dx,dy:shapes[idx].data.dy}:{...shapes[idx].data})
              setoriginaldata(shapes[idx].tno===5?{dx:shapes[idx].data.dx,dy:shapes[idx].data.dy}:{...shapes[idx].data});
              if(idx!=shapes.length-1)
                {
                  setshapes((shapes)=>{

                    let temp=[...shapes];
                    let tim=temp[idx];
                    
                    return [...temp.slice(0,idx),...temp.slice(idx+1),tim];
    
                  });
                }
              
              
              
            }
            setdraw(true)
        }
        else{
          setdraw(true)
        }
    }
   
  useEffect(()=>{
   console.log(originaldata)
  },[originaldata])
    const rect=(e)=>{
      if(tno===6)
        {
          return;
        }
     
       if(draw)
        {
          setend({x:e.touches?e.touches[0].clientX:e.clientX ,y:e.touches?e.touches[0].clientY:e.clientY })
          const canvas = ref.current;
              const ctx = canvas.getContext("2d");
             
              
          switch(tno){
            case 0:
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              redraw(shapes,ref);
              ctx.lineWidth=font.strokewidth;
              ctx.fillStyle=(font.background);
              ctx.strokeStyle=font.stroke;
              ctx.font=`${font.fontsize}px Arial`;
              ctx.globalAlpha=1-font.opacity/100;
              square(e,img_data,x,y,ref);
              break;
            case 1:
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              redraw(shapes,ref)
              ctx.lineWidth=font.strokewidth;
              ctx.fillStyle=(font.background);
              ctx.strokeStyle=font.stroke;
              ctx.font=`${font.fontsize}px Arial`;
              ctx.globalAlpha=1-font.opacity/100;
              circle(e,img_data,x,y,ref);
              break;
            case 2:
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              redraw(shapes,ref)
              ctx.lineWidth=font.strokewidth;
              ctx.fillStyle=(font.background);
              ctx.strokeStyle=font.stroke;
              ctx.font=`${font.fontsize}px Arial`;
              ctx.globalAlpha=1-font.opacity/100;
              roumbus(e,img_data,x,y,ref);
              break;
            case 3:
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              redraw(shapes,ref)
              ctx.lineWidth=font.strokewidth;
              ctx.fillStyle=(font.background);
              ctx.strokeStyle=font.stroke;
              ctx.font=`${font.fontsize}px Arial`;
              ctx.globalAlpha=1-font.opacity/100;
              arrow(e,img_data,x,y,ref);
              break;
            case 4:
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              redraw(shapes,ref)
              ctx.lineWidth=font.strokewidth;
              ctx.fillStyle=(font.background);
              ctx.strokeStyle=font.stroke;
              ctx.font=`${font.fontsize}px Arial`;
              ctx.globalAlpha=1-font.opacity/100;
              line(e,img_data,x,y,ref);
              break;
            case 5:
              let fot={strokewidth:font.strokewidth,background:font.background,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity}
              brush(e,img_data,ref,points,setpoints,shapes,fot);  
              break;
            case 7:
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              redraw(shapes,ref)
              ctx.lineWidth=font.strokewidth;
              ctx.fillStyle=(font.background);
              ctx.strokeStyle=font.stroke;
              ctx.font=`${font.fontsize}px Arial`;
              ctx.globalAlpha=1-font.opacity/100;
              image(e,img_data,x,y,ref,img);
              break;
            case 8:
             
              const idx=find(shapes,e.touches?e.touches[0].clientX:e.clientX,e.touches?e.touches[0].clientY:e.clientY);
              console.log(idx)
              if(idx!==-1)
                {
                   setshapes((shapes)=>{
                     const updatedShapes=[...shapes];
                    if(idx===updatedShapes.length-1)
                      {
                        return [...updatedShapes.slice(0,idx)];
                      }
                     return [...updatedShapes.slice(0,idx),...updatedShapes.slice(idx+1)];
                   })
                }
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                 redraw(shapes,ref);
              
                 ctx.lineWidth=font.strokewidth;
                 ctx.fillStyle=(font.background);
                 ctx.strokeStyle=font.stroke;
                ctx.font=`${font.fontsize}px Arial`;
                 ctx.globalAlpha=1-font.opacity/100;
                
              
              break;
            case 9:
            
              const dx=e.touches?e.touches[0].clientX:e.clientX - x;
              const dy=e.touches?e.touches[0].clientY:e.clientY - y;
              
             
               setshapes((shapes)=>{
                const updatedShapes = [...shapes];
                if(updatedShapes[updatedShapes.length-1].tno===5)
                  {
                    const shape = { ...originaldata };
                    shape.dx+=dx;
                    shape.dy+=dy;
                    
                   
                    updatedShapes[updatedShapes.length-1].data.dx = shape.dx;
                    updatedShapes[updatedShapes.length-1].data.dy = shape.dy;

                  }
                  else
                  {
                    const shape = { ...originaldata };
                    shape.sx += dx;
                    shape.ex += dx;
                     shape.sy += dy;
                     shape.ey += dy;
                      updatedShapes[updatedShapes.length-1].data = shape;
                  }
            
                  return updatedShapes;



               })
              
             
                 
              
                 ctx.clearRect(0, 0, canvas.width, canvas.height);
                 redraw(shapes,ref);
              
                 ctx.lineWidth=font.strokewidth;
                 ctx.fillStyle=(font.background);
                 ctx.strokeStyle=font.stroke;
                ctx.font=`${font.fontsize}px Arial`;
                 ctx.globalAlpha=1-font.opacity/100;
              break;







          }
         
            
        }
    }
  
   
   

 // case 6

    const textch=(e)=>{
      

      const canvas=ref.current;
      const ctx=canvas.getContext("2d");
      ctx.clearRect(0,0,canvas.width,canvas.height)
     
        let y2=y;
        redraw(shapes,ref)
        ctx.lineWidth=font.strokewidth;
        ctx.fillStyle=(font.background);
        ctx.strokeStyle=font.stroke;
       ctx.font=`${font.fontsize}px Arial`;
       ctx.globalAlpha=1-font.opacity/100;
          let x2=x;
          const t=(input.current.value).split("");
          
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
    




    const close=(e)=>{
    
      
      if(tno===6)
        {
          return;
        }
      const canvas = ref.current;
      
      const ctx = canvas.getContext("2d");
      
      setdraw(false);
      setoriginaldata(null);
      setx(null);
      sety(null);
      setend(null);
    
      if(end===null || (x===end.x && y===end.y))
        {
         return;    
        }
      switch(tno){
        case 0:
          setshapes((shapes)=>{
           let sh={};
           sh.tno=tno;
           sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
           sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
           return [...shapes,sh];


          })
          break;
        case 1:
          setshapes((shapes)=>{
            let sh={};
            sh.tno=tno;
            sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
            sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
            return [...shapes,sh];
 
 
           })
          break;
        case 2:
          setshapes((shapes)=>{
            let sh={};
            sh.tno=tno;
            sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
            sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
            return [...shapes,sh];
 
 
           })
          break;
        case 3:
          setshapes((shapes)=>{
            let sh={};
            sh.tno=tno;
            sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
            sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
            return [...shapes,sh];
 
 
           })
          break;
        case 4:
          setshapes((shapes)=>{
            let sh={};
            sh.tno=tno;
            sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
            sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
            return [...shapes,sh];
 
 
           })
          break;
        case 5:
          setshapes((shapes)=>{
            let sh={};
            sh.tno=tno;
            sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
            sh.data={points:points,dx:0,dy:0};
            return [...shapes,sh];
 
 
           }) 
          break;
        case 7:
          if(img===null)
            {
              break;
            }
          setshapes((shapes)=>{
            let sh={};
            sh.tno=tno;
            sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
            sh.data={sx:x,sy:y,ex:end.x,ey:end.y,img:img};
            return [...shapes,sh];
 
 
           })
          break;
        default:
          break;





      }
      
      
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
    
    const canvas = ref.current;
   
       canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
       const ctx = canvas.getContext("2d");
  
       
    
     
      redraw(shapes,ref);
       
      
},[screen])

    const t=90
    return(
      <User.Provider value={{t,ref,ref2,cl,rect,setdraw,tno,settno,setimg,draw,tol,stl,input,close,textch}}>
        {children}
         
         
      </User.Provider>
    )
}
