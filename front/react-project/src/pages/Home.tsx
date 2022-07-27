import React from 'react';
import { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { TextField } from '@mui/material'
import { Toolbar, AppBar } from '@mui/material';
import { Tabs, Tab } from '@mui/material'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Keyboard from '../components/Keyboard';
import Analyze from '../components/Analyze';
import DetailAccordion from '../components/DetailAccordion';
import SampleSelect from '../components/SampleSelect';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Home() {
  const [inputText, setInputText] = useState<string>('');
  const [codeText, setCodeText] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [value, setValue] = React.useState(0);
  const colorMode = useContext(ColorModeContext);
  const Navigate = useNavigate();

  const handleOnClick = () => {
    if(process.env.NODE_ENV == 'development') {
      axios.post('http://localhost:3000/', {'input': inputText, 'code': codeText})
      .then((response) => {
        console.log(response);
        setOutput(response.data);
      });
    }else if(process.env.NODE_ENV == 'production') {
      axios.post('https://writing-paper.vercel.app/', {'input': inputText, 'code': codeText})
      .then((response) => {
        console.log(response);
        setOutput(response.data);
      });
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handle2Convert = () => {
    Navigate('/convert');
  }

  const handle2Home = () => {
    Navigate('/');
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
      <Typography>{process.env.NODE_ENV}</Typography>
      <Typography>{process.env.STATE}</Typography>
      <Box component={'div'} sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', my: 4, gap: 3}}>
          <SampleSelect setCode={setCodeText} setInput={setInputText}/>
          <DetailAccordion />
        </Box>
        <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 10, width: '100%'}}>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '40%', minWidth: 300}}>
            <Box sx={{width: '100%'}}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Code" {...a11yProps(0)} />
                  <Tab label="Analyze" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <TextField label='input' value={inputText} sx={{mb: 3}} multiline maxRows={5} fullWidth onChange={(event) => {setInputText(event.target.value)}}/>
                <TextField label='code' value={codeText} sx={{mb: 3}} multiline minRows={15} maxRows={15} fullWidth onChange={(event) => {setCodeText(event.target.value)}}/>
                <Keyboard code={codeText} setCode={setCodeText} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Analyze code={codeText}/>
              </TabPanel>
            </Box>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', gap:2, minWidth: 300}}>
            <Button variant="contained" onClick={handleOnClick}>RUN</Button>
            <TextField label='output' value={output} multiline minRows={18} maxRows={18} fullWidth inputProps={{readOnly: true}}/>
          </Box>
        </Box>
      </Box>
      <Box sx={{width: '100%', background: '#576F72', color: '#F0EBE3', position: 'absolute', bottom: 0, left: 0, textAlign: 'center'}}>
      <Typography variant='body1'>Dev : imaimai17468</Typography>
      <Link href='https://github.com/imaimai17468/WritingPaper' color='#F0EBE3'>Repository</Link>
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
              contrastText: '#F0EBE3',
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
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
