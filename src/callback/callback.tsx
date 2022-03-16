import {
    Section,
    Button,
    Container,
    PhoneInput,
    Title,
    WidthContainer,
    Form,
} from './callback.styles';

export const CallbackForm = () => {
    return (
        <Section>
            <Container>
                <WidthContainer>
                    <Title>Заказать обратный звонок</Title>
                    <Form>
                        <PhoneInput placeholder="+7" />
                        <Button>Обратный звонок</Button>
                    </Form>
                </WidthContainer>
            </Container>
        </Section>
    );
};

export default CallbackForm;
