
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";


// import HeaderComponent from /Header";
import HeaderComponent from "./src/components/Header"
import BodyContainer from "./src/components/Body"
import Footer from "./src/components/Footer"
import About from "./src/components/About";
import Contact from "./src/components/Contact"
import {Error} from "./src/components/Error"
import DetailedItem from "./src/components/DetailedItem";
import Cart from "./src/components/cart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import bigStore from "./utils/redux/bigStore";

// context importing 
import userContext from "./utils/userContext";

const AppContainer = () => {
    const userValue=useContext(userContext);
    const [name, setName] = useState(userValue.userName);

    return <>
        <Provider store={bigStore} >
            <userContext.Provider value={{userName:name, setName}}>
                <HeaderComponent ></HeaderComponent>
                {/* <BodyContainer></BodyContainer> */}

                <Outlet></Outlet>     
                <Footer />
            </userContext.Provider>
        </Provider>
    </>
}

const ListOfEmployes = [
    {
        name:"Harsh Chouskey",
        course:"B tech",
    },
    {
        name:"Nishi Chouskey",
        course:"B Com",
    },
    {
        name:"ansh katariya",
        course:"BSC",
    },
    {
        name:"anmol patel",
        course:"b tech",
    }
];

const reactRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppContainer></AppContainer>,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<BodyContainer />
            },
            {
                path:"/about",
                element:<About ListOfEmployes={ListOfEmployes} />
            },
            {
                path:"/DetailedItem/:foodId",
                element:<DetailedItem />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/cart",
                element: <Cart />
            }
        ]
    },
    
])



const rootDiv = document.getElementById('root');

const root = ReactDOM.createRoot(rootDiv);
root.render(<RouterProvider router={reactRouter}/>)


