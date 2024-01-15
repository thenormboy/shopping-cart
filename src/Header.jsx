import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
        <div className="header-top">
            <div className="header-logo">
                Saturn Tiger
            </div>
            <Link to='cart' className="header-cart">
                C
            </Link>
        </div>
        <div className="header-bottom">
            <Link to='homepage'>Home</Link>
            <Link to="products">Products</Link>
            <Link to='about'>About</Link>
        </div>
        </>
    )
}