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
                console.log(e.type);
                if(e.type==="touchmove"){
                    console.log("sucess");
                    
                    x = computePointInCanvas(e.touches[0].clientX,e.touches[0].clientY);
                    
                }
                
                else{
                    var x =computePointInCanvas(e.clientX,e.clientY);
                   
                }
                const point = x;
                const ctx= canvasRef.current.getContext('2d');
                if (onDraw) onDraw(ctx, point, prevPointRef.current);
                prevPointRef.current = point;
                console.log(point);

            }
            
           
        }
        
        if('ontouchstart' in window ){
            
            
            console.log(window.TouchEvent);
            console.log(window.MouseEvent);
            window.addEventListener('touchmove',mouseMoveListener);


        }
        else{
           
            window.addEventListener('mousemove',mouseMoveListener);

        }
        

    }
    function initMouseUpListener(){
        const listener =()=>{
            isDrawingRef.current =false;
            prevPointRef.current = null;
        }
        if('ontouchstart' in window ){
            window.addEventListener('touchend',listener);


        }
        else{
            window.addEventListener('mouseup',listener);

        }
        
    }
    function initMouseDownListener(){
        if(!canvasRef.current) return;
        const listener =()=>{
            isDrawingRef.current =true;
        }
        if('ontouchstart' in window ){
            canvasRef.current.addEventListener("touchstart", listener);


        }
        else{
            canvasRef.current.addEventListener("mousedown", listener);

        }
        
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