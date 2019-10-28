import React from 'react';

import Layout from '../../components/Layout';
import Table from '../../components/Tables/ApiTablePaginated';

export default function Home() {
    return (
        <Layout>
            <Table path="mill" />
        </Layout>
    );
}
