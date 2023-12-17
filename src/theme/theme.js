import { createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const vazirFont = localFont({
  src: "../assets/fonts/Vazir.woff2",
  display: "swap",
});

export const lightTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: `${vazirFont.style.fontFamily}, ${roboto.style.fontFamily}`
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#cdf463',
    },
    secondary: {
      main: '#170a13',
    },
    info: {
      main: '#eff3f4'
    },
    common: {
      white: '#fafafa'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // components: {
  //   MuiAppBar: {
  //     defaultProps: {
  //       style: {
  //         boxShadow: 'none',
  //         backgroundColor: 'red'
  //       }
  //     }
  //   }
  // }
})