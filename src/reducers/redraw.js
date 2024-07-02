const redraw=(shapes,ref)=>{
    let sh=[...shapes];
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    
    for(let i=0;i<sh.length;i++){
        let temp=sh[i];
        let tno=temp.tno;
        let font=temp.font;
        let data=temp.data;
        //font
        ctx.lineWidth=font.strokewidth;
        ctx.fillStyle=(font.background);
        ctx.strokeStyle=font.stroke;
       ctx.font=`${font.fontsize}px Arial`;
       ctx.globalAlpha=1-font.opacity/100;

        //font
        switch(tno){
         case 0:
            
            ctx.fillRect(data.sx, data.sy, data.ex-data.sx, data.ey-data.sy);
            ctx.strokeRect(data.sx, data.sy, data.ex-data.sx, data.ey-data.sy);
            break;
         case 1:
            const radius = Math.sqrt(Math.pow((data.ex-data.sx), 2) + Math.pow((data.sy-data.ey) , 2));
            ctx.beginPath();
            ctx.arc(data.sx,data.sy, radius, 0, 2 * Math.PI);
            ctx.fill();
           ctx.stroke();
           break;
         case 2:
            ctx.beginPath();
            ctx.moveTo(data.sx+(data.ex-data.sx)/2,data.sy);
            ctx.lineTo(data.sx,data.sy+(data.ey-data.sy)/2);
            ctx.lineTo(data.sx+(data.ex-data.sx)/2,data.ey);
            ctx.lineTo(data.ex,data.sy+(data.ey-data.sy)/2);
            ctx.lineTo(data.sx+(data.ex-data.sx)/2,data.sy)
     
            ctx.fill(); 
            ctx.stroke();
            break;
         case 3:
            ctx.beginPath();
            ctx.moveTo(data.sx,data.sy);
            var dx = data.sx - data.ex;
            var dy = data.sy - data.ey;
            var angle = Math.atan2(dy, dx);
            ctx.lineTo(data.ex,(data.ey));
     
            ctx.lineTo(data.ex +10 * Math.cos(angle - Math.PI / 6), data.ey + 10 * Math.sin(angle - Math.PI / 6));
            ctx.moveTo(data.ex, data.ey);
            ctx.lineTo(data.ex +10 * Math.cos(angle + Math.PI / 6), data.ey + 10 * Math.sin(angle + Math.PI / 6));
            ctx.stroke();
            break;
         case 4:
            ctx.beginPath();
            ctx.moveTo(data.sx,data.sy);
            
            ctx.lineTo(data.ex,(data.ey));
            ctx.stroke();
            break;

         case 5:

            function midPointBtw(p1, p2) {
               return {
                 x: p1.x + (p2.x - p1.x) / 2,
                 y: p1.y + (p2.y - p1.y) / 2
                };
            }
            let points=data.points;
            console.log(points)
            if (points.length > 1) {
                let p1 = {x:points[0].x+data.dx,y:points[0].y+data.dy};
                let p2 = {x:points[1].x+data.dx,y:points[1].y+data.dy};
          
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
          
                for (let i = 1; i < points.length-1; i++) {
                  const midPoint = midPointBtw(p1, p2);
                  ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
                  p1 = {x:points[i].x+data.dx,y:points[i].y+data.dy};
                  p2 = {x:points[i+1].x+data.dx,y:points[i+1].y+data.dy};
                }
          
                // Draw last line as a straight line
                ctx.lineTo(p1.x, p1.y);
                ctx.stroke();
              }
              break;
         case 6:
            let x2=data.sx;
            let y2=data.sy;
            
            const t=data.text;
          
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
            break;
         case 7:
            const imag = new Image();
            imag.src = data.img;
            ctx.drawImage(imag, data.sx, data.sy, data.ex-data.sx, data.ey-data.sy);
            break;
         default:
          break;   







        }
    }
}
export default redraw;