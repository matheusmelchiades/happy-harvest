import React from 'react';

import { MenuItem, TextField } from '@material-ui/core';

export default function({
    label = '',
    onChange = item => item,
    options = [],
    renderByField = item => item,
}) {
    return (
        <TextField
            select
            fullWidth
            label={label}
            variant="outlined"
            onChange={e => onChange(options[e.target.value])}
        >
            {options.map((item, index) => {
                const renderItem = renderByField(item);

                return (
                    <MenuItem key={renderItem} value={index}>
                        {renderItem}
                    </MenuItem>
                );
            })}
        </TextField>
    );
}
