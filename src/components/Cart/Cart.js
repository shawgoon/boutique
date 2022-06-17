import MenuBtn from "../MenuBtn/MenuBtn";
import "./Cart.css"

function Cart(props){
    return(
        <div className="wrapperCart">
            <h2>Mon Panier</h2>
            <div className="link"><MenuBtn title=""><i class="fa-solid fa-xmark"></i></MenuBtn></div>
        </div>
    )
}

export default Cart;