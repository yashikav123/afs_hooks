import {useState,useRef} from "react";

function Useref() {
    let[count,setcount]=useState(0);
    let countRef=useRef(0);
    let[name,setname]=useState(0);
    let nameRef=useRef(0);
    let increment=()=>
    {
        setcount(count+1);
        console.log("State:",count);
        console.log("Ref:",countRef.current);

    }
    let change=(e)=>
    {
        setname(e.target.value);
        nameRef.current=e.target.value;
        console.log("Change:",name);
        console.log("Ref:",nameRef.current);
    }
    return (
        <>
        <div>
        <h1>Count:{countRef.current}</h1>
        <button onClick={increment}>Increment</button>
   
        
        
        </div>
        <div>
        <h1>Enter Something :{nameRef.current}</h1>
        <textarea onChange={change}></textarea>
        </div>
        </>
    )
}
export default Useref