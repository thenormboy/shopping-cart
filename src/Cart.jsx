import { ShopContext } from "./App";
import { useContext } from "react";

const Cart = () => {

    const { cartItems } = useContext(ShopContext)

    return (
        <>
            <div>Cart</div>
            {cartItems.map((item) => {
                return (
                    <>
                    <div>{item.getName()}</div>
                    <div>{item.getQuantity()}</div>
                    </>
                )
            })}
        </>
    )
}

export default Cart