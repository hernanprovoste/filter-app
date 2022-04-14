import type { NextPage } from 'next'
import { LayoutClient } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <LayoutClient title='Home Page' description='This is a description'>
      <h1>Hello World</h1>
    </LayoutClient>
  )
}

export default Home
