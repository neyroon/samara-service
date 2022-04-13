import React, { FC, useMemo } from 'react';
import IMask from 'imask';
import { Input } from './phone-input.styles';
import { PhoneInputProps } from './types';

export const PhoneInput: FC<PhoneInputProps> = ({ value, onChange }) => {
    const maskPipe = useMemo(
        () =>
            IMask.createPipe({
                mask: '+{7} (000) 000-00-00',
                commit: function (value: string, masked: any) {
                    onChange(value, masked.unmaskedValue);
                },
            }),
        []
    );

    const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        maskPipe(e.currentTarget.value);
    };

    return <Input placeholder='+7' value={value} onInput={onInputChange} />;
};

export default PhoneInput;
