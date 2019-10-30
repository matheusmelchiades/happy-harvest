import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Mill from './Mill';
import Harvest from './Harvest';
import Farm from './Farm';
import Field from './Field';

import { Tabs, Tab } from './styles';

export default function Forms({ openOn = 0 }) {
    const [index, SetIndex] = useState(openOn);

    return (
        <>
            <Tabs value={index} onChange={(_, value) => SetIndex(value)}>
                <Tab label="Mill" />
                <Tab label="Harvest" />
                <Tab label="Farm" />
                <Tab label="Field" />
            </Tabs>
            <SwipeableViews index={index}>
                <Mill />
                <Harvest />
                <Farm />
                <Field />
            </SwipeableViews>
        </>
    );
}
