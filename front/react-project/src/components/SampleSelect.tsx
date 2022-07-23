import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    setCode: Function,
    setInput: Function,
}

const inputs = [
    '',
    's',
    '',
    '',
]

const codes = [
    '‐‐‐‐‐‐‐‐‐–－‐‐‐‐‐‐‐‐－‐‐‐‐‐‐‐‐‐‐‐－‐‐‐－‐----−―－‒－‐‐‒‐‐‐‐‐‐‐‒‒‐‐‐‒－‐‐‐‐‐‒--‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‒－‒‐‐‐‒−−−−−−‒−−−−−−−−‒－‐‒－‐‒',
    '—‒',
    '‐‐‐‐‐‐‐‐‐‐‐‐–−－‐‐‐‐‐‐－‐‐‐‐‐‐‐‐‐－‐‐‐‐‐－‐‐‐‐‐‐‐‐‐‐－‐‐‐‐‐‐‐‐‐‐－‐‐‐－－－－－－‐‐‐‐‐‐‐‐------------―－−−－−−−－‐‐‐‐‐‐－−−−－‐‐－−−−−－－－－‐‐‐－‐‐‐‐‐－‐‐‐‐–－－－‐–−--–−－－‐－‐---―－－－–−---‐－－－―‐-––−―－−--–−－‐－‐--―－－–−--‐－－―‐-––−―－−---‐－−－―－–−---−−−−−−−−−－‐‐‐‐‐‐‐‐‐－－－－－‐---―-―－–−-‐‐‐‐‐‐‐–--‐‐‐‐‐‐‐－－−―-‐‐‐‐‐‐‐‐－－―－－－―------–----―－−–−--‐－‐－―-–−－‐-―‐-––−―－−-―－–−－‐‐‐---------‒－‒－－－‒‒－－‐－－―－－−–−---‐－‐－－―--–−－－‐--―‐-––−―－−-―－–−－－‐‐‐‐‐--------‒－‒－‒‒－－‐－－―-‐-––−―－−-―－–−－－－－－–－－－－―----–‒----―-―--‒－－－－－－−―',
    '－‐‐‐‐–-‐‐‐‐‐‐‐‐－−―－‐‐‐‐‐‐‐‐–-‐‐‐‐‐‐－−―-‐‐‒-‒－‐‒-‒－‐‐‒-‒－‐‐‒-‒－−−−−−−‒‒-‒－‒‐‐‒-‒－−−‒‐‐‐‐‐‐‒-‒－−−−−−−‒－‐‐‐–-‐‐‐－−―-−‒-‒－−−−−−−−‒‐‒-‒－ −‒‐‐‐‐‐‐‐‒-‒－−−−−−−‒−−‒-‒－‐‐‒‐‐‐‐‒-‒－−−−‒−−−‒-‒－ ‐‐‐‒−‒-‒－‐‒‐‐‐‒-‒－−−‒−−‒-‒－ ‐‐‒‐‐‐‐‒-‒－−−−‒−−−−−‒-‒－‐‐‐‐‐‒‐‒-‒－‒−−−−−−‒-‒－ ‐‐‐‐‐‐‒−−−−‒-‒－ ‐‐‐‐‒‐‐‒-‒－ −‒−−−−−‒-‒－‐‐‐‐‐‒‐‒-‒－‒−−‒',
]

export default function SampleSelect(props: Props) {
    const [sample, setSample] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSample(event.target.value as string);
        
        const index: number = Number(event.target.value);
        props.setCode(codes[index]);
        props.setInput(inputs[index]);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Samples</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sample}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={0}>Hello World!</MenuItem>
                <MenuItem value={1}>One Charactor Input</MenuItem>
                <MenuItem value={2}>FizzBuzz</MenuItem>
                <MenuItem value={3}>Prime Number</MenuItem>
            </Select>
            </FormControl>
        </Box>
    )
}