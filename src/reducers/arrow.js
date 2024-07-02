
const arrow=(e,img_data,x,y,ref)=>{
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x1 = e.touches?e.touches[0].clientX:e.clientX - rect.left;
    const y1 = e.touches?e.touches[0].clientY:e.clientY - rect.top;
    
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if(img_data)
    //   {
    //     ctx.putImageData(img_data, 0, 0);
    //   }

      
      

    ctx.beginPath();
    ctx.moveTo(x,y);
    var dx = x - x1;
    var dy = y - y1;
    var angle = Math.atan2(dy, dx);
     ctx.lineTo(x1,(y1));
     
     ctx.lineTo(x1 +10 * Math.cos(angle - Math.PI / 6), y1 + 10 * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 +10 * Math.cos(angle + Math.PI / 6), y1 + 10 * Math.sin(angle + Math.PI / 6));
   ctx.stroke();
}
export default arrow