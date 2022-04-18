import React, { FC } from 'react'
import { Grid } from '@mui/material'
import { IProduct } from '../../interfaces'
import { CardProduct } from '../UI'
interface Props {
  products: IProduct[]
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products?.map((product) => (
        <CardProduct
          key={product.id_empresa}
          title={product.nombre}
          subtitle={product.tipo_servicio}
          price={product.precio}
          image={product.banner}
        />
      ))}
    </Grid>
  )
}
