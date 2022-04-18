import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, Stack, Toolbar, Link, Chip } from '@mui/material'

import AppBar from '@mui/material/AppBar'

const urls = [
  { id: 1, title: 'Otros servicios' },
  { id: 2, title: 'Bienestar y salud' },
  { id: 3, title: 'Entretención' },
  { id: 4, title: 'Salón de belleza' },
  { id: 5, title: 'Gastronomía' },
  { id: 6, title: 'Estética corporal' },
  { id: 7, title: 'Viajes y turismo' },
]

export const Navbar = () => {
  const { asPath } = useRouter()

  return (
    <AppBar>
      <Toolbar>
        <Box flex={1} />
        <Stack direction='row' spacing={2} sx={{ overflowX: 'auto' }}>
          {urls.map((url) => (
            <NextLink key={url.id} href={`/services/${url.title}`} passHref>
              <Link>
                <Button
                  variant={
                    asPath === `/services/${url.title}`
                      ? 'contained'
                      : 'outlined'
                  }
                  color='secondary'
                >
                  {url.title}
                </Button>
              </Link>
            </NextLink>
          ))}
        </Stack>
        <Box flex={1} />
      </Toolbar>
    </AppBar>
  )
}
