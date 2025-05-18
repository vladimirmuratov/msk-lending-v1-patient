import { Box, Typography } from '@mui/material';
import { BaseAccordionItem } from '@/components/base/Accordion/BaseAccordionItem';
import { memo } from 'react';

export const BaseAccordion = memo(({ id = '', title, items = [] }) => {

    return (
        <Box
            component="section"
            id={id}
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    color: 'var(--red)',
                    marginBottom: '20px',
                    fontSize: { xs: '22px', sm: '34px' },
                    fontWeight: 300
                }}>{title}</Typography>

            <Box>
                {items.map((item) => <BaseAccordionItem key={item.id} {...item} />)}
            </Box>

        </Box>
    );
});
