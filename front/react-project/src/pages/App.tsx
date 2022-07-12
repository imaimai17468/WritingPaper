import React from 'react';
import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { TextField } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PopUpDescription from '../components/PopUpDescription';
import Keyboard from '../components/Keyboard';

function App() {
  const [inputText, setInputText] = useState<string>('');
  const [codeText, setCodeText] = useState<string>('');
  
  return (
    <div>
      <Box component={'header'} sx={{height: '8vh', backgroundColor: '#1769aa', width: '100%', margin: 0}}>
          <Typography variant="h4">WritingPaper</Typography>
      </Box>
      <Box component={'div'} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
            <Box component={'div'} sx={{backgroundColor: '#1769aa', paddingBottom: 2, borderRadius: 5}}>
              <Typography variant={'body1'} sx={{textAlign: 'center', py: 1, color:'whitesmoke'}}>Keyboard</Typography>
              <Keyboard code={codeText} setCode={setCodeText} />
            </Box>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', gap:2, minWidth: 300}}>
            <Button variant="contained">RUN</Button>
            <TextField label='output' multiline minRows={18} maxRows={18} fullWidth inputProps={{readOnly: true}}/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
