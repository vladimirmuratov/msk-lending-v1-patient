import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

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
                component="article"
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

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Экстренно госпитализировать
                        тяжелобольного</Box> — задача и на физическую выносливость, и на крепкие нервы. Особенно если
                    речь о человеке в очень непростом состоянии: все должно сработать как часы, без суеты, но при этом
                    быстро.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    Мы уже много лет занимаемся этим в Москве — берём на себя всю организацию транспортировки пациента в
                    профильную клинику: от первой минуты звонка до того момента, когда человека размещают в подходящем
                    отделении. Не просто доставили и забыли — рядом с больным постоянно находится наш специалист,
                    который не даст ситуации выйти из-под контроля.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    Часто всё происходит вне графика: ночью, рано утром или в праздник. Нет проблем — мы всегда на
                    связи, экстренная госпитализация работает круглосуточно. Вроде банальная формулировка, но для родных
                    это огромная разница между беспокойством и уверенностью в завтрашнем дне.
                </Typography>
            </Box>

            <Box
                component="article"
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
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 400
                    }}
                >
                    Когда действительно не стоит терять время и нужно ехать в больницу? Вот несколько ситуаций, когда
                    срочная госпитализация — не просто хорошая идея, а жизненно необходимый шаг:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Резкое ухудшение самочувствия
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Если человек буквально на глазах становится хуже — вот ещё недавно разговаривал нормально, а
                            теперь даже слово выговорить трудно или сознание начинает путаться, это явный сигнал:
                            действовать надо быстро.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Экстренная диагностика и помощь
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Бывают состояния (подозрение на тяжелую инфекцию, внезапная боль в груди или животе), когда
                            без быстрого обследования — никуда. Иногда дорога каждая минута: чем раньше врачи увидят
                            картину целиком, тем больше шансов справиться.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Госпитализация после серьёзных событий
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Инсульт, инфаркт, тяжелые травмы — все эти вещи нуждаются в наблюдении и лечении под
                            присмотром команды специалистов. Домашние условия тут попросту не подходят.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Когда хроническая болезнь обострилась
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Диабет вдруг «зашкалил», астма не даёт вздохнуть без усилий, повышенная температура держится
                            уже сутки… Обычно удаётся справляться дома, но если симптомы вышли из-под контроля — лучше
                            перестраховаться и лечь в стационар.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Если человек совсем не может вставать
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Любое заболевание, лишающее возможности подняться с кровати (будь то слабость после операции
                            или резкое обострение болезни), требует не просто помощи родных. Тут нужен уход со стороны
                            профессионалов и круглосуточное наблюдение.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Необходим постоянный уход врачей
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Когда пациенту постоянно нужны процедуры, лекарства или контроль показателей (тот же
                            капельницы по расписанию или отслеживание давления), амбулаторное лечение становится
                            невозможным. Остаётся только один выход — довериться клинике с профессиональным персоналом.
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: 'var(--main-color)',
                            marginTop: '20px',
                            fontSize: { xs: 18, sm: 20 },
                            fontWeight: 400
                        }}
                    >
                        В каждом таком случае скорость реакции — это неформальность, а вопрос здоровья и дальнейшего
                        восстановления. Иногда звонок в скорую может стать самым мудрым решением за долгое время.
                    </Typography>

                </Box>
            </Box>

            <Box
                component="article"
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

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                    Допустим, у вас возникла ситуация — <Box component="span"
                                                             sx={{ color: 'var(--red)', fontWeight: 400 }}>нужна
                    госпитализация</Box>. Вы связываетесь с нами, можно просто
                    позвонить или оставить заявку на сайте (честно говоря, кому как удобнее — тут бюрократии нет).
                    Дальше подключается наш врач: кому-то комфортнее видеть доктора вживую, а кто-то предпочтет
                    видеозвонок — мы подстраиваемся.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    Когда становится ясно, какого рода помощь требуется, <Box component="span" sx={{
                    color: 'var(--red)',
                    fontWeight: 400
                }}>быстро организуем транспортировку</Box>. Иногда
                    достаточно обычной санитарной машины, а если случай экстренный или тяжелый — выезжает полноценная
                    реанимационная бригада. Сборы затягивать не будем: время здесь часто играет ключевую роль.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Следующий шаг — выбор
                        больницы</Box>. Мы не просто бронируем свободную койку где попало. Подбираем ее по
                    вашему случаю и возможностям семьи: есть пациенты, которым лучше в профильное учреждение, а кому-то
                    важно соблюдать бюджет. Это вполне решаемые задачи, и тут наш опыт действительно экономит нервы.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Ну и дальше начинается
                        собственно лечение</Box>. Мы не исчезаем после оформления — остаемся на связи с
                    врачами и родственниками, регулярно уточняем детали. Если вдруг будет необходимость перевести
                    пациента в другой центр или привлечь дополнительных специалистов — мы это организуем без проволочек.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    Всё это звучит как длинная процедура, но на деле чаще всего работает просто и быстро — чем быстрее
                    разрулишь все эти организационные вопросы, тем скорее человек получит нужную помощь.
                </Typography>

            </Box>
        </Box>
    );
});
