import styled from 'styled-components';
import { PhoneLink } from '../../common.styles';
import { breakpoints } from '../../constants';
import { Header } from '../../header';

export const StyledHeader = styled(Header)`
    padding: 0 0 50px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        padding: 0 0 30px;
    }
`;

export const FlexContainer = styled.div`
    margin: 30px 0;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
`;

export const Title = styled.p`
    margin: 0 0 5px;
    font-size: 16px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 18px;
    }
`;

export const StyledPhoneLink = styled(PhoneLink)`
    font-size: 33px;
    font-weight: bold;
`;

export const ContactsPhone = styled.div`
    margin: 0 0 20px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        width: 50%;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        width: 30%;
        margin: 0;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        width: 35%;
    }
`;

export const ContactsAddress = styled.div`
    margin: 0 0 20px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        width: 50%;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        width: 30%;
        margin: 0;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        width: 25%;
    }
`;

export const ContactsWorkTime = styled.div`
    display: flex;
    display: -ms-flexbox;
    padding: 20px;
    background: #fff;
    border-radius: 32px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        width: 100%;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        width: 40%;
    }
`;

export const ContactsWorkTimeWrapper = styled.div`
    width: calc(50% - 5px);
    text-align: center;
`;

export const ContactsTitle = styled.p`
    margin: 0 0 10px;
    font-size: 14px;
    color: #86868b;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 16px;
    }
`;

export const ContactsTime = styled.b`
    font-size: 16px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 20px;
    }
`;

export const ContactsAddressTitle = styled.b`
    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 24px;
    }
`;
