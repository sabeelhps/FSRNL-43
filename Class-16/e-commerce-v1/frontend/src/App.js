import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Person from './components/Person';
import Product from './components/Product';
import { v4 as uuid } from 'uuid';

function App() {
  const intialProducts = [
    {
      id: uuid(),
      name: 'Apple Watch Series 1',
      imageUrl: "https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaGVzfGVufDB8fDB8fHww",
      price: 100,
      desc: "Brand new apple watch with latest features.",
    },
    {
      id: uuid(),
      name: 'Apple Watch Series 2',
      imageUrl: "https://images.unsplash.com/photo-1530518119128-ca0bd1a0643b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaGVzfGVufDB8fDB8fHww",
      price: 200,
      desc: "Brand new apple watch with latest features.",
    },
    {
      id: uuid(),
      name: 'Apple Watch Series 2',
      imageUrl: "https://images.unsplash.com/photo-1520895653685-c739b6db8fce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjB3YXRjaGVzfGVufDB8fDB8fHww",
      price: 200,
      desc: "Brand new apple watch with latest features.",
    }
  ]

  const [products, setProducts] = useState(intialProducts); 


  const addProduct = (product) => {
    console.log('Adding a new product');
    setProducts(() => {
      return [...products, product];
    })
  }

  return (
    <div className="App">
      <h1>My First React App</h1>
      {/* <Person/> */}
      {/* <Product name={products[0].name} price={products[0].price} desc={products[0].desc} imageUrl={products[0].imageUrl}/>
      <Product name={products[1].name} price={products[1].price} desc={products[1].desc} imageUrl={products[1].imageUrl}/>
      <Product name={products[2].name} price={products[2].price} desc={products[2].desc} imageUrl={products[2].imageUrl}/> */}
      <Form addProduct={addProduct} />
      {
        products.map(function (product) {
          return <Product
            key={product.id}
            name={product.name}
            price={product.price}
            desc={product.desc}
            imageUrl={product.imageUrl}
          />
        })
      }
    </div>
  )
}

export default App;
