function calculateArea(x1, y1, x2, y2, x3, y3) {
    return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}
function isPointOnLine(px, py, x1, y1, x2, y2, width) {

    return distancePointFromLine(px, py, x1, y1, x2, y2, width) <= width / 2
  }
  
  function distancePointFromLine(x0, y0, x1, y1, x2, y2) {
    return Math.abs((x2 - x1) * (y1 - y0) - (x1 - x0) * (y2 - y1)) / Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  }
function distancePointFromPoint(x0,y0,x1,y1){
return Math.hypot(x1 - x0, y1 - y0);
}
function isPointOnPoint(x0,y0,x1,y1){
    
}

const find=(shapes,x,y)=>{
    let i=-1;
    for(var j=shapes.length-1;j>=0;j--)
        {
            const shape=shapes[j];
            const tno=shape.tno;
            const data=shape.data;
            const font=shape.font;
            switch(tno){
                case 0:
                   if((x>=data.sx && x<=data.ex || x<=data.sx && x>=data.ex) && (y>=data.sy && y<=data.ey || y<=data.sy && y>=data.ey))
                    {
                        return j
                    }
                   break;
                case 1:
                    const radius = Math.sqrt(Math.pow((data.ex-data.sx)/2 , 2) + Math.pow((data.sy-data.ey)/2 , 2));
                    const r2=Math.sqrt(Math.pow((x-data.sx)/2 , 2) + Math.pow((data.sy-y)/2 , 2));
                    if(r2<radius)
                        {
                            return j;
                        }
                    break;
                case 2:

                   
                   const x1=data.sx;
                   const y1=data.sy;
                   const x2=data.ex;
                   const y2=data.ey;
                   const p1={x:x1+(x2-x1)/2,y:y1};
                   const p2={x:x1,y:y1+(y2-y1)/2};
                   const p3={x:x1+(x2-x1)/2,y:y2};
                   const p4={x:x2,y:y1+(y2-y1)/2};
                   const polygon=[p1,p2,p3,p4];
                   let inside=0;
                   console.log(polygon)
                  
                    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
                        const xi = polygon[i].x, yi = polygon[i].y;
                        const xj = polygon[j].x, yj = polygon[j].y;
                
                        const intersect = ((yi > y) !== (yj > y)) &&
                                          (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                        if (intersect) inside = !inside;
                    }
                
                    
                    if(inside)
                        {
                            return j;
                        }
                   

                   break;
                case 3:
                   const f=font.strokewidth;
                  
                  if(isPointOnLine(x,y,data.sx,data.sy,data.ex,data.ey,font.strokewidth))
                    {
                        return j
                    }
                    
                   break;
                case 4:
                    
 
                   if(isPointOnLine(x,y,data.sx,data.sy,data.ex,data.ey,font.strokewidth))
                     {
                         return j
                     }
                     
                   break;
       
                case 5:
                     let points=data.points
                     for(let i=0;i<points.length;i++)
                        {
                            const radius = Math.sqrt(Math.pow(((points[i].x+data.dx)-x)/2 , 2) + Math.pow((y-(points[i].y+data.dy))/2 , 2));
                            if(radius<=(font.strokewidth)/2)
                                {
                                    return j;
                                }

                        }
                     break;
                case 6:
                    console.log(data.sx+"   "+data.ex)
                    if((x>=Math.min(data.sx,data.ex) && x<=Math.max(data.sx,data.ex)) && (y>=Math.min(data.sy-font.fontsize,data.ey) && y<=Math.max(data.sy-font.fontsize,data.ey)))
                        {
                            return j
                        }
                   break;
                case 7:
                    if((x>=Math.min(data.sx,data.ex) && x<=Math.max(data.sx,data.ex)) && (y>=Math.min(data.sy,data.ey) && y<=Math.max(data.sy,data.ey)))
                        {
                            return j
                        }
                   break;
                default:
                 break;   
       
       
       
       
       
       
       
               }
        }
        return -1;
}






// case 0:
//           setshapes((shapes)=>{
//            let sh={};
//            sh.tno=tno;
//            sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//            sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//            return [...shapes,sh];


//           })
//           break;
//         case 1:
//           setshapes((shapes)=>{
//             let sh={};
//             sh.tno=tno;
//             sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//             sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//             return [...shapes,sh];
 
 
//            })
//           break;
//         case 2:
//           setshapes((shapes)=>{
//             let sh={};
//             sh.tno=tno;
//             sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//             sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//             return [...shapes,sh];
 
 
//            })
//           break;
//         case 3:
//           setshapes((shapes)=>{
//             let sh={};
//             sh.tno=tno;
//             sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//             sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//             return [...shapes,sh];
 
 
//            })
//           break;
//         case 4:
//           setshapes((shapes)=>{
//             let sh={};
//             sh.tno=tno;
//             sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//             sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//             return [...shapes,sh];
 
 
//            })
//           break;
//         case 5:
//           setshapes((shapes)=>{
//             let sh={};
//             sh.tno=tno;
//             sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//             sh.data=points;
//             return [...shapes,sh];
 
 
//            }) 
//           break;
//         case 7:
//           if(img===null)
//             {
//               break;
//             }
//           setshapes((shapes)=>{
//             let sh={};
//             sh.tno=tno;
//             sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//             sh.data={sx:x,sy:y,ex:end.x,ey:end.y,img:img};
//             return [...shapes,sh];
 
 
//            })



// ctx.moveTo(x+(x1-x)/2,y);
// ctx.lineTo(x,y+(y1-y)/2);
// ctx.lineTo(x+(x1-x)/2,y1);
// ctx.lineTo(x1,y+(y1-y)/2
export default find;