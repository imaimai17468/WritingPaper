import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
    code: string;
}

interface Dict {
    [key: string]: string;
}
let d: Dict = {};
d['－'] = '全角ハイフンマイナス';
d['-'] = '半角ハイフンマイナス';
d['‐'] = '全角ハイフン';
d['−'] = '全角マイナス';
d['‒'] = 'フィギュアダッシュ';
d['—'] = '全角ダッシュ';
d['–'] = '二分ダッシュ';
d['―'] = 'ホリゾンタルバー';

export default function Analyze(props: Props) {
    return(
        <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1}}>
            {
                props.code.split('').map((char, index) => {
                    if(d[char] == ''){
                        return(
                            <Typography>{char}</Typography>
                        )
                    }else{
                        return(
                            <Tooltip title={d[char]} placement={'top'} arrow>
                                <Typography>{char}</Typography>
                            </Tooltip>
                        )
                    }
                })
            }
        </Box>
    )
}