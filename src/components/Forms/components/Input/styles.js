import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Input = styled(MaterialUI.TextField).attrs({
    fullWidth: true,
    variant: 'outlined',
})`
    .MuiFormLabel-root.Mui-focused {
        color: #27ae60;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #27ae60;
    }
`;
