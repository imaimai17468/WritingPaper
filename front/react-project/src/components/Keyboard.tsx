import * as React from 'react';
import PopUpButtonClick from './PopUpButtonClick';
import { Box } from '@mui/material';

interface Props {
    code: string;
    setCode: Function;
}

export default function Keyboard(props: Props) {
    return (
        <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 1, flexWrap: 'wrap'}}>
            <PopUpButtonClick mainText={'－'} popText={'全角ハイフンマイナス'} placement={'top'} code={props.code} setCode={props.setCode} />
            <PopUpButtonClick mainText={'-'} popText={'半角ハイフンマイナス'} placement={'top'} code={props.code} setCode={props.setCode} />
            <PopUpButtonClick mainText={'‐'} popText={'全角ハイフン'} placement={'top'} code={props.code} setCode={props.setCode} />
            <PopUpButtonClick mainText={'−'} popText={'全角マイナス'} placement={'top'} code={props.code} setCode={props.setCode} />
            <PopUpButtonClick mainText={'‒'} popText={'フィギュアダッシュ'} placement={'top'} code={props.code} setCode={props.setCode} />
            <PopUpButtonClick mainText={'—'} popText={'全角ダッシュ'} placement={'top'} code={props.code} setCode={props.setCode} />
            <PopUpButtonClick mainText={'–'} popText={'二分ダッシュ'} placement={'top'} code={props.code} setCode={props.setCode} />
            <PopUpButtonClick mainText={'―'} popText={'ホリゾンタルバー'} placement={'top'} code={props.code} setCode={props.setCode} />
        </Box>
    );
  }