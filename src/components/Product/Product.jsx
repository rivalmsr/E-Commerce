import React from 'react';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

const Product = ({product}) => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name}>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterButtom>
            {product.name}
          </Typography>
        </div>
      </CardContent>
      </CardMedia>
    </Card>
  )
}