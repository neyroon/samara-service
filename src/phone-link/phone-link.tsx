import { FC } from 'react';
import { Link } from './phone-link.styles';
import { PhoneLinkProps } from './types';

export const PhoneLink: FC<PhoneLinkProps> = ({ className }) => {
    return (
        <Link className={className} href='tel:+74958446540'>
            +7 987 955-10-65
        </Link>
    );
};

export default PhoneLink;
