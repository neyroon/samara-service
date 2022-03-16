import { Breadcrumbs } from '../../breadcrumbs';
import { CallbackForm } from '../../callback';
import { MainContainer, PageParagraph, PageTitle, UnderlineText } from '../../common.styles';
import { Footer } from '../../footer';
import { Menu } from '../../menu';
import {
    StyledHeader,
    Text,
    Title,
    WarrantyContainer,
    WarrantyList,
    WarrantyText,
    Hero,
    Section,
} from './warranty.styles';

export const Warranty = () => {
    return (
        <>
            <StyledHeader>
                <Menu textColor='#fff' burgerColor='#fff' />
                <Hero>
                    <Breadcrumbs text='Гарантия' />
                    <PageTitle>Гарантия</PageTitle>
                    <PageParagraph>
                        Мы <UnderlineText>предоставляем гарантию</UnderlineText> на работу и
                        запчасти сроком до 1 года.
                    </PageParagraph>
                </Hero>
            </StyledHeader>
            <MainContainer>
                <Section>
                    <Title>После ремонта у вас останется:</Title>
                    <WarrantyList>
                        <WarrantyContainer>
                            <WarrantyText>Договор</WarrantyText>
                        </WarrantyContainer>
                        <WarrantyContainer>
                            <WarrantyText>Акт приема-передачи</WarrantyText>
                        </WarrantyContainer>
                        <WarrantyContainer>
                            <WarrantyText>Гарантийный бланк БСО-1</WarrantyText>
                        </WarrantyContainer>
                    </WarrantyList>
                    <Text>
                        При наступлении гарантийного случая мы в срочном порядке бесплатно устраним
                        неисправность
                    </Text>
                </Section>
                <CallbackForm />
            </MainContainer>
            <Footer />
        </>
    );
};

export default Warranty;
