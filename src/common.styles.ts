import { PhoneLink as Phone } from './phone-link';
import styled from 'styled-components';
import { breakpoints } from './constants';

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
