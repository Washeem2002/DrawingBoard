
const roumbus=(e,img_data,x,y,ref)=>{
 
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x1 = e.touches?e.touches[0].clientX:e.clientX;
    const y1 = e.touches?e.touches[0].clientY:e.clientY;
  
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if(img_data)
    //   {
    //     ctx.putImageData(img_data, 0, 0);
    //   }

      
     

    ctx.beginPath();
    ctx.moveTo(x+(x1-x)/2,y);
     ctx.lineTo(x,y+(y1-y)/2);
    ctx.lineTo(x+(x1-x)/2,y1);
     ctx.lineTo(x1,y+(y1-y)/2);
     ctx.lineTo(x+(x1-x)/2,y)
     
     ctx.fill(); 
     ctx.stroke()  
}
export default roumbus;