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
                <ListElement isMain>
                    <StyledLink to='/' isMain>
                        Главная
                    </StyledLink>
                </ListElement>
                <ListElementLast>
                    <ListElementLastText isMain>{text}</ListElementLastText>
                </ListElementLast>
            </ListContainer>
        </Container>
    );
};

export default Breadcrumbs;
