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
import { HomeMaxOutlined } from '@mui/icons-material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Home() {
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
      <Box component={'div'} sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}>
        <Accordion sx={{my: 4}}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box component={'div'} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <PopUpDescription mainText={'－'} popText={'全角ハイフンマイナス'} description={'ポインタをインクリメントする'} />
              <PopUpDescription mainText={'-'} popText={'半角ハイフンマイナス'} description={'ポインタをデクリメントする'} />
              <PopUpDescription mainText={'‐'} popText={'全角ハイフン'} description={'ポインタが指す値をインクリメントする'} />
              <PopUpDescription mainText={'−'} popText={'全角マイナス'} description={'ポインタが指す値をデクリメントする'} />
              <PopUpDescription mainText={'‒'} popText={'フィギュアダッシュ'} description={'ポインタが指す値を出力に書き出す'} />
              <PopUpDescription mainText={'—'} popText={'全角ダッシュ'} description={'入力から1バイト読み込んで、ポインタが指す先に代入する'} />
              <PopUpDescription mainText={'–'} popText={'二分ダッシュ'} description={'ポインタが指す値が0なら、対応する ― の直後にジャンプする'} />
              <PopUpDescription mainText={'―'} popText={'ホリゾンタルバー'} description={'ポインタが指す値が0でないなら、対応する – にジャンプする'} />
            </Box>
          </AccordionDetails>
        </Accordion>
        <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 10, width: '100%'}}>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '40%', minWidth: 300}}>
            <TextField label='input' value={inputText} multiline maxRows={5} fullWidth onChange={(event) => {setInputText(event.target.value)}}/>
            <TextField label='code' value={codeText} multiline minRows={15} maxRows={15} fullWidth onChange={(event) => {setCodeText(event.target.value)}}/>
            <Keyboard code={codeText} setCode={setCodeText} />
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', gap:2, minWidth: 300}}>
            <Button variant="contained" onClick={handleOnClick}>RUN</Button>
            <TextField label='output' value={output} multiline minRows={18} maxRows={18} fullWidth inputProps={{readOnly: true}}/>
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
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
