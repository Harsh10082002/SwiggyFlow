import { useState, useEffect } from "react";
import { SWIGGY_DATA_URL } from "./constants";

const useFoodInfo=()=>{

    const [foodList,setFoodList] = useState([]);
    const [SearchFilter,setSearchFilter] = useState([]);

    useEffect(() => {
        fetchFoodData();
    }, [])

    const fetchFoodData=()=>{
        const prom = fetch(SWIGGY_DATA_URL);
        prom.then((fetchedData) => {
            return fetchedData.json();
        })
        .then((jsonData) => {
            setFoodList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setSearchFilter(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        })
    }
    return {foodList,SearchFilter};
}

export default useFoodInfo;