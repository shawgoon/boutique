import "./MenuBtn.css";

function MenuBtn(props){
    return (
    <div>{props.children}</div>
    );
} 
// = à la fonction qui suit
// exemple de fonction fléchée "sans return"
// const MenuBtn = (props)=>{
//     <div></div>
// }

export default MenuBtn;
