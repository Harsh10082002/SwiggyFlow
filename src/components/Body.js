
import { useContext, useState } from "react";
import { HomeSkeleton } from "./HomeSkeleton";

import Card, {HigherOrder} from './Card';
import { Link } from "react-router-dom";

import useFoodInfo from "../../utils/useFoodInfo"
import useCheckOnlineStatus from '../../utils/useCheckOnlineStatus';
import userContext from "../../utils/userContext";


// search functionality is not working currently

const BodyContainer = () => {

    const {userName, setName} = useContext(userContext);
    
    const [Searchedval, setSearchedVal] = useState('');
    const [userValue, setUserValue] = useState(userName);

    const {foodList, SearchFilter} = useFoodInfo();// this is calling of my custom hook(built by me)
    
    const status = useCheckOnlineStatus();
    if(!status){
        return <h1>you are offline</h1>
    }

    if (foodList.length === 0) {
        return <HomeSkeleton />
    }
    const EnhancedComponent = HigherOrder(Card);
    const label="PQ";
    return <>
        <div className="flex flex-col justify-center py-6 bg-gray-300" >
            <div>
                <input className="w-60 h-10 mx-2 border-2 border-slate-600" type="text" placeholder="search here"
                    value={Searchedval}
                    onChange={(e) => {
                        e.preventDefault();
                        setSearchedVal(e.target.value);
                    }}>
                </input>

                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={(e)=>{
                    const SearchFilteredList = foodList.filter(eachFilteredItem=>{
                        if(eachFilteredItem.info.name.toLowerCase().includes(Searchedval.toLowerCase())){
                            return eachFilteredItem;
                        }
                    })
                }}>Search</button>
            </div>

            <div>
                <input type="text" placeholder="name" 
                    className="w-60 h-10 mx-2 border-2 border-slate-600"
                    value={userValue}
                    onChange={(e)=>{
                        setUserValue(e.target.value);
                    }}></input>
                <button 
                className="bg-green-500 hover:bg-green-700 text-white text-sm py-2 px-4 rounded inline-flex items-center"
                onClick={(e)=>{
                    setName(userValue.toLocaleUpperCase());

                }}>Dynamically change data of context(globally)</button>
            </div>
        </div>

        <div className="flex flex-wrap pl-[23%]">
            {SearchFilter.length === 0 ? <h1>No items found</h1> :
            SearchFilter.map(foodItem => {
                return <div className="">
                    <Link
                        to={`/DetailedItem/${foodItem.info.id}`} 
                        key={foodItem.info.id}
                    >
                        {foodItem.info.avgRating > 4.5 ? <EnhancedComponent foodItem={foodItem} />: <Card foodItem={foodItem}/>}
                        {/* <Card foodItem={foodItem}></Card> */}
                    </Link>

                </div>
            })};
        </div>
    </>
}
export default BodyContainer;


