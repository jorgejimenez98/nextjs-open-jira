import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const ligthTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4a148c'
    },
    secondary: {
      main: '#19874b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: grey[300]
    },
  },
  components: {
    
  }
})