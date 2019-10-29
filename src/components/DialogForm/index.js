import React, { useState } from 'react';

import { Container, Tabs, Tab } from './styles';
import * as Forms from '../Forms';

const data = [
    {
        tab: 'Mill',
        form: 'Mill',
    },
    {
        tab: 'Harvest',
        form: 'Harvest',
    },
    {
        tab: 'Farm',
        form: 'Farm',
    },
    {
        tab: 'Field',
        form: 'Field',
    },
];

export const RenderForm = ({ form }) => {
    return Forms[form]();
};

export default function() {
    const [tabs] = useState(data);
    const [index, SetIndex] = useState(0);

    return (
        <Container open={true} fullWidth={true} maxWidth="md">
            <Tabs value={index} onChange={(_, value) => SetIndex(value)}>
                {tabs.map(({ tab }) => (
                    <Tab key={tab} label={tab} />
                ))}
            </Tabs>

            {!!tabs.length && <RenderForm form={tabs[index].form} />}
        </Container>
    );
}
