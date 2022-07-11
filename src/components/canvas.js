import { useOnDraw } from "./hooks";
const Canvas=({
   
})=>{
    const setCanvasRef = useOnDraw(onDraw);
    //  function onDraw(ctx, point){
    //     ctx.fillStyle= "#3D3B39"
    //     ctx.beginPath();
    //     ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        
    //     ctx.fill();

    //  }
    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, '#000000', 5);
    }

    function drawLine(
        start,
        end,
        ctx,
        color,
        width
    ) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
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
