import { useState } from "react";
import { IMAGE_URL } from "../../utils/constants";
import bigStore from "../../utils/redux/bigStore";
import { action1 } from "../../utils/redux/slices/cartSlice";

const Detail = ({ recommendedList }) => {

    return <>
        {
            recommendedList.map(e => {
                const { name, price, description, imageId } = e.card.info;
                return <>
                    <div key={imageId} className="flex justify-between">
                        <div className="p-4">
                            <h1 className="font-bold text-lg">{name}</h1>
                            <h4>₹ {price / 100}</h4>
                            <p className="text-gray-400">{description}</p>
                            <button className='text-white bg-neutral-800 ' 
                            onClick={(e)=>{
                                e.stopPropagation();
                                bigStore.dispatch(action1({name, price}));
                            }}
                            >Add to Cart +</button>

                        </div>
                        <div className="mt-4">
                            <img className="w-24" src={`${IMAGE_URL}${imageId}`}></img>
                        </div>
                    </div>
                    <hr className=""></hr>
                </>
            })
        }
    </>
}

export const DetailItemAccordian = ({ recommendedList }) => {
    const [clicked, setClicked] = useState(false);
    const [arrow, setArrow] = useState("🔻");

    const click = () => {
        !clicked ? setArrow("🔺") : setArrow("🔻");
        setClicked(!clicked);
    }
    return <>
        <div key={new Date().getSeconds()} className="shadow-lg m-5 my-4 p-3 cursor-pointer " onClick={click}>
            <div>
                <div className="flex justify-between">
                    <h1>Recomended</h1>
                    <h1>{arrow}</h1>
                </div>
                {clicked && <Detail recommendedList={recommendedList} /> /*this is shortcut of writing only if condition */}
            </div>
        </div>
    </ >
}