import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header } from '../../header';
import HeroMain from '../../assets/hero-main.png';
import HeroMainM from '../../assets/hero-main-m.png';
import { breakpoints } from '../../constants';

export const StyledHeader = styled(Header)`
    background-repeat: no-repeat;
    padding: 0 0 25px;

    @media only screen and (min-width: ${breakpoints.MOBILE_M}px) {
        padding: 0;
        background-image: url(${HeroMainM});
        background-position: 105% bottom;
    }

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        background-position: 450px bottom;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        background-position: 105% bottom;
        background-image: url(${HeroMain});
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        background-position: 70% bottom;
    }
`;

export const Hero = styled.div`
    @media only screen and (min-width: ${breakpoints.MOBILE_M}px) {
        max-width: 335px;
        padding-bottom: 20px;
    }

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        max-width: 420px;
        padding-bottom: 40px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        max-width: 650px;
        padding-bottom: 60px;
    }
`;

export const StyledTitle = styled.h1`
    margin: 15px 0 40px;
    font-size: 30px;
    line-height: 1.25;
    animation: fadeInText 0.6s ease-out;

    @media only screen and (min-width: ${breakpoints.MOBILE_M}px) {
        font-size: 35px;
    }

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        font-size: 46px;
        margin: 0 0 40px;
    }
`;

export const Advantages = styled.div`
    & :nth-child(2) {
        animation-delay: 1.2s;
    }

    & :last-child {
        animation-delay: 1.8s;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Title = styled.h1`
    margin: 25px 0 15px;
    font-size: 22px;
    line-height: 1.2;
    text-align: center;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        margin: 30px 0 15px;
        font-size: 28px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        margin: 30px 0 20px 20px;
        font-size: 36px;
        text-align: left;
    }
`;

export const EquipmentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0 40px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        flex-wrap: wrap;
        flex-direction: row;
    }
`;

export const EquipmentTitle = styled.h3`
    margin: 20px 0;
    font-size: 20px;
    line-height: 1.6;
    color: #1a1a1a;
    transition: color 0.3s ease-out;

    &:hover,
    &:focus {
        color: #1a1a1a;
    }
`;

export const Equipment = styled(Link)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 15px 0;
    margin: 10px 0;
    background-color: #fff;
    border-radius: 32px;
    text-decoration: none;
    transition: background-color 0.3s ease-out;

    &:hover,
    &:focus {
        background: #1a1a1a;
    }

    &:hover ${EquipmentTitle}, &:focus ${EquipmentTitle} {
        color: #fff;
    }

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        width: 360px;
        margin: 15px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        width: calc(33% - 30px);
        margin: 0 15px;
    }
`;
