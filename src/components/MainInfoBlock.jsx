import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const MainInfoBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: '32px',
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}
        >

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>
                Сердце и опыт рядом: поддержка и уход для тяжелобольных пациентов
            </Typography>

            <Typography component="p" sx={{fontSize: 20, marginBottom: '20px'}}>
                Мы рады приветствовать вас в <Box component="span" sx={{fontWeight: 600}}>МСК-Групп</Box>, где ваше
                здоровье и комфорт находятся в центре
                внимания. Наша компания предоставляет высококачественное медицинское обслуживание не только жителям
                столицы, но и пациентам из регионов России и СНГ. Мы делаем все возможное, чтобы ваша госпитализация
                прошла максимально удобно и безопасно.
            </Typography>

            <Typography component="p" sx={{fontSize: 20, marginBottom: '20px'}}>
                <Box component="span" sx={{fontWeight: 600}}>МСК-Групп</Box> организует госпитализацию и транспортировку
                из регионов и стран СНГ в клинику необходимого профиля.
                Организация встречи и помощь иногородним пациентам бригадой Скорой Помощи на вокзале или в аэропорту.
            </Typography>

            <Typography component="p" sx={{fontSize: 20, marginBottom: '20px'}}>
                Мы понимаем, как важно окружить заботой тех, кто нуждается в особом внимании. Наши специалисты с
                теплотой и профессионализмом обеспечивают лечение и уход за тяжелобольными пациентами. Индивидуальный
                подход, круглосуточная поддержка и комфортные условия помогают улучшить качество жизни даже в самых
                сложных ситуациях. Доверьте здоровье своих близких команде, для которой их благополучие — главная цель.
                <br/>
                <br/>
                <Box component="span" sx={{fontWeight: 600}}>Круглосуточно. Оперативно. Доступно</Box>
            </Typography>

            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Высококвалифицированные
                        специалисты</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Наш медицинский персонал – это опытные врачи, медсестры и другие профессионалы, которые регулярно
                    проходят обучение и повышение квалификации. Мы обеспечиваем вам доступ к лучшим медицинским кадрам
                    страны.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Современное оборудование</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Мы используем новейшие медицинские технологии и оборудование, соответствующее мировым стандартам.
                    Это позволяет нам проводить точные диагностику и лечение, обеспечивая наилучшие результаты для наших
                    пациентов.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Индивидуальный подход</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Каждый пациент уникален, и мы разрабатываем персонализированные планы лечения, ориентированные на
                    ваши конкретные потребности и состояние здоровья. Ваше здоровье – наш главный приоритет.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Комфортные условия
                        пребывания</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Мы предлагаем уютные и удобные палаты, оборудованные всем необходимым для вашего комфорта. Мы
                    создаем условия, способствующие быстрому восстановлению и вашему благополучию.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Комплексный уход</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    От момента госпитализации до выписки мы обеспечиваем полный цикл медицинской помощи, включая
                    реабилитацию и последующее наблюдение. Вы всегда можете рассчитывать на нашу поддержку.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Поддержка в организации
                        госпитализации</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Мы помогаем вам организовать госпитализацию из любого региона России и СНГ, включая консультации,
                    транспортировку и сопровождение. Наша цель – сделать ваш путь к здоровью как можно более гладким и
                    беспрепятственным.
                </Typography>
            </Box>
            <Box component="article" sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <CheckIcon sx={{color: 'var(--main-color)'}}/>
                    <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Финансовая прозрачность</Typography>
                </Box>
                <Typography component="p" sx={{fontSize: 20}}>
                    Мы предлагаем прозрачную систему оплаты и возможность получения консультаций по финансовым вопросам,
                    чтобы вы могли планировать свои расходы на лечение.
                </Typography>
            </Box>

            <Typography component="p" sx={{fontSize: 20}}>
                Выберите <Box component="span" sx={{fontWeight: 600}}>МСК-Групп</Box> для вашего здоровья и долголетия.
                Доверьте ваше здоровье профессионалам,
                которые готовы заботиться о вас круглосуточно. Мы – ваш надежный партнер в борьбе за здоровье и качество
                жизни, независимо от того, где вы находитесь.
            </Typography>
        </Box>
    )
}
