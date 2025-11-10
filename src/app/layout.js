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
    metadataBase: new URL('https://patient.mskdoctor.ru'),
    title: 'Медицинская Сервисная Компания. Платная госпитализация тяжёлобольных в клиники управления делами Президента РФ. 8 (499) 719-81-00, 24/7',
    description: 'Госпитализация тяжёлобольных в клиники управления делами Президента РФ: экстренная и плановая помощь, медицинский транспорт, оформление документов. Сотрудничаем с ведущими клиниками столицы. Звоните круглосуточно!',
    keywords: ['госпитализация тяжёлобольного Москва, срочная госпитализация, перевозка лежачего больного, госпитализация с сопровождением, частная госпитализация, реанимобиль Москва, госпитализация после инсульта, госпитализация на дому, госпитализация платно Москва, Медицинская Сервисная Компания'],
    other: {
        ['yandex-verification']: '8a67daf7ca228bdf',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Платная госпитализация тяжёлобольных – круглосуточный приём без ожидания. 8 (499) 719-81-00, 24/7',
        description: 'Оперативная госпитализация тяжёлобольных пациентов в федеральную или частную клинику. Круглосуточный приём, комфортные условия, высококвалифицированные врачи.',
        images: ['/images/banner2.webp'],
        url: 'https://patient.mskdoctor.ru/',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
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
