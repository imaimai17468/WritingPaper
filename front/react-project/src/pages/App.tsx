import React from 'react';
import { Box, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { TextField } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PopUpDescription from '../components/PopUpDescription';

function App() {
  return (
    <Box component={'div'} sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography variant={'h2'}>WritingPaper</Typography>
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
          <TextField label='input' multiline maxRows={5} fullWidth/>
          <TextField label='code' multiline minRows={15} maxRows={15} fullWidth/>
        </Box>
        <Box component={'div'} sx={{width: '40%', minWidth: 300}}>
          <TextField label='output' multiline minRows={18} maxRows={18} fullWidth/>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
