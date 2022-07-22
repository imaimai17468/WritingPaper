import React from 'react';
import { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PopUpDescription from '../components/PopUpDescription';
import Keyboard from '../components/Keyboard';
import CssBaseline from '@mui/material/CssBaseline';
import { Toolbar, AppBar } from '@mui/material';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import axios from 'axios';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function NotFound() {
  const [inputText, setInputText] = useState<string>('');
  const [codeText, setCodeText] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const colorMode = useContext(ColorModeContext);

  const handleOnClick = () => {
    axios.post('http://localhost:3000/', {'input': inputText, 'code': codeText})
    .then((response) => {
      console.log(response);
      setOutput(response.data);
    });
  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar sx={{display: 'flex', flexDirection: 'row', gap: 3}}>
            <Button color='inherit' disableRipple><Typography variant='h6'> WritingPaper </Typography></Button>
            <Button color='inherit'>Converter</Button>
            <IconButton sx={{marginLeft: 'auto'}} color='inherit' onClick={colorMode.toggleColorMode}>
              <InvertColorsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
    </Box>
      <Typography variant='h5'>Not Found</Typography>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = createTheme({
    typography: {
      button: {
        textTransform: 'none',
      }
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#576F72',
              contrastText: '#E4DCCF',
            },
            divider: '#E4DCCF',
            background: {
              default: 'F0EBE3',
              paper: '#7D9D9C',
            },
            text: {
              primary: '#576F72',
              secondary: '#576F72',
            },
          }
        : {
            primary: {
              main: '#816797',
              contrastText: '#D6D5A8',
            },
            divider: '#51557E',
            background: {
              default: '#1B2430',
              paper: '#51557E',
            },
            text: {
              primary: '#D6D5A8',
              secondary: '#D6D5A8',
            },
          }
        ),
    },
  })
  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NotFound />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
