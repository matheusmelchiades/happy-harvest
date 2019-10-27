import React from 'react';

import { Container, Content } from './styles';
import Toolbar from '../Toolbar';

export default function Layout({ children }) {
    return (
        <Container>
            <Toolbar>Header</Toolbar>
            <Content>{children}</Content>
        </Container>
    );
}
