

import { useState } from "react";

const FilterProduct = (props)=>{
    let [filterVal, setFilterVal] = useState(props.PorductList);

    function filter(e){
        let filteredProd = props.PorductList.filter(dish=>{
            return Number(dish.proteins.split(" ")[0])<30;
        })
        setFilterVal(filteredProd);
    }


    return <>
        <div>
            <button className="filterBtn" onClick={filter}>Filter</button>
        </div>
    </>
}

export default FilterProduct;

