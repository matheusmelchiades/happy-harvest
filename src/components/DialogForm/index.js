import React, { useState } from 'react';

import { Container, Tabs, Tab } from './styles';
import * as Forms from '../Forms';
import SwipeableViews from 'react-swipeable-views';

export default function({ open = false }) {
    const [index, SetIndex] = useState(2);

    return (
        <Container open={open} fullWidth={true} maxWidth="md" style={{ zIndex: 0 }}>
            <Tabs value={index} onChange={(_, value) => SetIndex(value)}>
                <Tab label="Mill" />
                <Tab label="Harvest" />
                <Tab label="Farm" />
                <Tab label="Field" />
            </Tabs>
            <SwipeableViews index={index}>
                <Forms.Mill />
                <Forms.Harvest />
                <Forms.Farm />
                <Forms.Field />
            </SwipeableViews>
        </Container>
    );
}
