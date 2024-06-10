const brush=(e,img_data,x,y,ref)=>{
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

      
      

    ctx.lineTo(x1,y1);
        ctx.stroke();
}
export default brush;