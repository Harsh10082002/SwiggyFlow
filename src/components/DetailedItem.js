
import { IMAGE_URL } from "../../utils/constants";
import DeteailedSkeleton from "./DetailedSkeleton";
import useFoodDetailedInfo from "../../utils/useFoodDetailedInfo";
import { DetailItemAccordian } from "./DetailItemAccordian";

const DetailedItem = () =>{
    const FoodDetailedData = useFoodDetailedInfo();
    
    
    if(FoodDetailedData.length === 0){
        return <DeteailedSkeleton />
    }
    const {name, areaName, city, cuisines, costForTwoMessage, totalRatings, cloudinaryImageId} = FoodDetailedData.data.cards[2].card.card.info;
    const recommendedList = FoodDetailedData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;


    return<>
        <div className="p-5 flex flex-col ">
            <div className="pl-[35%] border ">
                <img className="w-2/5 " src={`${IMAGE_URL}${cloudinaryImageId}`}/>
                <div className="cardContent">
                    <h1>{name}</h1>
                    <h3>{costForTwoMessage}</h3>
                    <h3>{areaName}, {city}</h3>
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{totalRatings} Ratings</h3>
                </div>
            </div>

            <div className="m-5">
                <DetailItemAccordian recommendedList={recommendedList}/>

            </div>
        </div>
    </>
}


export default DetailedItem;