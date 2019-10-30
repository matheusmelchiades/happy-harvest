import React from 'react';

import { Layout, Forms } from '../../components';
import { Container, Paper } from './styles';

export default function({ openOn }) {
    return (
        <Layout>
            <Container>
                <Paper>
                    <Forms openOn={openOn} />
                </Paper>
            </Container>
        </Layout>
    );
}
