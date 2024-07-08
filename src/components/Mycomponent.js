import { useContext } from "react";
import { Mycontext } from "./Mycontext";


export default function Mycomponent(){
    //CONSUMER
    const {text,setText} = useContext(Mycontext)
    return(
        <div>
            <h1>{text}</h1>
           <button onClick={()=>setText("HelloWorld")}> Click</button>
        </div>
    )
}