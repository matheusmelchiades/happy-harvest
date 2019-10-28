import React from 'react';
import { Container, TabList, TabItem } from './styles';

export default function({ data = [], value = 0, onChange }) {
    return (
        <Container>
            <TabList value={value} onChange={(e, value) => onChange({ value, item: data[value] })}>
                {data.map(tabItem => (
                    <TabItem key={tabItem.path} label={tabItem.label} />
                ))}
            </TabList>
        </Container>
    );
}
