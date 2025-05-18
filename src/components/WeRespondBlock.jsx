import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { memo } from 'react';

export const WeRespondBlock = memo(() => {
    return (
        <Box
            component="section"
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
                }}>
                Мы отвечаем за:
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 400, color: 'var(--main-color)', }}>Выбор
                        оптимальных
                        медицинских учреждений</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 400, color: 'var(--main-color)', }}>Детальная
                        проверка
                        качества и ценовой политики</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 400, color: 'var(--main-color)', }}>Врачебный
                        надзор на
                        протяжении всего лечения</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 400, color: 'var(--main-color)', }}>Индивидуальное
                        обслуживание</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 400, color: 'var(--main-color)', }}>Юридическую
                        защиту</Typography>
                </Box>

            </Box>

        </Box>
    );
});
