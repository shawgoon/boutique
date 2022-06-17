import MenuBtn from "../MenuBtn/MenuBtn";
import "./Menu.css";

function Menu(props){
    return(
        <nav className="headerNav">
            <div className="logoNav">
                <h1><span>MA</span> BOUTIQUE</h1>
            </div>
            <ul className="barNav">
                <li className="btnNav">
                    <div className="link"><MenuBtn title="">HOME</MenuBtn></div> {/*props.title = innerText - props.children = innerHTML*/}
                </li>
                <li className="btnNav">
                    <div className="link"><MenuBtn title="">Vinyls <i className="fa-solid fa-compact-disc"></i></MenuBtn></div>
                </li>
                <li className="btnNav">
                    {/* {déclaration d'event sur un élément avec "onclick"} */}
                    <div className="link" onClick={props.action}><MenuBtn title=""><i className="fa-solid fa-cart-shopping"></i></MenuBtn></div>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;