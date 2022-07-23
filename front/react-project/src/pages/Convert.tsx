import React from 'react';
import { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Toolbar, AppBar } from '@mui/material';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Convert() {
  const [codeText, setCodeText] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [inputText, setInputText] = useState<string>('Brainfuck');
  const [outputText, setOutputText] = useState<string>('WritingPaper');
  const colorMode = useContext(ColorModeContext);
  const Navigate = useNavigate();

  const handleOnClick = () => {
    axios.post('http://localhost:3000/convert', {'code': codeText, 'mode': inputText})
    .then((response) => {
      console.log(response);
      setOutput(response.data);
    });
  }

  const handle2Convert = () => {
    Navigate('/convert');
  }

  const handle2Home = () => {
    Navigate('/');
  }

  const handleSwapLanguage = () => {
    setInputText(outputText);
    setOutputText(inputText);
  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar sx={{display: 'flex', flexDirection: 'row', gap: 3}}>
            <Button color='inherit' disableRipple onClick={handle2Home}><Typography variant='h6'> WritingPaper </Typography></Button>
            <Button color='inherit' onClick={handle2Convert}>Converter</Button>
            <IconButton sx={{marginLeft: 'auto'}} color='inherit' onClick={colorMode.toggleColorMode}>
              <InvertColorsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box component={'div'} sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: 6,
      }}>
        <Box sx={{mb: 3, display: 'flex', flexDirection: 'column'}}>
          <Typography variant='h4'>Brainfuck ⇔ WritingPaper</Typography>
          <Button variant="contained" onClick={handleSwapLanguage}>Swap Language</Button>
        </Box>
        <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 10, width: '100%'}}>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', minWidth: 300, gap: 3}}>
            <TextField label={inputText} value={codeText} multiline minRows={15} maxRows={15} fullWidth onChange={(event) => {setCodeText(event.target.value)}}/>
            <Button variant="contained" onClick={handleOnClick}>CONVERT</Button>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', gap:2, minWidth: 300}}>
            <TextField label={outputText} value={output} multiline minRows={18} maxRows={18} fullWidth inputProps={{readOnly: true}}/>
          </Box>
        </Box>
      </Box>
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
              default: '#F0EBE3',
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
        <Convert />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
