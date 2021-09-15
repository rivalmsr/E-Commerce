import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles';

const products = [
  {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$10', image: 'https://www.famousfootwear.com/blob/product-images/20000/95/36/4/95364_pair_large.jpg'},
  {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0hgchFMlEzt3qxKU08nSUpr2sGalEsN9OWm-3dxr4-Q9kNj1nfyMU71Tfs3Qeu2WyR0&usqp=CAU'}
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
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