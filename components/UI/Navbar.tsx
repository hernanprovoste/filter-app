import { Box, Button, Stack, Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box flex={1} />
        <Stack direction='row' spacing={2} sx={{ overflowX: 'auto' }}>
          <Button variant='outlined' color='secondary'>
            Boton 1
          </Button>
          <Button variant='outlined' color='secondary'>
            Boton 2
          </Button>
          <Button variant='outlined' color='secondary'>
            Boton 3
          </Button>
          <Button variant='outlined' color='secondary'>
            Boton 4
          </Button>
          <Button variant='outlined' color='secondary'>
            Boton 5
          </Button>
        </Stack>
        <Box flex={1} />
      </Toolbar>
    </AppBar>
  )
}
