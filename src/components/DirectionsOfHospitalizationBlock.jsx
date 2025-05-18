import { Box, Typography } from '@mui/material';
import { directions } from '@/config';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import { memo } from 'react';

export const DirectionsOfHospitalizationBlock = memo(() => {
    return (
        <Box
            component="section"
            id="directions"
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
                Направления госпитализации:
            </Typography>

            {directions.map(({ id, label }) => (
                <Box key={id} sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        component="p"
                        sx={{
                            fontSize: { xs: 18, sm: 20 },
                            fontWeight: 400,
                            color: 'var(--main-color)',
                        }}
                    >
                        {label}
                    </Typography>
                </Box>
            ))}

        </Box>
    );
});
