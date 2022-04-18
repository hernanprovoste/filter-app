import { ChangeEvent, ChangeEventHandler, FC } from 'react'
import { Box, Button, Pagination, Stack, Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'

interface Props {
  totalPages: number
  page: number
  handleChange: () => ChangeEvent<HTMLInputElement>
}

export const BottomPagination: FC<Props> = ({
  totalPages,
  page,
  handleChange,
}) => {
  return (
    <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Box flex={1} />
        <Stack direction='row' spacing={2} sx={{ overflowX: 'auto' }}>
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
        <Box flex={1} />
      </Toolbar>
    </AppBar>
  )
}
