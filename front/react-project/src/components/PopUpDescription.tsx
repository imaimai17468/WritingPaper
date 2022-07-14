import * as React from 'react';
import BasicPopover from './PopUpButton';
import { Box, Typography } from '@mui/material';

interface Props {
    mainText: string;
    popText: string;
    description: string;
}

export default function PopUpDescription(props: Props) {
    return(
        <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <BasicPopover mainText={props.mainText} popText={props.popText} placement={'left'} />
            <Typography sx={{px:2}} color={'#E4DCCF'}>{props.description}</Typography>
        </Box>
    );
}