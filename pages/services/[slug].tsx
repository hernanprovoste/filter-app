import { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { LayoutClient } from '../../components/Layout'
import { ProductList } from '../../components/Products'
import { BottomPagination } from '../../components/UI'
import useSWR from 'swr'

const ServicesPage: NextPage = () => {
  const [selectValue, setSelectValue] = useState('')
  const [page, setPage] = useState(1)
  const router = useRouter()
  const query = router.query.slug

  const { data: totalData } = useSWR(
    `http://localhost:5000/data?tipo_servicio=${query}`
  )
  const totalPages = Math.ceil(totalData?.length / 6)

  const { data: products, error } = useSWR(
    `http://localhost:5000/data?tipo_servicio=${query}&${selectValue}_page=${page}&_limit=6`
  )

  if (error) return

  if (!products) return <div>Loading</div>

  const handleChange = async (e: SelectChangeEvent) => {
    setSelectValue(e.target.value)
  }

  const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <LayoutClient title={`${query}`} description='This is a description'>
      <Box display='flex' flexDirection='column' mb={4}>
        <Typography variant='h5' component='h5' color='secondary'>
          {query}
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
            <MenuItem value='_sort=nombre&_order=asc&'>Nombre</MenuItem>
            <MenuItem value='_sort=precio&_order=asc&'>Menor precio</MenuItem>
            <MenuItem value='_sort=precio&_order=desc&'>Mayor precio</MenuItem>
            <MenuItem value='_sort=calificacion&_order=desc&'>
              Mejor calificación
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <ProductList products={products} />

      <BottomPagination
        totalPages={totalPages}
        page={page}
        handleChange={handleChangePage}
      />
    </LayoutClient>
  )
}

export default ServicesPage
