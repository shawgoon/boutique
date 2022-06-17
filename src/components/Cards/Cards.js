import BuyBtn from "../BuyBtn/BuyBtn";
import "./Cards.css";

function Cards(props){
    return(
        <div className="card">
            <div className="priceCard">{props.prix}</div>
            <img src={props.cover} alt="" />
            <h3 className="titleCard">{props.title}</h3>
            <div className="infoCard">{props.artist} - {props.genre} - {props.annee}</div>
            <p className="discribCard">{props.description}</p>
            <div className="cardBtn">
                <BuyBtn quantity={props.quantity}/>
            </div>
        </div>
    );

}

export default Cards;