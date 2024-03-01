

import { useContext } from "react";
import userContext from "../../utils/userContext";

const Footer = () =>{
    const data = useContext(userContext);
    return <>
        <div className="flex justify-center bg-gray-400 mt-4 p-3">
            <div className="footerH3">
                <h1>Welcome {data.userName}</h1>
                <h3>made with love by Harsh!</h3>

            </div>
        </div>
    </>
}

export default Footer;