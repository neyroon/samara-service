import styled from 'styled-components';
import { Header } from '../../header';
import HeroWarranty from '../../assets/hero-warranty.png';
import HeroWarrantyM from '../../assets/hero-warranty-m.png';
import CheckMark from '../../assets/check-mark.png';
import { breakpoints } from '../../constants';

export const StyledHeader = styled(Header)`
    padding: 0 0 350px;
    background-image: url(${HeroWarrantyM});
    background-position: center bottom;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        padding: 0 0 110px;
        background-position: right 15px bottom;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        background-position: 70% bottom;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        padding: 0 0 130px;
        background-image: url(${HeroWarranty});
    }
`;

export const Hero = styled.div`
    color: #fff;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        max-width: calc(100% - 300px);
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        max-width: 570px;
    }
`;

export const Section = styled.section`
    margin: 40px 0 20px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        margin: 90px 0;
    }
`;

export const Title = styled.h2`
    font-size: 28px;
    margin: 0 0 50px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 32px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        font-size: 36px;
    }
`;

export const Text = styled.p`
    padding: 15px 20px;
    background: #ececec;
    border-radius: 37px;
    font-size: 15px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        text-align: center;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 18px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        font-size: 20px;
    }
`;

export const WarrantyList = styled.ul`
    padding: 0;
    margin: 0 0 20px;
    list-style: none;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        display: flex;

        & li:first-child {
            width: 25%;
        }

        & li:nth-child(2) {
            width: 35%;
        }

        & li:last-child {
            width: 40%;
            margin: 0;
        }
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        margin: 0 0 30px;
    }
`;

export const WarrantyContainer = styled.li`
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 10px 0;
    background: #fff;
    border-radius: 16px;
    font-size: 18px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        justify-content: center;
        margin: 0 15px 0 0;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 22px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        font-size: 26px;
    }

    :before {
        content: '';
        display: block;
        width: 26px;
        min-width: 26px;
        height: 26px;
        margin-right: 15px;
        background: #1b5b87 url(${CheckMark}) center center no-repeat;
        border-radius: 50%;
    }
`;

export const WarrantyText = styled.span``;
