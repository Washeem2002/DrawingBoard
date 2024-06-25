const circle=(e,img_data,x,y,ref)=>{
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x1 = e.touches?e.touches[0].clientX:e.clientX;
    const y1 = e.touches?e.touches[0].clientY:e.clientY;
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(img_data)
      {
        ctx.putImageData(img_data, 0, 0);
      }

      
      const radius = Math.sqrt(Math.pow((x1-x)/2 , 2) + Math.pow((y-y1)/2 , 2));

    ctx.beginPath();
   ctx.arc(x, y, radius, 0, 2 * Math.PI);
   
   ctx.fill();
   ctx.stroke();

}
export default circle;