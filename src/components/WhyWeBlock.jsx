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
                        sx={{
                            color: 'var(--main-color)',
                            marginBottom: '20px',
                            fontSize: { xs: '22px', sm: '34px' },
                            fontWeight: 500
                        }}>
                Почему именно мы?
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                Наша организация в Москве и Подмосковье специализируется на решении вопросов госпитализации. Мы обладаем
                экспертными знаниями о лучших клиниках и медицинских специалистах региона, а также актуальной
                информацией о стоимости индивидуальных палат. Мы знаем профильные учреждения для различных заболеваний.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                В случае отказа от госпитализации в других медицинских центрах, мы берем на себя задачу организации
                госпитализации. Особое внимание уделяется госпитализации пожилых граждан, включая круглосуточное
                сопровождение <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>24/7</Box>.
            </Typography>
        </Box>
    );
};
