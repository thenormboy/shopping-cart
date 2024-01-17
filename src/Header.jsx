import { Link } from "react-router-dom";
import { ShopContext } from "./App"
import { useContext } from "react";

export default function Header() {

    const { cartItems } = useContext(ShopContext)

    function totalLength(array) {
        let total = 0
        array.forEach(element => {
            total = total + element.getQuantity()
        });

        return total
    }

    console.log(cartItems)

    return (
        <>
        <div className="header-top">
            <div className="header-logo">
                Saturn Tiger
            </div>
            <Link to='/cart' className="header-cart">
                <div>Cart</div>
                <div>{cartItems.length}</div>
            </Link>
        </div>
        <div className="header-bottom">
            <Link to='/homepage'>Home</Link>
            <Link to="/products">Products</Link>
            <Link to='/about'>About</Link>
        </div>
        </>
    )
}