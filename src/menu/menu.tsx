import { FC, useState } from 'react';
import { PhoneLink } from '../common.styles';
import {
    FlexContainer,
    MainContainer,
    NavigationContainer,
    Li,
    StyledSpan,
    LogoTextContainer,
    LogoTextSmall,
    LogoNavigationLink,
    StyledImage,
    BurgerContainer,
    BurgerElementTop,
    BurgerElementBottom,
    BurgerElementMiddle,
    NavigationMobile,
    NavigationLink,
    BodyWithBurger,
    LiPhone,
} from './menu.styles';
import { MenuProps } from './types';
import Logo from '../assets/logo.png';
import { useIsMobile } from '../hooks';

const navigation = [
    {
        title: 'Выезд',
        link: '/delivery',
    },
    {
        title: 'Гарантия',
        link: '/warranty',
    },
    {
        title: 'О компании',
        link: '/about',
    },
    {
        title: 'Контакты',
        link: '/contacts',
    },
];

export const Menu: FC<MenuProps> = ({ textColor = '#fff', burgerColor = '#1a1a1a' }) => {
    const isMobile = useIsMobile();
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    const onBurgerClick = () => {
        setIsBurgerActive(!isBurgerActive);
    };

    return (
        <MainContainer>
            {isBurgerActive && <BodyWithBurger />}
            {isMobile && (
                <NavigationMobile show={isBurgerActive}>
                    <NavigationContainer>
                        {navigation.map((nav) => (
                            <Li key={nav.link}>
                                <NavigationLink color='#000' key={nav.title} to={nav.link}>
                                    {nav.title}
                                </NavigationLink>
                            </Li>
                        ))}
                        <LiPhone>
                            <PhoneLink color='#ed6662' />
                        </LiPhone>
                    </NavigationContainer>
                </NavigationMobile>
            )}
            <div>
                <LogoNavigationLink color={textColor} to='/'>
                    <StyledImage src={Logo} alt='Логотип' loading='lazy' />
                    <LogoTextContainer>
                        Работает
                        <LogoTextSmall>Ремонт техники</LogoTextSmall>
                    </LogoTextContainer>
                </LogoNavigationLink>
            </div>
            {!isMobile && (
                <NavigationContainer>
                    {navigation.map((nav) => (
                        <Li key={nav.link}>
                            <NavigationLink color={textColor} key={nav.title} to={nav.link}>
                                {nav.title}
                            </NavigationLink>
                        </Li>
                    ))}
                </NavigationContainer>
            )}
            {isMobile ? (
                <>
                    <PhoneLink color={textColor} />
                    <BurgerContainer onClick={onBurgerClick} active={isBurgerActive}>
                        <BurgerElementTop color={burgerColor} />
                        <BurgerElementMiddle color={burgerColor} />
                        <BurgerElementBottom color={burgerColor} />
                    </BurgerContainer>
                </>
            ) : (
                <FlexContainer>
                    <PhoneLink color={textColor} />
                    <StyledSpan color={textColor}>Пн-Вс: 7:00-24:00</StyledSpan>
                </FlexContainer>
            )}
        </MainContainer>
    );
};

export default Menu;
