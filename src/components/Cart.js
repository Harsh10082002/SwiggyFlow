import { useSelector } from "react-redux";

const Cart = () => {
    
    const cartList = useSelector((i)=>{
        return i.cart.cartArray;
    });
    console.log(cartList[0]);
    return<>
        <h1>hey</h1>
        
    </>
}
export default Cart;