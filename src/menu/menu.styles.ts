import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle, css } from 'styled-components';
import { breakpoints } from '../constants';

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0 25px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        padding: 30px 0 40px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        padding: 30px 0 60px;
    }
`;

export const NavigationContainer = styled.ul`
    padding: 0 20px 0 0;
    margin: 120px 0 0;
    font-size: 24px;
    text-align: right;
    list-style: none;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        display: flex;
        align-items: center;
        font-size: 16px;
        text-align: center;
        padding: 0;
        margin: 0;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        justify-content: space-between;
        min-width: 500px;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Li = styled.li`
    list-style-type: none;
    margin: 0 0 20px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        margin: 0 10px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        margin: 0;
    }
`;

export const LiPhone = styled(Li)`
    margin: 150px 0 0;
    & > * {
        font-size: 28px !important;
    }
`;

export const NavigationLink = styled(NavLink)<{
    color: string;
}>`
    text-decoration: none;
    transition: color 0.3s;
    ${({ color }) => css`
        color: ${color};
    `}

    &:hover {
        color: #ed6662;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 18px;
    }
`;

export const LogoNavigationLink = styled(NavigationLink)`
    display: flex;
    align-items: center;
`;

export const StyledSpan = styled.span<{ color: string }>`
    ${({ color }) => `
        color: ${color};
        font-size: 15px;
        text-align: right;
    `}
`;

export const LogoTextContainer = styled.div`
    font-size: 20px;
    line-height: 1.4;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        font-size: 18px;
        line-height: 1;
    }
`;

export const LogoTextSmall = styled.span`
    display: block;
    font-size: 11px;
    line-height: 1;
    color: #9e9e9e;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        font-size: 12px;
        line-height: 1.4;
    }
`;

export const StyledImage = styled.img`
    width: 37px;
    height: 37px;
    margin: 0 10px 0 0;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        width: 50px;
        height: 50px;
        margin: 0 15px 0 0;
    }
`;

export const BurgerElement = styled.div<{ color: string }>`
    position: absolute;
    width: 28px;
    height: 3px;
    ${({ color }) =>
        css`
            background-color: ${color};
        `}
    border-radius: 12px;
    transition: transform 0.6s ease, opacity 0.3s linear,
        background-color 0.1s ease 0.5s;
`;

export const BurgerElementTop = styled(BurgerElement)`
    top: 0;
    left: 0;
`;

export const BurgerElementMiddle = styled(BurgerElement)`
    top: 7px;
    left: 0;
`;

export const BurgerElementBottom = styled(BurgerElement)`
    bottom: 0;
    left: 0;
`;

export const BodyWithBurger = createGlobalStyle`
    body {
        position: relative;
        overflow: hidden;
    }
`;

export const BurgerContainer = styled.div<{ active: boolean }>`
    position: relative;
    z-index: 2;
    width: 28px;
    height: 17px;
    ${({ active }) =>
        active &&
        css`
            & ${BurgerElementTop} {
                transform: translate(0, 7px) rotate(225deg);
                background-color: #000;
            }

            & ${BurgerElementMiddle} {
                transform: translateX(15px);
                opacity: 0;
                background-color: #000;
            }

            & ${BurgerElementBottom} {
                transform: translate(0, -7px) rotate(315deg);
                background-color: #000;
            }
        `}
`;

export const NavigationMobile = styled.div<{ show: boolean }>`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 100%;
    overflow: scroll;
    width: 100vw;
    height: 100vh;
    background: #fff;
    transition: right ease-out 0.6s;

    ${({ show }) =>
        show &&
        css`
            right: 0;
        `}
`;
