import styled from 'styled-components';
import { Header } from '../../header';
import HeroAbout from '../../assets/hero-about.png';
import HeroAboutM from '../../assets/hero-about-m.png';
import { breakpoints } from '../../constants';

export const StyledHeader = styled(Header)`
    padding: 0 0 345px;
    background-image: url(${HeroAboutM});
    background-position: center bottom;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        padding: 0 0 110px;
        background-position: right -15px bottom;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        background-image: url(${HeroAbout});
        background-position: right 25px bottom;
    }
`;

export const Title = styled.h2`
    margin: 30px 0;
    font-size: 28px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        margin: 40px 0;
        font-size: 36px;
    }
`;

export const Grid = styled.div`
    margin: 0 0 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 20px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 30px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        margin: 0 0 90px;
    }

    & :first-child img {
        max-width: 235px;
        margin: 0 auto;

        @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
            border-bottom-right-radius: 32px;
        }

        @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
            border-bottom-right-radius: 0;
        }
    }

    & :nth-child(2) img {
        @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
            width: 50%;
            order: 0;
        }

        @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
            width: 100%;
            order: 1;
        }
    }

    & :nth-child(2) p {
        @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
            order: 1;
        }

        @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
            order: 0;
        }
    }

    & :nth-child(3) img {
        max-width: 240px;
        margin: 0 auto;

        @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
            border-bottom-right-radius: 32px;
        }

        @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
            max-width: none;
            width: auto;
            border-bottom-right-radius: 0;
        }
    }
`;

export const AboutElement = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 32px;

    & img {
        width: 100%;
    }

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        flex-direction: row;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const Text = styled.p`
    padding: 40px 30px 0;
    font-size: 18px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        padding: 50px 60px 0;
        font-size: 24px;
    }
`;

export const AboutElementImagesGrid = styled.div`
    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        background: transparent;
        border-radius: 0;
        overflow: hidden;

        & div:nth-child(1) {
            margin: 0 15px 30px 0;
        }
        & div:nth-child(2) {
            margin: -78px 0 30px 15px;
        }
        & div:nth-child(3) {
            margin: 0 15px 0 0;
        }
        & div:nth-child(4) {
            margin: -78px 0 0 15px;
        }
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        & div:nth-child(2) {
            margin: -91px 0 30px 15px;
        }

        & div:nth-child(4) {
            margin: -91px 0 0 15px;
        }
    }
`;

export const Image = styled.img`
    object-fit: contain;
    width: 100%;
    &&& {
        max-width: 100%;
        margin: 0;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    width: calc(50% - 15px);
    margin: 15px;
`;

export const Hero = styled.div`
    color: #fff;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        max-width: calc(100% - 524px);
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        max-width: 540px;
    }
`;
