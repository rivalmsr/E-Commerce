import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

const products = [
  {id: 1, name: 'Shoes', description: 'Running shoes.', image: 'https://media.dinomarket.com/docs/imgTD/2020-11/pic_macbook_m1_Grey1_121120221149_ll.jpg.jpg'},
  {id: 2, name: 'Macbook', description: 'Apple macbook.', image: 'https://media.dinomarket.com/docs/imgTD/2020-11/pic_macbook_m1_Grey1_121120221149_ll.jpg.jpg'}
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        { products.map((product)=> (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))
        }
      </Grid>
    </main>
  )
}

export default Products;