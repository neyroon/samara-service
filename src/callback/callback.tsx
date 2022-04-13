import { useState } from 'react';
import { Section, Button, Container, Title, WidthContainer, Form } from './callback.styles';
import { CALLBACK_API_URL } from '../constants';
import { PhoneInput } from './phone-input';

export const CallbackForm = () => {
    const [phone, setPhone] = useState('+7');
    const [unmaskedPhone, setUnmaskedPhone] = useState('');

    const onButtonClick = () => {
        try {
            fetch(CALLBACK_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone: unmaskedPhone }),
            });
        } catch (error) {}
    };

    const handleInputChange = (phone: string, unmaskedPhone: string) => {
        setPhone(phone);
        setUnmaskedPhone(unmaskedPhone);
    };

    return (
        <Section>
            <Container>
                <WidthContainer>
                    <Title>Заказать обратный звонок</Title>
                    <Form>
                        <PhoneInput onChange={handleInputChange} value={phone} />
                        <Button onClick={onButtonClick}>Обратный звонок</Button>
                    </Form>
                </WidthContainer>
            </Container>
        </Section>
    );
};

export default CallbackForm;
