import { useRef } from "react";


export function useOnDraw(onDraw){
    const canvasRef = useRef(null);
    const isDrawingRef =useRef(false);
    const prevPointRef = useRef(null);

    function setCanvasRef(ref){
        if(!ref) return;
        canvasRef.current = ref;
        initMouseMoveListener();
        initMouseDownListener();
        initMouseUpListener();
    }
    function initMouseMoveListener(){
        const mouseMoveListener = (e) =>{
            if(isDrawingRef.current){
                const point = computePointInCanvas(e.clientX,e.clientY);
                const ctx= canvasRef.current.getContext('2d');
                if (onDraw) onDraw(ctx, point, prevPointRef.current);
                prevPointRef.current = point;
                console.log(point);

            }
            
           
        }
        window.addEventListener("pointermove", mouseMoveListener);

    }
    function initMouseUpListener(){
        const listener =()=>{
            isDrawingRef.current =false;
            prevPointRef.current = null;
        }
        window.addEventListener('pointerup',listener);
    }
    function initMouseDownListener(){
        if(!canvasRef.current) return;
        const listener =()=>{
            isDrawingRef.current =true;
        }
        canvasRef.current.addEventListener("pointerdown", listener)
    }


    function computePointInCanvas(clientX,clientY){
        if(canvasRef.current){
            const boundingRect =canvasRef.current.getBoundingClientRect();
        return{
            x: clientX - boundingRect.left,
            y: clientY - boundingRect.top,
        }

        }
        else{
            return null;
        }
        

    }
    return setCanvasRef;

}