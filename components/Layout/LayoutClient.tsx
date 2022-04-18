import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { BottomPagination, Navbar } from '../UI'
import { Container } from '@mui/material'

interface Props {
  title: string
  description: string
  children?: ReactNode
}

export const LayoutClient: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>

      <nav>
        <Navbar />
      </nav>

      <Container
        maxWidth='sm'
        sx={{
          margin: '80px auto',
          padding: '0px 30px',
        }}
      >
        {children}
      </Container>
    </>
  )
}
