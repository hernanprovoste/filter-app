import { Grid } from '@mui/material'
import React from 'react'
import { CardProduct } from '../UI'

export const ProductList = () => {
  return (
    <Grid container spacing={2}>
      <CardProduct
        title={'Lizzard'}
        subtitle={'This is a Lizzard'}
        price={1200}
        image={'./reptile.jpg'}
      />
      <CardProduct
        title={'Lizzard'}
        subtitle={'This is a Lizzard'}
        price={1200}
        image={'./reptile.jpg'}
      />
      <CardProduct
        title={'Lizzard'}
        subtitle={'This is a Lizzard'}
        price={1200}
        image={'./reptile.jpg'}
      />
      <CardProduct
        title={'Lizzard'}
        subtitle={'This is a Lizzard'}
        price={1200}
        image={'./reptile.jpg'}
      />
      <CardProduct
        title={'Lizzard'}
        subtitle={'This is a Lizzard'}
        price={1200}
        image={'./reptile.jpg'}
      />
      <CardProduct
        title={'Lizzard'}
        subtitle={'This is a Lizzard'}
        price={1200}
        image={'./reptile.jpg'}
      />
    </Grid>
  )
}
