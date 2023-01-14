import './index.css';
import reportWebVitals from './reportWebVitals';
import React,{useState,useEffect} from "react";

function ChangeNumber(){
    /*const [num,setNumber]=useState(0);*/
    const [str,setStr]=useState({x: 0, y: 0});
    const divStyle={
        display:"flex",
        flexDirection:"column"
    }
    const handleMouseMove = e => {
        e.persist();
        setStr(str => ({...str, x: e.clientX, y: e.clientY}))
    }
    /*let clickMe = () => {
        setNumber(num + 1);
    }*/
    useEffect(handleMouseMove);

    return (
        < >
            <div style={divStyle} onMouseMove={handleMouseMove}>
                <p>Clicked me  {str.x} {str.y}</p>

            </div>
        </>
    )
}

export default ChangeNumber;


reportWebVitals();