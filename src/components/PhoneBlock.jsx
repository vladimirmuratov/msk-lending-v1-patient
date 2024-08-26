import React from 'react'
import {Box, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

const PhoneBlock = () => {
    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    fontSize: {xs: '28px', sm: '34px'},
                    fontWeight: 600,
                    color: 'var(--red)',
                    textAlign: 'center'
                }}
            >{phoneNumber}</Typography>
        </Box>
    )
}

export default React.memo(PhoneBlock)
