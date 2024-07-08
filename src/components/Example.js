import { Mycontext} from "./Mycontext";
import Mycomponent from "./Mycomponent";
import { useState } from "react";

//provider ->Which produces the data/props
export default function Example(){
    const [text,setText] = useState("");
    return(
        
        <div>
            <Mycontext.Provider value={{text,setText}}>
                <Mycomponent/>
                {/* you can add as many components u want provider will provide all the props to the given component  */}
            </Mycontext.Provider>
        </div>
    )
}