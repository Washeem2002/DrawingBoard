const eracer=(e,ref)=>{
  e.preventDefault();
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x1 = e.clientX - rect.left;
    const y1 = e.clientY - rect.top;
      ctx.clearRect(x1-15,y1-15,30,30)
}
export default eracer;
