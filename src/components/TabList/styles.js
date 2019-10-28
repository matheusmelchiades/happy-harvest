import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Container = styled(MaterialUI.Paper)`
    display: flex;
    height: 100%;
`;

export const TabList = styled(MaterialUI.Tabs).attrs({
    orientation: 'vertical',
})``;

export const TabItem = styled(MaterialUI.Tab)``;
