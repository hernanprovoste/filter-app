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
import useSWR from 'swr'

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json())

const Home: NextPage = () => {
  const [selectValue, setSelectValue] = useState('')
  const { data, error } = useSWR(
    `http://localhost:5000/data?_page=1&_limit=6`,
    fetcher
  )

  if (error) return

  const handleChange = (e: SelectChangeEvent) => {
    setSelectValue(e.target.value)
  }

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

      <ProductList products={data} />
    </LayoutClient>
  )
}

export default Home
