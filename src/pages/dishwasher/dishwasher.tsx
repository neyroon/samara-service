import { Breadcrumbs } from '../../breadcrumbs';
import { MainContainer, EquipmentTitle } from '../../common.styles';
import { Footer } from '../../footer';
import { Menu } from '../../menu';
import { StyledHeader, Hero } from './dishwasher.styles';

export const Dishwasher = () => {
    return (
        <>
            <StyledHeader backgroundColor='#fceccc'>
                <Menu textColor='#000' />
                <Hero>
                    <Breadcrumbs text='Посудомоечная машина' isMain />
                    <EquipmentTitle>
                        Ответьте на 3 вопроса и получите скидку 5% на ремонт
                    </EquipmentTitle>
                </Hero>
            </StyledHeader>
            <MainContainer></MainContainer>
            <Footer />
        </>
    );
};

export default Dishwasher;
