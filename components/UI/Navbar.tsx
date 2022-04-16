import { Box, Button, Stack, Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box flex={1} />
        <Stack direction='row' spacing={2} sx={{ overflowX: 'auto' }}>
          <Button variant='outlined' color='secondary'>
            Otros servicios
          </Button>
          <Button variant='outlined' color='secondary'>
            Bienestar y salud
          </Button>
          <Button variant='outlined' color='secondary'>
            Entretención
          </Button>
          <Button variant='outlined' color='secondary'>
            Salón de belleza
          </Button>
          <Button variant='outlined' color='secondary'>
            Gastronomía
          </Button>
          <Button variant='outlined' color='secondary'>
            Estética corporal
          </Button>
          <Button variant='outlined' color='secondary'>
            Viajes y turismo
          </Button>
          {/* <Button variant='outlined' color='secondary'>
            Productos con retiro en mi tienda y/o despach
          </Button> */}
          {/* <Button variant='outlined' color='secondary'>
            Boton 1
          </Button> */}
        </Stack>
        <Box flex={1} />
      </Toolbar>
    </AppBar>
  )
}
