import "./BuyBtn.css";

function BuyBtn(props){
    // if (props.stock === 0){
    //     // j'affiche disable
    // }else{
    //     // je n'affiche rien
    // }
    // ternaire
    // let desactive;
    // let rupture; 
    // props.stock === 0 ?  desactive = true : desactive = false;
    // props.stock === 0 ? rupture = "En rupture " : rupture = "Ajouter ";
    // return <button disabled = {desactive}>{rupture}<i className="fa-solid fa-cart-arrow-down"></i></button>;
// on peut l'écrire plus court sans avoir à déclarer une variable
return <button disabled = {props.quantity ? false : true}>
            {props.quantity ? "Ajouter " : "En rupture "}
            <i className="fa-solid fa-cart-arrow-down"></i>
        </button>;
}

export default BuyBtn;