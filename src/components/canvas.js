import { useOnDraw } from "./hooks";
const Canvas=({
   
})=>{
    const setCanvasRef = useOnDraw(onDraw);
     function onDraw(ctx, point){
        ctx.fillStyle= "#3D3B39"
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        ctx.fill();

     }


    return(
        <div className="cv">
            <h3>SAKALAKA BOOM BOOM</h3>
        <canvas 
        
        ref={setCanvasRef}
        width={440}
        height={640}
        />
        </div>
    )

}

export default Canvas;
