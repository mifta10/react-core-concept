import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks= ['Salman','Manna','Rubel','Bapparaz','Shuvo'];
  const products = [
    {name:'Photoshop', price:'$99.99'},
    {name: 'Illustrator',price:'$89.99'},
    {name:"ph",price:'$44.00'},
    {name:"Premiere Ele",price:'$244.00'}
  ]

  //const nayokNames = nayoks.map(nayok => nayok);
 // console.log(nayokNames);

 //const productNames = products.map(product => product.name);
 //console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {products.map(product => <li>{product.name}</li>)}
        </ul>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
        <Person name={nayoks[0]} nayika="Shabnoor"></Person>
        <Person name={nayoks[1]} nayika="Moushumi"></Person>
        <Person name={nayoks[2]} nayika="Ratna"></Person>
        <Person name={nayoks[3]} nayika="Cheka"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease= () => setCount(count+1);
  const handleDecrease= () => setCount(count-1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <h5>Company Name</h5>
      <ul>
      {
        users.map(user => <li>{user.title}</li>)
      }
      </ul>
    </div>
  )
}


function Product(props){
 const productStyle={
   border: '2px solid gray',
   borderRadius: '5px',
   backgroundColor: 'lightgray',
   float: 'left',
   width: '200px',
   height: '200px'
 }
 const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  const personStyle={
    border: '2px solid yellow',
    margin: '10px',
    width:'400px'
  }
 
  return (<div style={personStyle}>
    <h1>Nayok: {props.name} </h1>
    <h3>Hero Of {props.nayika}</h3>
  </div>
  )
}

export default App;
