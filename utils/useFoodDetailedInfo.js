
// this is my custom hook to handle fetching of detailed data.

import { useState, useEffect } from "react";
import { SWIGGY_DEETAILED_DATA_URL } from "./constants";
import { useParams } from "react-router-dom";

const useFoodDetailedInfo =()=>{
    const param = useParams();
    const [FoodDetailedData,setFoodDetailedData]= useState([]);
    const swiggyRestrauntData = SWIGGY_DEETAILED_DATA_URL(param.foodId);

    useEffect(()=>{
        fetchData(swiggyRestrauntData);
    },[])

    async function fetchData(api){
        const prom = await fetch(api);
        const jsonData = await prom.json();
        setFoodDetailedData(jsonData);
    }
    return FoodDetailedData;
}

export default useFoodDetailedInfo;