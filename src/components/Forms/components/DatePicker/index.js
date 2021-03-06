import React from 'react';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import 'moment/locale/pt-br';

import { MuiProvider, Provider, DatePicker } from './styles';

export default props => (
    <MuiProvider>
        <Provider utils={MomentUtils} moment={moment}>
            <DatePicker
                format="DD/MM/YYYY"
                inputVariant="outlined"
                InputAdornmentProps={{ position: 'start' }}
                invalidDateMessage="Invalid Date"
                {...props}
            />
        </Provider>
    </MuiProvider>
);
