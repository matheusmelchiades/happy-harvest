import React from 'react';

import { Container, Content, Footer, FooterStart, FooterEnd } from './styles';

export default function Layout({ children, footerStartChildren, footerEndChildren }) {
    return (
        <Container>
            <Content>{children}</Content>
            <Footer>
                <FooterStart>{footerStartChildren}</FooterStart>
                <FooterEnd>{footerEndChildren}</FooterEnd>
            </Footer>
        </Container>
    );
}
