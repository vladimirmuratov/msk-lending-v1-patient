import React from 'react';
import { Box, Link } from '@mui/material';
// import Image from 'next/image';
import { email, phoneTelegram, phoneWhatsApp } from '@/config';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { TelegramIcon } from '@/components/icons/TelegramIcon';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

const SocialBlock = ({ className = '', color= 'var(--main-color)', isMobile = false }) => {

    return (
        <Box
            sx={{
                marginTop: isMobile ? 0 : '5px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
            className={className}
        >
            <Link className='link' target="_blank" href={`https://wa.me/${phoneWhatsApp}`}>
                <WhatsAppIcon color={color}/>
                {/*<Image
                    src="/images/social/new/whatsapp.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />*/}
            </Link>
            <Link className='link' target="_blank" href={`https://t.me/${phoneTelegram}`}>
                <TelegramIcon color={color}/>
                {/*<Image
                    src="/images/social/new/telegram.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />*/}
            </Link>
            {/*<Link href={`viber://add?number=${phoneViber}`}>
                <Image
                    src="/images/social/viber.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>*/}
            <Link className='link' href={`mailto:${email}`}>
                <EmailIcon color={color}/>
                {/*<Image
                    className="emailIcon"
                    src="/images/social/new/email.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />*/}
            </Link>
        </Box>
    );
};

export default React.memo(SocialBlock);
