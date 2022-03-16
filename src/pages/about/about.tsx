import { MainContainer, PageParagraph, PageTitle } from '../../common.styles';
import { Menu } from '../../menu';
import {
    AboutElement,
    AboutElementImagesGrid,
    Grid,
    Image,
    ImageContainer,
    StyledHeader,
    Text,
    Title,
    Hero,
} from './ about.styles';
import PhoneImage from '../../assets/about-phone.png';
import HandshakeImage from '../../assets/about-handshake.png';
import AttestationImage from '../../assets/about-attestation.png';
import GridFirst from '../../assets/about-grid-1.png';
import GridSecond from '../../assets/about-grid-2.png';
import GridThird from '../../assets/about-grid-3.png';
import GridFourth from '../../assets/about-grid-4.png';
import { CallbackForm } from '../../callback';
import { Footer } from '../../footer';
import { Breadcrumbs } from '../../breadcrumbs';
import { useIsMobile } from '../../hooks';
import { breakpoints } from '../../constants';

export const About = () => {
    const isMobile = useIsMobile(breakpoints.DESKTOP_S);
    return (
        <>
            <StyledHeader>
                <Menu textColor="#fff" burgerColor="#fff" />
                <Hero>
                    <Breadcrumbs text="О компании" />
                    <PageTitle>О компании</PageTitle>
                    <PageParagraph>
                        Мы занимаемся ремонтом бытовой техники с 2010 года и
                        знаем о ней все.
                    </PageParagraph>
                </Hero>
            </StyledHeader>
            <MainContainer>
                <Title>
                    За это время мы выстроили все бизнес-процессы так, чтобы
                    клиентам было удобно:
                </Title>
                <Grid>
                    <AboutElement>
                        <Text>
                            Равномерное распределение мастеров по городу и
                            отлаженные внутренние коммуникации позволяют нашим
                            мастерам приезжать к клиентам в течение часа.
                        </Text>
                        <img src={PhoneImage} alt="Телефон" loading="lazy" />
                    </AboutElement>
                    <AboutElement>
                        <Text>
                            Договора с крупными поставщиками дают возможность
                            приобретать комплектующие по цене ниже рынка и
                            снизить стоимость ремонта.
                        </Text>
                        <img
                            src={HandshakeImage}
                            alt="Телефон"
                            loading="lazy"
                        />
                    </AboutElement>
                    <AboutElement>
                        <Text>
                            Регулярные аттестации сотрудников допускают к работе
                            только компетентных мастеров и снижают до минимума
                            обращения по гарантии.
                        </Text>
                        <img
                            src={AttestationImage}
                            alt="Аттестация"
                            loading="lazy"
                        />
                    </AboutElement>
                    {!isMobile && (
                        <AboutElementImagesGrid>
                            <ImageContainer>
                                <Image
                                    src={GridFirst}
                                    alt="1 фото"
                                    loading="lazy"
                                />
                            </ImageContainer>
                            <ImageContainer>
                                <Image
                                    src={GridSecond}
                                    alt="2 фото"
                                    loading="lazy"
                                />
                            </ImageContainer>
                            <ImageContainer>
                                <Image
                                    src={GridThird}
                                    alt="3 фото"
                                    loading="lazy"
                                />
                            </ImageContainer>
                            <ImageContainer>
                                <Image
                                    src={GridFourth}
                                    alt="4 фото"
                                    loading="lazy"
                                />
                            </ImageContainer>
                        </AboutElementImagesGrid>
                    )}
                </Grid>
                <CallbackForm />
            </MainContainer>
            <Footer />
        </>
    );
};

export default About;
