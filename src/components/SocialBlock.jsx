import React from 'react';
import { Box, Link } from '@mui/material';
import { email, maxLink, telegramLink } from '@/config';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { TelegramIcon } from '@/components/icons/TelegramIcon';
import { MaxIcon } from '@/components/icons/MaxIcon';
// import Image from 'next/image';

const SocialBlock = ({ className = '', color = 'var(--main-color)', style = {} }) => {

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                ...style
            }}
            className={className}
        >
            {/*<Link className='link' target="_blank" href={`https://wa.me/${phoneWhatsApp}`}>
                <WhatsAppIcon color={color}/>
                <Image
                    src="/images/social/new/whatsapp.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>*/}
            <Link className="link" target="_blank" href={maxLink}>
                <MaxIcon color={color} />
            </Link>
            <Link className="link" target="_blank" href={telegramLink}>
                <TelegramIcon color={color} />
            </Link>
            {/*<Link href={`viber://add?number=${phoneViber}`}>
                <Image
                    src="/images/social/viber.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>*/}
            <Link className="link" href={`mailto:${email}`}>
                <EmailIcon color={color} />
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
