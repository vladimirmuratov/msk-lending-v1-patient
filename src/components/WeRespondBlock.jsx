import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const WeRespondBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: '12px',
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2" sx={{marginBottom: '20px', fontSize: {xs: '22px', sm: '34px'}, fontWeight: 500}}>Мы
                отвечаем
                за:</Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Выбор оптимума среди медицинских учреждений</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Детальная проверка качества и ценовой политики</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Врачебный надзор на протяжении всего лечения</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Комплексное индивидуально ориентированное обслуживание</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>Полномасштабную юридическую защиту</Typography>
            </Box>
        </Box>
    )
}
