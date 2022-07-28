import { useOnDraw } from "./hooks";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Canvas=({
   
})=>{
    function download(){
        var canvas = document.getElementById("canvas");
        var url = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'artist.png';
        link.href = url;
        link.click();
      }
    const [value, setValue] = useState();
    var col = "#3D3B39";

    const refresh = ()=>{
        // re-renders the component
        var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    const red = ()=>{
        col = "#FF612F";

    }
    const blue = ()=>{
        col = "#7DAFFF";

    }
    const green = ()=>{
        col = "#93B075";

    }
    const yellow = ()=>{
        col = "#F4DA27";

    }

    const black = ()=>{
        col = "#3D3B39"
    }

    const erase =()=>{
        col="#d9d9d9"
    }
    
    

    const setCanvasRef = useOnDraw(onDraw);
    //  function onDraw(ctx, point){
    //     ctx.fillStyle= "#3D3B39"
    //     ctx.beginPath();
    //     ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        
    //     ctx.fill();

    //  }
    // function refreshPage() {
    //     window.location.reload(false);
    //   }
    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, col, 5);
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
            <div className="align">
            <ul>
                <li className="red" onClick={red}></li>
                <li className="blue" onClick={blue}></li>
                <li className="green" onClick={green}></li>
                <li className="yellow" onClick={yellow}></li>
                <li className="black" onClick={black}></li>
                
            </ul>
            <div className="eraser" onClick={ erase }><img src={require("../static/eraser.webp")} alt="" /></div>
            <div className="refresh" onClick={ refresh }><img src={require("../static/refresh.webp")} alt="" /></div>
            </div>
            <div onClick={ download } className='download'>Download your shitty art</div>
        <canvas id="canvas"
        
        ref={setCanvasRef}
        width={440}
        height={400}
        />
        <Link to={"/tools"}><div className="backfooter"><span>Give up and get your sorry ass out</span></div></Link>
        </div>
        
    )

}

export default Canvas;

