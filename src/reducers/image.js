const image=(e,img_data,x,y,ref,img)=>{
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x1 = e.clientX - rect.left;
    const y1 = e.clientY - rect.top;
    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(img_data)
      {
        ctx.putImageData(img_data, 0, 0);
      }

      
      const radius = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));

    const imag = new Image();
    imag.src = img;
    ctx.drawImage(imag, x, y, x1-x, y1-y);
};
export default image;