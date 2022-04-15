import type { NextPage } from 'next'
import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { LayoutClient } from '../components/Layout'
import { useState } from 'react'
import { CardProduct } from '../components/UI'
import { ProductList } from '../components/Products'

const Home: NextPage = () => {
  const [selectValue, setSelectValue] = useState('')

  const handleChange = (e: SelectChangeEvent) => {
    setSelectValue(e.target.value)
  }

  console.log(selectValue)

  return (
    <LayoutClient title='Home Page' description='This is a description'>
      <Box display='flex' flexDirection='column' mb={4}>
        <Typography variant='h5' component='h5' color='secondary'>
          Salon de Belleza
        </Typography>
        <Divider sx={{ mb: 2, mt: 1 }} />
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-helper-label'>Orden</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Orden'
            value={selectValue}
            onChange={handleChange}
          >
            <MenuItem value={10}>Nombre</MenuItem>
            <MenuItem value={20}>Menor precio</MenuItem>
            <MenuItem value={30}>Mayor precio</MenuItem>
            <MenuItem value={30}>Mejor calificación</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={2}>
        <ProductList />
      </Grid>
    </LayoutClient>
  )
}

export default Home
