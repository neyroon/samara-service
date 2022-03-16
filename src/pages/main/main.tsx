import { Advantage } from '../../advantage';
import { MainContainer } from '../../common.styles';
import { Footer } from '../../footer';
import { Menu } from '../../menu';
import {
    StyledHeader,
    Hero,
    StyledTitle,
    Advantages,
    Title,
    EquipmentContainer,
    Equipment,
    EquipmentTitle,
} from './main.styles';
import Washer from '../../assets/washer.png';
import DishWasher from '../../assets/dishwasher.png';
import Fridge from '../../assets/fridge.png';

const advantages = [
    {
        title: 'Ремонт с выездом на дом',
    },
    {
        title: 'Выезд мастера - 1 час',
    },
    {
        title: 'Гарантия до 1 года',
    },
];

export const Main = () => {
    return (
        <>
            <StyledHeader backgroundColor="#fceccc">
                <Menu textColor="#000" />
                <Hero>
                    <StyledTitle>Ремонт бытовой техники в Самаре</StyledTitle>
                    <Advantages>
                        {advantages.map((advantage) => (
                            <Advantage title={advantage.title} />
                        ))}
                    </Advantages>
                </Hero>
            </StyledHeader>
            <MainContainer>
                <Title>Какое у вас оборудование?</Title>
                <EquipmentContainer>
                    <Equipment to="/">
                        <EquipmentTitle>Cтиральная машина</EquipmentTitle>
                        <img
                            src={Washer}
                            alt="Cтиральная машина"
                            loading="lazy"
                        />
                    </Equipment>
                    <Equipment to="/">
                        <EquipmentTitle>Посудомоечная машина</EquipmentTitle>
                        <img
                            src={DishWasher}
                            alt="Посудомоечная машина"
                            loading="lazy"
                        />
                    </Equipment>
                    <Equipment to="/">
                        <EquipmentTitle>Холодильник</EquipmentTitle>
                        <img src={Fridge} alt="Холодильник" loading="lazy" />
                    </Equipment>
                </EquipmentContainer>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Main;
