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
  // palette: {
  //   mode: 'dark',
  //   background: {
  //     paper: '#161616ff',
  //     default: '#0B0809ff'
  //   },
  //   common: {
  //     black: '#0B0809ff',
  //     white: '#FDFDFDff'
  //   },
  //   primary: {
  //     main: '#62208Dff',
  //     contrastText: '#FDFDFDff'
  //   },
  //   secondary: {
  //     main: '#161616ff',
  //   },
  //   // success: {
  //   //   main: '#62208Dff'
  //   // },
  //   info: {
  //     main: '#3498db'
  //   },
  //   error: {
  //     main: '#F11A7B'
  //   },
  //   text: {
  //     primary: '#FDFDFDff',
  //     secondary: '#6A6A6Aff'
  //   }

  // }
})