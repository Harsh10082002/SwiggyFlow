
import { useRouteError } from "react-router-dom"


export const Error=()=>{
    
    const err= useRouteError();
    console.log(err);
    // const errData = err.data.split(" ")
    // let n=errData.length;
    // n-=1;
    // console.log(errData[n]);

    return<>
        
        <h1>oops!! something went wrong</h1>
        <h3>status: {err.status}</h3>    
        <h3>msg: {err.statusText}</h3>    
        {/* <h3>error: {errData[n]}</h3>    */}
        

    </>
}
