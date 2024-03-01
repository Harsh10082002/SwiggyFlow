

import React from "react";
import { SWIGGY_DATA_URL } from "../../utils/constants";


class Contact extends React.Component{
    constructor(){
        super();
        this.state={
            restraunts:[]
        }
    }
    
    componentDidMount(){
        const prom = fetch(SWIGGY_DATA_URL);
        prom.then((fetchedData) => {
            return fetchedData.json();
        })
        .then((jsonData) => {
            this.setState({
                restraunts:jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
            });
        })
    }

    render() {
        return (
            <div className="main">
                {this.state.restraunts.map((item, index) => {
                    return (
                        <div key={index} className="">
                                <h1>Name: {item.info.name}</h1>
                            {/* Add other restaurant information here */}
                        </div>
                    );
                })}
            </div>
        );
    }

    
    // render(){
        
    //     this.state.restraunts.map((item)=>{
    //         return <>
    //             <h1>Name : {this.item.info.name}</h1>
    //         </>
    //     })

    // }
}

export default Contact;