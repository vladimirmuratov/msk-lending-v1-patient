import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MainInfoBlock = () => {
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

            <Typography variant="h2"
                        sx={{
                            color: 'var(--main-color)',
                            marginBottom: '20px',
                            fontSize: { xs: '22px', sm: '34px' },
                            fontWeight: 500
                        }}>
                Сердце и опыт рядом: поддержка и уход для тяжелобольных пациентов
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Медицинская Сервисная Компания
                    (МСК)</Box> обеспечивает медицинскую поддержку тяжелобольных пациентов по всей России и в странах
                СНГ. Организуем транспортировку из регионов и зарубежья прямо до специализированных клиник. Встречаем в
                аэропорту или на вокзале, сопровождаем с уровнем скорой помощи.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Обеспечиваем круглосуточный уход, индивидуальный подход и комфортные условия. Координируем
                госпитализацию, включая встречу и сопровождение иностранных пациентов.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Работаем с полной отдачей, ценим доверие и ставим благополучие пациентов в приоритет.
            </Typography>

            <Typography component="p" sx={{
                fontSize: { xs: 18, sm: 20 },
                marginBottom: '20px',
                color: 'var(--red)',
                fontWeight: 600
            }}>
                Всегда на связи. Действуем быстро.
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Профессиональная
                        медицинская
                        команда</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    В штате — опытные врачи, медсёстры и узкие специалисты. Все регулярно проходят повышение
                    квалификации. Обеспечиваем доступ к ведущим экспертам медицины.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Инновационное
                        оснащение</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Используем передовые технологии для точной диагностики и эффективного лечения по мировым стандартам.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Индивидуальный подход
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Разрабатываем персональные схемы лечения, учитывая медицинские особенности и пожелания каждого
                    пациента.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Комфортные палаты
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Современные палаты с полным оснащением создают условия для быстрого восстановления.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Полный цикл медицинской помощи
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    От первичного приёма до реабилитации и наблюдения — сопровождаем на каждом этапе.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Госпитализация из регионов и СНГ
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Организуем транспортировку, приём и сопровождение пациентов из любой точки России и стран СНГ.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Прозрачные финансовые условия
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Понятная система оплаты и предварительное консультирование по стоимости лечения.
                </Typography>
            </Box>
        </Box>
    );
};
