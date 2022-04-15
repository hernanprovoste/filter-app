import { Box, Button, Pagination, Stack, Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'

export const BottomPagination = () => {
  return (
    <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Box flex={1} />
        <Stack direction='row' spacing={2} sx={{ overflowX: 'auto' }}>
          <Pagination count={4} />
        </Stack>
        <Box flex={1} />
      </Toolbar>
    </AppBar>
  )
}
