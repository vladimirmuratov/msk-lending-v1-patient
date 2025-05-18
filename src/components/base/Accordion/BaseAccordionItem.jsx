import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { memo } from 'react';

export const BaseAccordionItem = memo(({ id, question, answer }) => {

    return (
        <Accordion>
            <AccordionSummary
                sx={{ fontWeight: 500, fontSize: { xs: 18, sm: 20 } }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
            >
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 400, fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}
                >
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{
                fontSize: { xs: 18, sm: 20 },
                lineHeight: 1.5,
                backgroundColor: 'var(--main-color)',
                color: '#fff',
                whiteSpace: 'pre-wrap'
            }}>
                {answer}
            </AccordionDetails>
        </Accordion>
    );
});
