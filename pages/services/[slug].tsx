import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { LayoutClient } from '../../components/Layout'

const ServicesPage: NextPage = () => {
  return (
    <LayoutClient
      title={'Servicios'}
      description={'Estos son los servicios de ....'}
    >
      <Typography variant='h5'>This is a page services</Typography>
    </LayoutClient>
  )
}

export default ServicesPage
