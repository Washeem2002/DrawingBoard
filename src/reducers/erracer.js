const eracer=(e,ref)=>{
 
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x1 = e.clientX 
    const y1 = e.clientY 
      ctx.clearRect(x1-15,y1-15,30,30)
}
export default eracer;
