import { Box, Typography } from '@mui/material';

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{ marginBottom: '20px', fontSize: { xs: '22px', sm: '34px' }, fontWeight: 500 }}>
                О нас
            </Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    // marginBottom: '10px'
                }}
            >
                Десять лет безупречной работы московской компании МСК-групп подразумевают предоставление особого спектра
                услуг по срочному размещению и быстрому транспортированию больных в ведущие клиники столицы,
                круглосуточно.
            </Typography>
        </Box>
    );
};
