'use client'

import {Box, Button, Typography} from '@mui/material'
import {phoneNumber} from '@/config'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import SocialBlock from '@/components/SocialBlock'

export const Banner = () => {
    const router = useRouter()
    const [isMobile, setMobile] = useState(true)

    useEffect(() => {
        const os = navigator.userAgentData.platform

        if (os === 'Android' || os === 'iOS') {
            setMobile(true)
        } else {
            setMobile(false)
        }

    }, [])

    return (
        /*<Box
            component="figure"
            className="banner-container"
            sx={{
                position: 'relative',
            }}
        >
            <img className="banner" src="/images/images-for-landings/3.webp" alt="banner"/>
            <Box sx={{
                position: 'absolute',
                top: {xs: '10%', sm: '20%'},
                left: '5%',
            }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {xs: 32, sm: 58, md: 62},
                        lineHeight: 1.1,
                        fontWeight: 600,
                        color: 'var(--black)',
                        textShadow: '0px 4px 4px lightgray',
                        marginBottom: {xs: '5px', sm: '10px'}
                    }}>
                    Работа<br/>
                    с тяжелыми<br/>
                    пациентами
                </Typography>

                {isMobile
                    ? (<Box
                    sx={{
                        display: 'inline'
                    }}
                    >
                        <Button
                            onClick={() => router.push(`tel:${phoneNumber}`)}
                            variant="contained"
                            color="error"
                            size="large"
                            sx={{
                                display: isMobile ? 'block' : 'none'
                            }}
                        >
                            Позвонить
                        </Button>
                        <SocialBlock className='banner-social-mobile'/>
                    </Box>)
                    : <Typography
                        sx={{
                            color: 'var(--red)',
                            display: isMobile ? 'none' : 'block',
                            fontSize: {xs: 16, sm: 32, md: 62},
                            fontWeight: 600,
                            textShadow: '0px 4px 4px lightgray',
                        }}>{phoneNumber}</Typography>
                }
            </Box>
        </Box>*/

        <Box
            component="figure"
            className="banner-container"
            sx={{
                position: 'relative'
            }}
        >

            <Box
                sx={{
                    width: '100%',
                    // height: {xs: '129px', sm: '241px', md: '322px', lg: '459px'},
                    height: {xs: 'calc(var(--index) * 19)', sm: 'calc(var(--index) * 26)', md: 'calc(var(--index) * 33)', lg: 'calc(var(--index) * 33)'},
                    backgroundImage: `url(/images/images-for-landings/3.webp)`,
                    backgroundSize: 'cover',
                }}
            />
            <Box sx={{
                position: 'absolute',
                top: {xs: '10%', sm: '20%'},
                left: '5%',
            }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {xs: 20, sm: 40, md: 60},
                        lineHeight: 1,
                        fontWeight: 600,
                        color: 'var(--black)',
                        textShadow: '0px 4px 4px lightgray',
                        marginBottom: {xs: '5px', sm: '10px'}
                    }}>
                    Работа<br/>
                    с тяжелыми<br/>
                    пациентами
                </Typography>

                {isMobile
                    ? (<Box
                        sx={{
                            display: 'inline'
                        }}
                    >
                        <Button
                            onClick={() => router.push(`tel:${phoneNumber}`)}
                            variant="contained"
                            color="error"
                            size="large"
                            sx={{
                                display: isMobile ? 'block' : 'none'
                            }}
                        >
                            Позвонить
                        </Button>

                        <SocialBlock className="banner-social-mobile"/>

                    </Box>)
                    : <Typography
                        sx={{
                            color: 'var(--red)',
                            display: isMobile ? 'none' : 'block',
                            fontSize: {xs: 16, sm: 32, md: 62},
                            fontWeight: 600,
                            textShadow: '0px 4px 4px lightgray',
                        }}>{phoneNumber}</Typography>
                }
            </Box>

        </Box>
    )
}
