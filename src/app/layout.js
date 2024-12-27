import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import {Metrika} from '@/components/Metrika'
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    title: 'Лечение тяжелых пациентов. Госпитализация +7 (499) 719-81-00, 24/7',
    description: 'Качественное лечение тяжелых пациентов. Госпитализация 24/7. Позвоните по номеру +7 (499) 719-81-00 для консультации и помощи.',
    keywords: ['тяжелый случай пациент', 'пациент находится в тяжелом состоянии', 'уход за тяжелым пациентом', 'скорая помощь тяжелый пациент'],
    other: {
        ['yandex-verification']: '8a67daf7ca228bdf',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika/>
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
