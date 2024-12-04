import { Box, Typography } from '@mui/material';

export const WhyWeBlock = () => {
    return (
        <Box
            component="section"
            id="whyWe"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{ marginBottom: '20px', fontSize: { xs: '22px', sm: '34px' }, fontWeight: 500 }}>
                Почему именно мы?
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                В Москве и Подмосковье наша организация специализируется на решении вопросов госпитализации, включая
                экспертное понимание лучших клиник и медицинских работников региона. Мы владеем актуальной информацией о
                стоимости индивидуальных палат в стационарах, а также знаем конкретные учреждения с профильной
                направленностью для различных заболеваний.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                При необходимости мы берем на себя задачу госпитализации даже при первоначальных отказов из других
                медицинских центров. Особое внимание уделяется нюансам и особенностям госпитализации пожилых граждан,
                включая непрерывное сопровождение 24/7 в течение всей недели.
            </Typography>
        </Box>
    );
};
