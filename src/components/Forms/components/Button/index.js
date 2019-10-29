import React from 'react';

import { Button, Title } from './styles';

export default function Input({ title, onClick, textProps = {}, ButtonProps = {} }) {
    return (
        <Button onClick={onClick} disableRipple {...ButtonProps}>
            <Title {...textProps}>{title || ''}</Title>
        </Button>
    );
}
