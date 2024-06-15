function midPointBtw(p1, p2) {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2
  };
}

const brush = (e, img_data, ref, points, setpoints) => {
  // Get canvas and context
  const canvas = ref.current;
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();

  // Calculate mouse position relative to canvas
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Update points state
  setpoints(prevPoints => {
    const newPoints = [...prevPoints, { x: mouseX, y: mouseY }];

    // Clear and redraw the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (img_data) {
      ctx.putImageData(img_data, 0, 0);
    }

    
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    // Draw the smooth line
    if (newPoints.length > 1) {
      let p1 = newPoints[0];
      let p2 = newPoints[1];

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);

      for (let i = 1; i < newPoints.length; i++) {
        const midPoint = midPointBtw(p1, p2);
        ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
        p1 = newPoints[i];
        p2 = newPoints[i + 1];
      }

      // Draw last line as a straight line
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    }

    return newPoints;
  });
}

export default brush;