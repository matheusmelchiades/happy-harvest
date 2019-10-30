import React from 'react';

import { Container } from './styles';
import Forms from '../Forms';

export default function({ open = false, onClose, openOn }) {
    return (
        <Container open={open} onClose={onClose} fullWidth maxWidth="md" style={{ zIndex: 0 }}>
            <Forms openOn={openOn} />
        </Container>
    );
}
