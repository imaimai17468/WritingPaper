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
    'abcde',
    '5',
]

const codes = [
    '//9回分のインクリメントを済ませる\n‐‐‐‐‐‐‐‐‐–－‐‐‐‐‐‐‐‐－‐‐‐‐‐‐‐‐‐‐‐－‐‐‐－‐----−―\n//H\n－‒\n//e\n－‐‐‒\n//ll\n‐‐‐‐‐‐‐‒‒\n//o\n‐‐‐‒\n//スペース\n－‐‐‐‐‐‒\n//W\n--‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‒\n//o\n－‒\n//r\n‐‐‐‒\n//l\n−−−−−−‒\n//d\n−−−−−−−−‒',
    '//入力を受け取って出力\n—‒',
    `function FizzBuzz(){
        //文字定数・初期値を格納
        ‐‐‐‐‐‐‐‐‐‐‐‐
        –−－‐‐‐‐‐‐－‐‐‐‐‐‐‐‐‐－‐‐‐‐‐－‐‐‐‐‐‐‐‐‐‐－‐‐‐‐‐‐‐‐‐‐－‐‐‐－－－－－－‐‐‐‐‐‐‐‐------------―
        －−−－−−−－‐‐‐‐‐‐－−−−－‐‐－−−−−－－－－‐‐‐－‐‐‐‐‐－‐‐‐‐
        //繰り返し
        for –
            increment_counter(){
                －－－‐
                for –−
                    copy --–−－－‐－‐---―－－－–−---‐－－－―
                    ‐
                    if -––−―－−
                        copy --–−－‐－‐--―－－–−--‐－－―
                        ‐
                        if -––−―－−
                            ---‐－−－
                        ― else －–−
                            ---−−−−−−−−−－‐‐‐‐‐‐‐‐‐－－－－－‐---
                        ―-
                    ― else －–−
                        //数字を '1' にする
                        -‐‐‐‐‐‐‐–--‐‐‐‐‐‐‐－－−―-
                        ‐‐‐‐‐‐‐‐－－
                    ―
                －－－―
                ------–----―
            }
    
            //Fizz の処理
            －−
            copy –−--‐－‐－―-–−－‐-―
            ‐-––−―－−-―
            if －–−
                －‐‐‐---------‒－‒－－－‒‒－－‐－－
            ―
    
            //Buzz の処理
            －－−
            copy –−---‐－‐－－―--–−－－‐--―
            ‐-––−―－−-―
            if －–−
                －－‐‐‐‐‐--------‒－‒－‒‒－－‐－－
            ―
    
            //数の表示
            -‐
            if -–
                –−―－−-
            ― else －–−－
                print_counter(){
                    －－－－–－－－－―----–‒----―
                }
                -
            ―
    
            --‒－－－－－－
        −―
    }`,
    '//5つの文字を入力\n—－—－—－—－—\n//逆順に出力\n‒-‒-‒-‒-‒',
    '—‐‒'
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
                <MenuItem value={0}>Hello World</MenuItem>
                <MenuItem value={1}>One Charactor Input</MenuItem>
                <MenuItem value={2}>FizzBuzz</MenuItem>
                <MenuItem value={3}>Reverse String</MenuItem>
                <MenuItem value={4}>Increment</MenuItem>
            </Select>
            </FormControl>
        </Box>
    )
}