import React from 'react';

import { Container, Message } from './style';

export default function({ success = 'green', error = 'red', message = '' }) {
    return success || error ? (
        <Container color={success ? 'green' : 'red'}>
            <Message>{message}</Message>
        </Container>
    ) : null;
}
