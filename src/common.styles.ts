import styled from 'styled-components';
import { PhoneLink as Phone } from './phone-link';
import { breakpoints } from './constants';
import { Header } from './header';

export const MainContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 0 20px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        max-width: 1000px;
        padding: 0;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        max-width: 1140px;
    }
`;

export const PhoneLink = styled(Phone)<{ color: string }>`
    ${({ color }) => `
        color: ${color};
    `}
`;

export const PageTitle = styled.h1`
    margin: 10px 0 40px;
    font-size: 40px;
    animation: fadeInText 0.6s ease-out;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        font-size: 48px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        margin: 0 0 40px;
        font-size: 71px;
    }
`;

export const PageParagraph = styled.p`
    margin: 0;
    animation: fadeInText 0.6s ease-out 0.6s;
    opacity: 0;
    animation-fill-mode: forwards;

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        font-size: 28px;
    }
`;

export const PageHero = styled.div`
    max-width: 700px;
    padding-bottom: 30px;
    color: #fff;
`;

export const UnderlineText = styled.span`
    text-decoration: underline;
`;

export const EquipmentTitle = styled.h1`
    max-width: 177px;
    margin: 0;
    animation: fadeInText 0.6s ease-out;

    @media only screen and (min-width: ${breakpoints.MOBILE_SM}px) {
        max-width: calc(100% - 165px);
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 48px;
        max-width: 590px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        max-width: 690px;
    }
`;

export const HeaderEquipment = styled(Header)`
    padding: 0 0 140px;
    border-radius: 0;
    background-position: bottom right -30px;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${breakpoints.MOBILE_SM}px) {
        background-position: bottom right;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        padding: 0 0 110px;
        border-radius: 0 0 40px 40px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        background-position: bottom left 76%;
    }
`;
