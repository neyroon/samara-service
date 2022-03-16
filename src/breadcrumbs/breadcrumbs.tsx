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

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ text }) => {
    return (
        <Container>
            <ListContainer>
                <ListElement>
                    <StyledLink to="/">Главная</StyledLink>
                </ListElement>
                <ListElementLast>
                    <ListElementLastText>{text}</ListElementLastText>
                </ListElementLast>
            </ListContainer>
        </Container>
    );
};

export default Breadcrumbs;
