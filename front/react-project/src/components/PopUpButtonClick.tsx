import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

interface Props {
  mainText: string;
  popText: string;
  placement: 'top' | 'bottom' | 'left' | 'right';
  code: string;
  setCode: Function;
}

export default function PopUpButton(props: Props) {
  return (
    <Box component={'div'}>
      <Tooltip title={props.popText} placement={props.placement} arrow>
        <Button variant="contained" onClick={() => props.setCode(props.code + props.mainText)}>{props.mainText}</Button>
      </Tooltip>
    </Box>
  );
}