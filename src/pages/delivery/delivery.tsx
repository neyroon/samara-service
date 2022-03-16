import { Breadcrumbs } from '../../breadcrumbs';
import { CallbackForm } from '../../callback';
import { MainContainer, PageParagraph, PageTitle, UnderlineText } from '../../common.styles';
import { Footer } from '../../footer';
import { Menu } from '../../menu';
import {
    DeliveryElementsContainer,
    StyledHeader,
    DeliveryText,
    DeliveryTitle,
    DeliveryElementMap,
    DeliveryElementTime,
    DeliveryElementPig,
    Hero,
} from './delivery.styles';

export const Delivery = () => {
    return (
        <>
            <StyledHeader>
                <Menu textColor='#fff' burgerColor='#fff' />
                <Breadcrumbs text='Выезд' />
                <Hero>
                    <PageTitle>Выезд</PageTitle>
                    <PageParagraph>
                        Мы понимаем, что везти крупную технику в лучшем случае неудобно, а чаще этой
                        возможности нет вовсе. Поэтому наши мастера сами{' '}
                        <UnderlineText>приедут к вам на дом</UnderlineText> и отремонтируют
                        оборудование.
                    </PageParagraph>
                </Hero>
            </StyledHeader>
            <MainContainer>
                <DeliveryElementsContainer>
                    <DeliveryElementMap>
                        <DeliveryTitle>Как далеко:</DeliveryTitle>
                        <DeliveryText>Мы работаем по всему городу Самара.</DeliveryText>
                    </DeliveryElementMap>
                    <DeliveryElementTime>
                        <DeliveryTitle>Как быстро:</DeliveryTitle>
                        <DeliveryText>
                            Специалист будет у вас в день обращения или в другое удобное вам время,
                            в том числе в выходные и праздники.
                        </DeliveryText>
                    </DeliveryElementTime>
                    <DeliveryElementPig>
                        <DeliveryTitle>Сколько стоит:</DeliveryTitle>
                        <DeliveryText>Выезд бесплатен</DeliveryText>
                    </DeliveryElementPig>
                </DeliveryElementsContainer>
                <CallbackForm />
            </MainContainer>
            <Footer />
        </>
    );
};

export default Delivery;
