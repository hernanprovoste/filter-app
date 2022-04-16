import { NextPage, GetServerSideProps } from 'next'

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
import { useEffect, useState } from 'react'
import { ProductList } from '../components/Products'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json())

const Home: NextPage = (props) => {
  const [selectValue, setSelectValue] = useState('')
  const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const product = axios.get(
  //     `http://localhost:5000/data?tipo_servicio=Viajes%20y%20turismo&_page=1&_limit=6`
  //   )
  //   setProducts(product)
  // }, [])

  // console.log(products)

  const { data, error } = useSWR(
    `http://localhost:5000/data?tipo_servicio=Viajes%20y%20turismo&_sort=precio&_order=${selectValue}&_page=1&_limit=6`,
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
            <MenuItem value='asc'>Menor precio</MenuItem>
            <MenuItem value='desc'>Mayor precio</MenuItem>
            <MenuItem value={30}>Mejor calificación</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <ProductList products={data} />
    </LayoutClient>
  )
}

// // You should use getServerSideProps when:
// // - Only if you need to pre-render a page whose data must be fetched at request time

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await axios.get(
//     `http://localhost:5000/data?tipo_servicio=Viajes%20y%20turismo&_page=1&_limit=6`
//   )

//   return {
//     props: { data },
//   }
// }

export default Home
