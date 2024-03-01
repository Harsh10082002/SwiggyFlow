
import {IMAGE_URL} from '../../utils/constants';

const Card = (props) =>{

    const {cloudinaryImageId, cuisines, name, avgRating, locality,areaName} = props.foodItem.info;

    const handleCart = () =>{
        console.log("hi");
    }

    return <>
        <div className="p-5 w-[264px]">
            <div className="border border-black">
                <img src={`${IMAGE_URL}${cloudinaryImageId}`}></img>
                <div className="cardContent">
                    <h2 className="restrauntName">{name}</h2>
                    <h3>{locality}, {areaName}</h3>
                    <h4>{avgRating}</h4>
                    <p>{cuisines.join(", ")}</p>
                </div>
            </div>
        </div>
    </>
}

export function HigherOrder(Card){
    return (props)=>{
        return <>
            <div>
                <h1 className='bg-emerald-900 text-white text-center mx-5'>PQ</h1>
                <Card {...props}/>
            </div>
        </>
    }
}

export default Card;