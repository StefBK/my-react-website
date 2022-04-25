// const myfonc=()=>{
//     alert('Yo');
// }

// const Button=()=>{
//     return(
//         <button className="btn bg-dark text-info" onClick={myfonc}>Click Me!</button>
//     )
// }
import { useState } from "react";

const Button =(props)=>{
    let [count,setCount]=useState(props.start);
    return(
        <button onClick={()=>{setCount(count+1)}}>Click Me! ({count})</button>
    )
}

export default Button;