import { Menu } from '../../menu';
import { MainContainer, PageHero, PageTitle } from '../../common.styles';
import { CallbackForm } from '../../callback';
import {
    StyledHeader,
    ContactsAddress,
    ContactsAddressTitle,
    ContactsPhone,
    ContactsTime,
    ContactsTitle,
    ContactsWorkTime,
    ContactsWorkTimeWrapper,
    FlexContainer,
    StyledPhoneLink,
    Title,
} from './contacts.styles';
import { Breadcrumbs } from '../../breadcrumbs';
import { Footer } from '../../footer';

export const Contacts = () => {
    return (
        <>
            <StyledHeader>
                <Menu textColor='#fff' burgerColor='#fff' />
                <PageHero>
                    <Breadcrumbs text='Контакты' />
                    <PageTitle>Контакты</PageTitle>
                </PageHero>
            </StyledHeader>
            <MainContainer>
                <FlexContainer>
                    <ContactsPhone>
                        <Title>Номер телефона:</Title>
                        <StyledPhoneLink color='#ed6662' />
                    </ContactsPhone>
                    <ContactsAddress>
                        <Title>Адрес сервисного центра:</Title>
                        <ContactsAddressTitle>бульвар Генерала Карбышева, д4</ContactsAddressTitle>
                    </ContactsAddress>
                    <ContactsWorkTime>
                        <ContactsWorkTimeWrapper style={{ margin: '0 5px 0 0' }}>
                            <ContactsTitle>Время работы:</ContactsTitle>
                            <ContactsTime>c 7:00 до 23:45</ContactsTime>
                        </ContactsWorkTimeWrapper>
                        <ContactsWorkTimeWrapper style={{ margin: '0 0 0 5px' }}>
                            <ContactsTitle>Мастера выезжают:</ContactsTitle>
                            <ContactsTime>c 9:00 до 23:00</ContactsTime>
                        </ContactsWorkTimeWrapper>
                    </ContactsWorkTime>
                </FlexContainer>
                <CallbackForm />
            </MainContainer>
            <Footer />
        </>
    );
};

export default Contacts;
