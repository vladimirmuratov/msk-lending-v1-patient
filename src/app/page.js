import { Banner } from '@/components/Banner';
import { CardsBlock } from '@/components/CardsBlock';
import { AboutBlock } from '@/components/AboutBlock';
import { WhyWeBlock } from '@/components/WhyWeBlock';
import { WeRespondBlock } from '@/components/WeRespondBlock';
// import {WhatWeOfferBlock} from '@/components/WhatWeOfferBlock'
import { DirectionsOfHospitalizationBlock } from '@/components/DirectionsOfHospitalizationBlock';
import { BaseAccordion } from '@/components/base/Accordion/BaseAccordion';
import { PartnersBlock } from '@/components/PartnersBlock';
import { faq, services, text1 } from '@/config';
import { TextBlock } from '@/components/TextBlock';
import { ContactsBlock } from '@/components/ContactsBlock';
import { FormAction } from '@/components/FormAction';
import { MainInfoBlock } from '@/components/MainInfoBlock';
import { CoordinatorBlock } from '@/components/CoordinatorBlock';
import PhoneBlock from '@/components/PhoneBlock';
import { Suspense } from 'react';
import { Metrika } from '@/components/Metrika';

export const metadata = {
    title: 'Лечение тяжелых пациентов. Госпитализация +7 (499) 719-81-00, 24/7',
    description: 'Качественное лечение тяжелых пациентов. Госпитализация 24/7. Позвоните по номеру +7 (499) 719-81-00 для консультации и помощи.',
    keywords: ['тяжелый случай пациент', 'пациент находится в тяжелом состоянии', 'уход за тяжелым пациентом', 'скорая помощь тяжелый пациент'],
    other: {
        ['yandex-verification']: '8a67daf7ca228bdf',
    },
    alternates: {
        canonical: 'https://msk-group-hospital.ru/'
    }
};

export default function Home() {
    return (
        <>
            <main style={{ position: 'relative' }}>
                <Banner />
                <CardsBlock />
                <PhoneBlock />
                <MainInfoBlock />
                <PhoneBlock />
                <AboutBlock />
                <WhyWeBlock />
                <PhoneBlock />
                <WeRespondBlock />
                {/*<WhatWeOfferBlock/>*/}
                <DirectionsOfHospitalizationBlock />
                <PhoneBlock />
                <BaseAccordion id="faq" title="Частые вопросы" items={faq} />
                <CoordinatorBlock />
                <PartnersBlock />
                <PhoneBlock />
                <BaseAccordion id="service" title="Услуги" items={services} />
                <TextBlock text={text1} />
                <ContactsBlock />
                <FormAction />
            </main>
            <Suspense>
                <Metrika />
            </Suspense>
        </>
    );
}
