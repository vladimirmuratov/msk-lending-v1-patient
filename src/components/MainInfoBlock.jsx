import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import MinorCrashOutlinedIcon from '@mui/icons-material/MinorCrashOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

export const MainInfoBlock = memo(() => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingTop: { xs: '50px', sm: '100px' },
                paddingBottom: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >
            <Box
                sx={{
                    paddingBottom: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Госпитализация тяжёлобольного пациента в Москве
                </Typography>

                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Медицинская Сервисная
                        Компания</Box> предоставляет услуги по
                    экстренной и плановой госпитализации тяжелобольных пациентов. Мы организуем транспортировку и
                    размещение
                    больного в профильных клиниках Москвы и области — быстро, безопасно и с полным медицинским
                    сопровождением.
                    <br />
                    <br />
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>
                        Круглосуточная медицинская помощь и срочная госпитализация.
                    </Box>
                </Typography>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '10px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Когда необходима срочная госпитализация?
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: '20px', sm: '24px' },
                        fontWeight: 400
                    }}
                >
                    Мы рекомендуем обратиться за услугой госпитализации, если:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Состояние пациента резко ухудшилось
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Нужна неотложная помощь или срочная диагностика
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Требуется госпитализация после инсульта, инфаркта, травмы
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Обострение хронических заболеваний
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Больной не может передвигаться самостоятельно
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Необходим круглосуточный уход и наблюдение специалистов
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    paddingTop: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Как проходит госпитализация?
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <WifiCalling3OutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Вы обращаетесь — по телефону или через сайт
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SupportAgentOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Мы проводим оценку состояния — врач приезжает на дом или консультирует по видео
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <MinorCrashOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Организуем транспортировку — санитарный транспорт, реанимобиль, медицинская бригада
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Размещаем пациента в подходящем стационаре — подбираем клинику по профилю заболевания и
                            бюджету
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CachedOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Оказываем сопровождение и поддержку — контроль за процессом лечения, связь с родственниками,
                            переводы в другие учреждения при необходимости
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
});
