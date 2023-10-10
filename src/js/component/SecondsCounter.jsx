
import React, {useEffect, useState, useRef} from "react";
let initialRun = true;
let timerBtn = false;
const SecondsCounter = () => {

    
    const [seg, setSeg] = useState(0);
    const inputRef = useRef(null);
    const [input, setInput] = useState(input)
    let time;

   
    const restartBtn = ()=> {
        timerBtn = false
        setSeg(0)
    } 
    const resumeBtn = () => initialRun = true
    const stopBtn = () => initialRun = false
    
    useEffect( ()=>{

        time = setInterval(()=>{
           
            if(initialRun === true && timerBtn === false ) {setSeg(seg+1)}
           
            if(timerBtn === true && initialRun === true){ 
                
                if(seg === 0 ){
                    setSeg(0)
                    alert("😫😫 Time is up 😫😫")
                    timerBtn = false;
                    initialRun = true;
                   
                } else{setSeg(seg-1)}}
                
                setInput(inputRef.current.value)
            
        },1000)
        return ()=> clearInterval(time)
    });
  
    function onClickFunction() {      
       if(input <= 99999999){

        timerBtn = true
       setSeg(Number(input))}

       else{alert(`${input} is out of range, please insert another value`)}
      }
     
    return(
             
             <div className="counterContainer   rounded border ">
            <div className="secondsContainer text-light  ">
            
                <h1 className="seconds ">
               
                    {seg}
                 </h1>
                
            </div>

            <div className="btnContainer ">
                <div>

            <button className="btn btn-danger m-2" onClick={stopBtn}><i class="fa-solid fa-pause p-2"></i></button>

            <button onClick={resumeBtn} className="btn btn-success p-2"><i class="fa-solid fa-play"></i></button>

            <button onClick={restartBtn} className="btn btn-primary m-2 p-2"><i class="fa-solid fa-rotate-right"></i></button>

            </div>

            <input ref={inputRef} min={0} max={99999999} type="number" placeholder="Enter the seconds" className="inputValue text-center p-2 m-1 rounded " />

            <button onClick={onClickFunction} className="btn btn-warning valueBtn" type="submit">Set Timer</button>

            </div>
     
        </div>
        

    );
}

export default SecondsCounter;