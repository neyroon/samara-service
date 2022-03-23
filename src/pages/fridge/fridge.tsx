import { Breadcrumbs } from '../../breadcrumbs';
import { MainContainer, EquipmentTitle } from '../../common.styles';
import { Footer } from '../../footer';
import { Menu } from '../../menu';
import { StyledHeader, Hero } from './fridge.styles';

export const Fridge = () => {
    return (
        <>
            <StyledHeader backgroundColor='#fceccc'>
                <Menu textColor='#000' />
                <Hero>
                    <Breadcrumbs text='Стиральная машина' isMain />
                    <EquipmentTitle>
                        Ответьте на 3 вопроса и получите скидку 20% на ремонт
                    </EquipmentTitle>
                </Hero>
            </StyledHeader>
            <MainContainer></MainContainer>
            <Footer />
        </>
    );
};

export default Fridge;
