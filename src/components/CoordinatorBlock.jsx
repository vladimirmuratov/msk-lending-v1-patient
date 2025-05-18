import { Box, Typography } from '@mui/material';
import { memo } from 'react';

export const CoordinatorBlock = memo(() => (
    <Box
        component="section"
        sx={{
            paddingX: '12px',
            paddingY: { xs: '25px', sm: '50px' },
        }}
    >
        <Typography
            variant="h2"
            sx={{
                fontSize: { xs: '28px', sm: '34px' },
                fontWeight: 500,
                color: 'var(--red)',
                textAlign: 'center',
                marginBottom: '15px',
            }}
        >
            Медицинская Сервисная Компания
        </Typography>
        <Typography
            variant="h3"
            sx={{
                marginBottom: '20px',
                fontSize: { xs: '24px', sm: '30px' },
                fontWeight: 400,
                textAlign: 'center',
                color: 'var(--main-color)',
                textWrap: 'balance',
            }}
        >
            официальный координатор по госпитализации в федеральные медицинские учреждения г. Москвы
        </Typography>
        <Typography
            sx={{
                fontSize: 20,
                fontWeight: 400,
                textAlign: 'center',
                color: 'var(--main-color)',
                textWrap: 'balance',
            }}
        >
            При обращении в сервис <Box component="span" sx={{ fontWeight: 600, color: 'var(--red)' }}>МСК</Box> - все
            расчеты ведутся по официальным ценам с конкретной медицинской
            организацией
        </Typography>
    </Box>
));
