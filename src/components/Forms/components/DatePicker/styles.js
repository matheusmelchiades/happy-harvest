import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#27ae60',
        },
        secondary: {
            main: '#fff',
        },
    },
});
export const MuiProvider = styled(MuiThemeProvider).attrs({ theme })``;

export const Provider = styled(MuiPickersUtilsProvider)``;

export const DatePicker = styled(KeyboardDatePicker)`
    width: 45%;

    .MuiFormLabel-root.Mui-focused {
        color: #27ae60;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #27ae60;
    }
`;
