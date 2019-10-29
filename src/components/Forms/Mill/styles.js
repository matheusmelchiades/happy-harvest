import styled from 'styled-components';
import * as MaterialUI from '@material-ui/core';

export const Container = styled(MaterialUI.Container)`
    padding: 5%;
`;

export const Input = styled(MaterialUI.TextField).attrs({
    fullWidth: true,
    variant: 'outlined',
})``;
