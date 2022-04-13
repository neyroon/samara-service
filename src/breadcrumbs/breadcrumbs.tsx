import { FC } from 'react';
import {
    Container,
    ListContainer,
    ListElement,
    ListElementLast,
    ListElementLastText,
    StyledLink,
} from './breadcrumbs.styles';
import { BreadcrumbsProps } from './types';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ text, isMain = false }) => {
    return (
        <Container>
            <ListContainer>
                <ListElement $isMain={isMain}>
                    <StyledLink to='/' $isMain={isMain}>
                        Главная
                    </StyledLink>
                </ListElement>
                <ListElementLast>
                    <ListElementLastText $isMain={isMain}>{text}</ListElementLastText>
                </ListElementLast>
            </ListContainer>
        </Container>
    );
};

export default Breadcrumbs;
