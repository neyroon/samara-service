import styled from 'styled-components';
import { breakpoints } from '../../constants';

export const Input = styled.input`
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
