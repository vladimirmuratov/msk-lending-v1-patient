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
                        sx={{ marginBottom: '20px', fontSize: { xs: '22px', sm: '34px' }, fontWeight: 500 }}>
                Сердце и опыт рядом: поддержка и уход для тяжелобольных пациентов
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                В <Box component="span" sx={{ fontWeight: 600 }}>МСК-Групп</Box> с радушием приветствуем вас – здесь
                ваше здоровье и благополучие становятся нашими основными
                заботами. Наша организация обеспечивает элитное медицинское обслуживание не только для москвичей, но и
                охватывает территорию всей России, включая страны СНГ. Мы стремимся к тому, чтобы ваш пребывания в
                клинике было максимально комфортабельным и безопасным.

                МСК-Групп берет на себя организацию транспортировки из регионов и зарубежья (в том числе стран СНГ)
                прямо до дверей специализированных медицинских учреждений. Наши сотрудники встречают вас в аэропорту или
                на вокзале, обеспечивая поддержку уровня скорой помощи.

                Осознавая особую важность внимания к тяжелобольным пациентам, мы создаем атмосферу заботы и
                профессионализма. Специалисты <Box component="span" sx={{ fontWeight: 600 }}>МСК-Групп</Box> подходят
                индивидуально к каждому случаю: круглосуточный уход,
                комфортные условия пребывания способствуют значительному улучшению качества жизни даже в сложнейших
                ситуациях. Доверьте заботу о здоровье ваших близких команде <Box component="span"
                                                                                 sx={{ fontWeight: 600 }}>МСК-Групп</Box> –
                для нас их благополучие стоит на
                первом месте.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ fontWeight: 600 }}>МСК-Групп</Box> осуществляет координированную
                госпитализацию из регионов стран Содружества Независимых
                Государств (СНГ) непосредственно в специализированные медицинские учреждения. Услуги включают встречу и
                сопровождение иностранных пациентов на станциях транспорта, а также оперативное предоставление скорой
                помощи на вокзалах или аэропортах.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Осознавая особую ценность заботы о тех, кто испытывает трудности со здоровьем, наши профессионалы
                проявляют сердечную приверженность и мастерство в лечении тяжелобольных пациентов. Создание
                персонализированной стратегии поддержки, непрерывная помощь и комфортные условия пребывания способствуют
                значительному повышению качества жизни даже перед лицом самых тяжких недугов. Передавая здоровье своих
                близких в руки нашей команды, вы делаете выбор в пользу тех, для кого забота о благополучии пациентов —
                это безусловный приоритет и призвание.
                <br />
                <br />
                <Box component="span" sx={{ fontWeight: 600 }}>Непрерывно доступны. Быстро реагируем.</Box>
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Профессиональная медицинская
                        команда</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Наш коллектив – это высококвалифицированные доктора, сестринский персонал и профильные специалисты,
                    регулярно совершенствующие свои знания через курсы повышения квалификации и обучения. Мы
                    предоставляем доступ к элите в области медицины страны.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Инновационное
                        оснащение</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Применяем самые передовые медицинские технологии по мировым стандартам для проведения точных
                    диагностик и лечения, заботясь о наилучших результатах здоровья наших пациентов.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Персонализированный подход к
                        каждому</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Учитывая индивидуальность каждого клиента, разрабатываем уникальные стратегии лечения с ориентиром
                    на ваши личные потребности в оздоровлении. Ваше благополучие – наш приоритет номер один.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Палаты для комфорта и
                        восстановления</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Создаем максимально комфортные условия пребывания: уютные, оборудованные палаты с всем необходимым
                    для вашего скорейшего выздоровления. Мы заботимся о каждой детали, способствующей вашему
                    благополучию.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Полный спектр медицинской
                        помощи</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    От момента поступления до выписки обеспечиваем полноценную поддержку: от диагностики и лечения до
                    реабилитации и последующего наблюдения. Наша забота – это гарантия надежного сопровождения на каждом
                    этапе.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Помощь в
                        госпитализации</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Организуем прием из всех уголков России и стран СНГ, включая консультации, транспортировку и
                    персональное сопровождение. Наша задача – сделать процесс лечения максимально удобным для вас.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Открытость финансовых
                        условий</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Предлагаем ясную систему оплаты с возможностью подробных консультаций по финансовой стороне, чтобы
                    вы могли заранее спланировать бюджет на медицинские услуги.
                </Typography>
            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Присоединяйтесь к <Box component="span" sx={{ fontWeight: 600 }}>МСК-Групп</Box>!
                Забота о своем благополучии начинается здесь
                Доверьте свою жизнь профессионалам без устали! <Box component="span" sx={{ fontWeight: 600 }}>МСК-Групп</Box> – ваш надежный союзник в стремлении к здоровому и активному долголетию, где бы вы ни были.
            </Typography>
        </Box>
    );
};
