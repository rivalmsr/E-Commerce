import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography  } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../assets/commerce.png';

export const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Ecommerce Logo" height="25px" className={classes.img} />
            Commerse.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.bottom}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}
