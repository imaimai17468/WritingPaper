import React from 'react';
import { Box, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails,  } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BasicPopover from '../components/PopUpButton';
import PupUpDescription from '../components/PopUpDescription';
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
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
            <PopUpDescription mainText={'－'} popText={'全角ハイフンマイナス'} description={'ポインタをインクリメントする'} />
            <PopUpDescription mainText={'-'} popText={'半角ハイフンマイナス'} description={'ポインタをデクリメントする'} />
            <PopUpDescription mainText={'‐'} popText={'全角ハイフン'} description={'ポインタが指す値をインクリメントする'} />
            <PopUpDescription mainText={'−'} popText={'全角マイナス'} description={'ポインタが指す値をデクリメントする'} />
            <PopUpDescription mainText={'‒'} popText={'フィギュアダッシュ'} description={'ポインタが指す値を出力に書き出す'} />
            <PopUpDescription mainText={'—'} popText={'全角ダッシュ'} description={'入力から1バイト読み込んで、ポインタが指す先に代入する'} />
            <PopUpDescription mainText={'–'} popText={'二分ダッシュ'} description={'ポインタが指す値が0なら、対応する ] の直後にジャンプする'} />
            <PopUpDescription mainText={'―'} popText={'ホリゾンタルバー'} description={'ポインタが指す値が0でないなら、対応する [ にジャンプする'} />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default App;
