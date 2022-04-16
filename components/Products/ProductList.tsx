import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { CardProduct } from '../UI'

export interface IProduct {
  id_empresa: number
  nombre: string
  tipo_servicio: string
  precio: number
  calificacion: number
  banner: string
}

interface IProduct2 {
  products: IProduct[]
}

export const ProductList: FC<IProduct2> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
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
