import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export const WhyWeBlock = memo(() => {
    return (
        <Box
            component="article"
            id="whyWe"
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
                    fontWeight: 300,

                }}
            >
                Почему выбирают нас?
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Во-первых, мы не новички в медицинской логистике — за плечами уже больше десятка лет реального
                        опыта. Как-то раз на коллегиальном обеде подсчитали: за эти годы наслышались и навидались
                        такого, что можно целую книгу написать. И с каждым случаем копилка знаний только растёт.
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Работаем плотно с ведущими московскими клиниками — это не просто красивые слова для сайта. Мы
                        знаем, к кому обращаться, и дорогу между пунктом А и В выбираем не вслепую, а с учётом нюансов
                        каждого конкретного случая. Представьте: пациенту нужна перевозка после сложной операции — одной
                        лишь машины тут мало. Нужно выстроить процесс так, чтобы всё было гладко, безопасно и спокойно
                        для человека (и его близких).
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Кстати о транспорте — весь автопарк у нас свой. Есть и простые санитарные машины для стандартных
                        задач, и серьёзные реанимобили на случай экстренных ситуаций. Можем «перекинуться» с одного
                        формата на другой практически мгновенно.
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Но какой бы ни был транспорт — главное всё равно люди. Наши врачи и медики — неравнодушные
                        специалисты, которые умеют держать голову холодной даже в сложные моменты. Годами собирали
                        команду тех, кто по-настоящему заботится.
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        И ещё: мы всегда на связи. Будь это полночь или утро январских праздников, вы точно дозвонитесь
                        до живого человека (не автоответчика) и сможете срочно договориться о помощи.
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        В итоге за нашими услугами стоит ощущение надёжного тыла — люди об этом быстро рассказывают
                        друзьям и знакомым, потому что спокойствие ближних слишком ценно, чтобы рисковать им на чём-то
                        непроверенном.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
});
