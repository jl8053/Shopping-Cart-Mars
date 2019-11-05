import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: 100
  },
  {
    item: 'Spam',
    image: 'https://thumbs-prod.si-cdn.com/H7aVwwcff-NyQDH0opXs7a6BDUg=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/a3/a5/a3a5e93c-0fd2-4ee7-b2ec-04616b1727d1/kq4q5h7f-1498751693.jpg',
    description: 'Spam can last for more than that 3 month long trip',
    price: 30
  },
  {
    item: 'Jacket',
    image: 'https://images-na.ssl-images-amazon.com/images/I/614hxizXuqL._UY606_.jpg',
    description: 'Nice warm jacket because it will be cold AF',
    price: 200
  },
  {
    item: 'Rain Boots',
    image: 'https://di2ponv0v5otw.cloudfront.net/posts/2019/07/13/5d298de62f4831661403bc64/s_5d298e0b8d653d3b85bacc86.jpg',
    description: 'Rain boots for the rain',
    price: 50
  },
  {
    item: 'Chopsticks',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81XEN3w9iJL._SX425_.jpg',
    description: "Chopsticks because you will need to eat",
    price: 10
  },
  {
    item: 'Metal Straw',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71vIIgE4BRL._SX466_.jpg',
    description: "Save the turtles",
    price: 15
  }
]

function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      {shoppingCartItems.map(Product)}
    </div>
  );
}


function Product(props) {
  return(
    <div className="product">
      <div className="item-name">
        <h1> {props.item} </h1>
      </div>
      <div className="item-image">
        <img src={props.image} width="100"/>  
      </div>
      <div className="item-description">
        <p> {props.description}</p>
        <p> {props.price} </p>
      </div>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
