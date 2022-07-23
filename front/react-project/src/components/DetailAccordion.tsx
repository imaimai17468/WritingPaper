import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PopUpDescription from './PopUpDescription';

export default function DetailAccordion() {
    return (
        <Box>
            <Accordion>
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
        </Box>
    )
}