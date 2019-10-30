import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Container = styled(MaterialUI.Container)`
    padding-top: 10%;
    background-color: #fafafa;

    .MuiTabs-root {
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }

    .MuiPaper-rounded {
        border-radius: 15px;
    }
`;
export const Paper = styled(MaterialUI.Paper)``;
