import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: grey[600],
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          height: 60,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        disableElevation: true,
        color: 'primary',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 30,
          fontSize: 10,
          maxHeight: '25.5px',
          display: 'inline-block',
          justifyContent: 'center',
          alignContent: 'center',
          overflow: 'hidden',
        },
      },
    },
  },
})
