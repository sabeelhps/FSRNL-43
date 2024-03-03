import React, {useState, useEffect} from 'react';
import ProductList from '../components/ProductList/ProductList';
import { v4 as uuid } from 'uuid';
import MainNavigation from '../components/MainNavigation/MainNavigation';
import axios from 'axios';

const AllProducts = () => {

  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(10);

    const intialProducts = [
        {
          id: uuid(),
          title: 'Apple Watch Series 1',
          image: "https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaGVzfGVufDB8fDB8fHww",
          price: 100,
          description: "Brand new apple watch with latest features.",
        },
        {
          id: uuid(),
          title: 'Apple Watch Series 2',
          image: "https://images.unsplash.com/photo-1530518119128-ca0bd1a0643b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaGVzfGVufDB8fDB8fHww",
          price: 200,
          description: "Brand new apple watch with latest features.",
        },
        {
          id: uuid(),
          title: 'Apple Watch Series 2',
          image: "https://images.unsplash.com/photo-1520895653685-c739b6db8fce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjB3YXRjaGVzfGVufDB8fDB8fHww",
          price: 200,
          description: "Brand new apple watch with latest features.",
        }
      ]
    
  const [products, setProducts] = useState(intialProducts); 
    
  // useEffect(() => {
  //   callback function
  // },[dependency Array])


  // This will executed after each re-render.
  useEffect(() => {
    console.log('inside use effect 1');
  });

  // Will get executed only after first render.
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(() => {
          return res.data;
        })
      }
      catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log('inside use effect 3');
  }, [count]);

  useEffect(() => {
    console.log('inside use effect 4');
  }, [count2]);


  const addProduct = (product) => {
      console.log('Adding a new product');
      setProducts(() => {
        return [...products, product];
      })
  }

  const incrementCountHandler = () => {
    setCount(() => count + 1);
  }

  const incrementCountHandler2 = () => {
    setCount2(() => count2 + 1);
  }
    
  return (
      <div>
      <h1>All Products</h1>
      <h2>{count}</h2>
      <button onClick={incrementCountHandler}>+</button>

      <h2>{count2}</h2>
      <button onClick={incrementCountHandler2}>Second Counter++</button>
      <MainNavigation/>
      <ProductList products={ products } />
      </div>
  )
}

export default AllProducts