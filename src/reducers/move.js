const move=(shapes,x,y,e)=>{
    
    const temp=[...shapes];
    const t=temp[temp.length-1];
    const x1 = e.touches?e.touches[0].clientX:e.clientX;
    const y1 = e.touches?e.touches[0].clientY:e.clientY;
    
    const tno=t.tno
    if(tno!==5)
        {
            t.data.sx=t.data.sx+(x1-x);
            t.data.sy=t.data.sy+(y1-y);
            t.data.ex=t.data.ex+(x1-x);
            t.data.ey=t.data.ey+(y1-y);
        }
        temp[temp.length-1]=t;
        console.log(temp[temp.length-1].data.sx)
        return temp;

}

export default move;



// case 0:
//     setshapes((shapes)=>{
//      let sh={};
//      sh.tno=tno;
//      sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//      sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//      return [...shapes,sh];


//     })
//     break;
//   case 1:
//     setshapes((shapes)=>{
//       let sh={};
//       sh.tno=tno;
//       sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//       sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//       return [...shapes,sh];


//      })
//     break;
//   case 2:
//     setshapes((shapes)=>{
//       let sh={};
//       sh.tno=tno;
//       sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//       sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//       return [...shapes,sh];


//      })
//     break;
//   case 3:
//     setshapes((shapes)=>{
//       let sh={};
//       sh.tno=tno;
//       sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//       sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//       return [...shapes,sh];


//      })
//     break;
//   case 4:
//     setshapes((shapes)=>{
//       let sh={};
//       sh.tno=tno;
//       sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//       sh.data={sx:x,sy:y,ex:end.x,ey:end.y};
//       return [...shapes,sh];


//      })
//     break;
//   case 5:
//     setshapes((shapes)=>{
//       let sh={};
//       sh.tno=tno;
//       sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//       sh.data=points;
//       return [...shapes,sh];


//      }) 
//     break;
//   case 7:
//     if(img===null)
//       {
//         break;
//       }
//     setshapes((shapes)=>{
//       let sh={};
//       sh.tno=tno;
//       sh.font={background:font.background,strokewidth:font.strokewidth,stroke:font.stroke,fontsize:font.fontsize,opacity:font.opacity};
//       sh.data={sx:x,sy:y,ex:end.x,ey:end.y,img:img};
//       return [...shapes,sh];


//      })
//     break;
//   default:
//     break;
