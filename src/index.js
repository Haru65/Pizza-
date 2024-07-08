import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "images/prosciutto.jpg",
    soldOut: false,
  },
];






function App() {
  return (

     <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
      <BTN/>
      </div>
      
  );
}

function Header(){
  return <div className='header'>
    <h1>FAST TRACK FOOD</h1>
  </div>
}
function Menu(){
  return(
   <div className="menu">
   <main  />
      <h2>Our menu</h2>
    <>
           <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

    <ul className ="pizzas">
      {
        pizzaData.map((pizza) =>(<Pizza pizzaobj={pizza}/>)
      )}
  </ul> </>
      
      </div>
  )
}
function Pizza(props){
 
  return(
    <li className={`pizza ${props.pizzaobj.soldOut ? "sold-out":""}`}>
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name}/>
      <div>

      <h1>{props.pizzaobj.name}</h1>
      <h2>{props.pizzaobj.ingredients}</h2>
      <span>{props.pizzaobj.price}</span>
      <span>{props.pizzaobj.soldOut}</span>
      </div>

    </li>

)  
}
function BTN(){
  return <button className='btn'>ORDER NOW</button>
}

function Footer(){
  const date = new Date().toLocaleTimeString();
  return <footer className='footer'>{date }:current time</footer>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
  
);
