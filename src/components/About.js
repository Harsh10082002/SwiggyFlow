import React, {useContext} from "react";
import userContext from "../../utils/userContext";


const About = () =>{
    const dataObj = useContext(userContext);
    const {userName } = dataObj;

    return <>
        <div className="bg-gray-200 text-black w-[14%]  p-2">
            <div>
                <h1 className="font-bold">context Value: {userName}</h1>
                <h3>address</h3>
                <h3>Branch</h3>
            </div>
        </div>

    </>
}

export default About;
