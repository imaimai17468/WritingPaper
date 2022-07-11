import React from 'react';
import { Box, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails,  } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function App() {
  return (
    <Box component={'div'} sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <Typography variant={'h2'}>WritingPaper</Typography>
      <Accordion sx={{width: '60%'}}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
}

export default App;
