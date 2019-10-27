import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Container = styled(MaterialUI.Container).attrs({
    maxWidth: 'xl',
})`
    display: flex;
    flex-direction: row;
    && {
        padding: 0;
        margin: 0;
        height: 100vh;
    }
`;

export const Content = styled(MaterialUI.Container).attrs({
    maxWidth: 'xl',
})`
    && {
        padding: 0;
    }
`;
