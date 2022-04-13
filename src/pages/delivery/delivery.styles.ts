import styled from 'styled-components';
import { Header } from '../../header';
import HeroDelivery from '../../assets/hero-delivery.png';
import HeroDeliveryM from '../../assets/hero-delivery-m.png';
import TimeHand from '../../assets/time-hand.png';
import TimeHandM from '../../assets/time-hand-m.png';
import Pig from '../../assets/rich-pig.png';
import PigM from '../../assets/rich-pig-m.png';
import { breakpoints } from '../../constants';

export const StyledHeader = styled(Header)`
    background-image: url(${HeroDeliveryM});
    background-position: right bottom;
    background-repeat: no-repeat;
    padding: 0 0 360px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        padding: 0 0 110px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        padding: 0 0 30px;
        background-image: url(${HeroDelivery});
    }
`;

export const DeliveryElementsContainer = styled.div`
    margin: 40px 0;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        display: flex;
        flex-wrap: wrap;
        margin: 60px 0;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        margin: 90px 0;
    }
`;

export const DeliveryElement = styled.div`
    padding: 50px 40px 0;
    margin: 20px 0;
    border-radius: 32px;
    background-color: #fff;
`;

export const DeliveryElementMap = styled(DeliveryElement)`
    padding: 50px 40px 330px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        width: calc(40% - 15px);
        padding: 55px 25px 440px;
        margin: 0 15px 0 0;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        padding: 65px 55px 440px;
    }
`;

export const DeliveryElementTime = styled(DeliveryElement)`
    padding: 50px 40px 290px;
    background: #fff url(${TimeHandM}) center bottom no-repeat;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        width: calc(60% - 15px);
        padding: 65px 40px 440px;
        margin: 0 0 0 15px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        padding: 65px 80px 440px;
        background: #fff url(${TimeHand}) right 65px bottom no-repeat;
    }
`;

export const DeliveryElementPig = styled(DeliveryElement)`
    padding: 50px 40px 210px;
    background: #fff url(${PigM}) right bottom no-repeat;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        width: 100%;
        padding: 50px 40px;
        margin: 30px 0 0;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        padding: 110px 60px;
        background: #fff url(${Pig}) right -60px bottom no-repeat;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        background: #fff url(${Pig}) right bottom no-repeat;
    }
`;

export const DeliveryTitle = styled.h3`
    font-size: 24px;
    margin: 0 0 20px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        font-size: 26px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 28px;
    }
`;

export const DeliveryText = styled.span`
    font-size: 18px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        font-size: 20px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 24px;
    }
`;

export const DownText = styled(DeliveryText)`
    max-width: 170px;
    font-style: italic;
    border-bottom: 1px solid #000;
`;

export const HiddenText = styled.div`
    margin-top: 10px;
    max-width: 170px;
`;

export const Hero = styled.div`
    color: #fff;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        max-width: calc(100% - 375px);
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        max-width: 610px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        max-width: 700px;
    }
`;
