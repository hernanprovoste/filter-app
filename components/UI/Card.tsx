import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import React, { FC } from 'react'

interface Props {
  image?: string
  title: string
  subtitle: string
  price: number
}

export const CardProduct: FC<Props> = ({ image, title, subtitle, price }) => {
  return (
    <Grid item xs={6}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia component='img' height={140} image={image} alt={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            color='secondary'
          >
            {title}
          </Typography>
          <Typography variant='body2' color='secondary'>
            {subtitle}
          </Typography>
          <Typography variant='body1' component='div' color='secondary'>
            {price}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
