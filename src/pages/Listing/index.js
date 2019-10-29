import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import { FlexRow } from './styles';
import { Layout, TabList, ApiTable as Table } from '../../components';
import api from '../../services/api';

const PATH_ROOT = '/listing';

export default function Listing({ history }) {
    const [data, setData] = useState([]);
    const [tabValue, setTabValue] = useState(0);

    const handleChangeTab = ({ value, item }) => {
        setTabValue(value);
        history.push(`${PATH_ROOT}${item.path}`);
    };

    useEffect(() => {
        (async function fetchData() {
            try {
                const response = await api.get('/system/tabListing');
                const [firstItem] = response.data;

                history.push(`${PATH_ROOT}${firstItem.path}`);

                setData(response.data);
            } catch (err) {
                return err.message;
            }
        })();
    }, []);

    return (
        <Layout>
            <FlexRow>
                <TabList data={data} value={tabValue} onChange={handleChangeTab} />
                {data.map(({ label, path }) => (
                    <Route
                        key={path}
                        path={`${PATH_ROOT}${path}`}
                        component={() => (
                            <Table
                                path={path}
                                title={`Search for some ${label}`}
                                onClick={item => {
                                    if (path === '/field') {
                                        history.push('/map', item);
                                    }
                                }}
                            />
                        )}
                    />
                ))}
            </FlexRow>
        </Layout>
    );
}
