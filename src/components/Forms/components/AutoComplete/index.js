import React, { useState } from 'react';

import { Autocomplete } from '@material-ui/lab';
import { Input } from '../Input/styles';

export default function({ onChange, input, getOptionLabel, options = [] }) {
    const [open, setOpen] = useState(false);

    return (
        <Autocomplete
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            getOptionLabel={getOptionLabel}
            options={options}
            onChange={onChange}
            renderInput={params => <Input {...params} {...input} />}
        />
    );
}
