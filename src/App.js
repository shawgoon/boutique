import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import './App.css';

function App(props) {
  const [displayCart, setDisplayCart] = useState(false);
  function handleClick(){
    console.log("ça marche !");
    setDisplayCart(!displayCart);
  }
  // function displayCart(){
  //   console.log("bouton cart");
  // }
  return (
    <div className="App">
      <header>
        <Menu action={()=>{handleClick()}}></Menu>
      </header>
      <main>
         {/* if(displayCart  === true){
          </Cart>
        }else{
          ""
        } c'est égal à la fonction suivante
         */}
        {displayCart ? <Cart/>:""}
        <Products></Products>
       
        
      </main>
    </div>
  );
}

export default App;
