import React, {useState, useEffect } from 'react';
import { Navbar, Products} from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('%c -> here!', 'color:orange;');
  console.log(products);

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}

export default App;