import styled from 'styled-components';
import CallbackMan from '../assets/callback-man.png';
import CallbackManM from '../assets/callback-man-m.png';
import { breakpoints } from '../constants';

export const Section = styled.section`
    position: relative;
`;

export const Container = styled.div`
    padding: 45px 40px 300px;
    margin: 30px 0;
    background: #fceccc url(${CallbackManM}) right bottom no-repeat;
    border-radius: 32px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        padding: 45px 40px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        padding: 80px 0 80px 70px;
        margin: 60px 0;
        background: #fceccc;

        &:after {
            content: url(${CallbackMan});
            position: absolute;
            top: -46px;
            right: -46px;
        }
    }
`;

export const WidthContainer = styled.div`
    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        max-width: calc(100% - 350px);
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        max-width: 615px;
    }
`;

export const Title = styled.h2`
    margin: 0 0 30px;
    font-size: 20px;

    @media only screen and (min-width: ${breakpoints.MOBILE_M}px) {
        margin: 0 0 50px;
        font-size: 24px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 38px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        margin: 0 0 65px;
        font-size: 45px;
        line-height: 1;
    }
`;

export const PhoneInput = styled.input`
    height: 49px;
    padding: 0;
    border: 0;
    outline: 0;
    border-radius: 10px;
    margin: 0 0 15px;
    background: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    text-indent: 25px;
    color: #1a1a1a;
    transition: box-shadow 0.3s ease-out;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        width: calc(50% - 10px);
        height: 63px;
        border-radius: 12px;
        margin: 0 20px 0 0;
        font-size: 22px;
    }

    ::placeholder {
        color: #1a1a1a;
    }

    &:hover,
    &:focus {
        box-shadow: inset 0 0 12px 0 rgb(27 91 135 / 40%);
    }
`;

export const Button = styled.button`
    height: 49px;
    padding: 0;
    outline: 0;
    border-radius: 10px;
    cursor: pointer;
    background: #ed6662;
    border: 2px solid transparent;
    color: #fff;
    font-size: 18px;
    transition: background-color 0.3s ease-out, border-color 0.3s ease-out,
        color 0.3s ease-out;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        width: calc(50% - 10px);
        height: 63px;
        border-radius: 12px;
        font-size: 22px;
    }

    &:hover,
    &:focus {
        background-color: transparent;
        border: 2px solid #ed6662;
        color: #ed6662;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        flex-direction: row;
    }
`;
