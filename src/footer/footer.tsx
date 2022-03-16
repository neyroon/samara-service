import { Container, StyledMainContainer, StyledSpan, StyledPhoneLink } from './footer.styles';

export const Footer = () => {
    return (
        <Container>
            <StyledMainContainer>
                <StyledSpan fontSize='16px'>© 2010-2022 Ремонт техники «Работает»</StyledSpan>
                <StyledSpan fontSize='14px'>Политика конфиденциальности</StyledSpan>
                <StyledPhoneLink color='#fff' />
            </StyledMainContainer>
        </Container>
    );
};

export default Footer;
