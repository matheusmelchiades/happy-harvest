import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Container = styled(MaterialUI.Dialog)`
    .MuiPaper-rounded {
        border-radius: 15px;
    }

    & .MuiDialog-scrollPaper {
        align-items: flex-start;
        margin-top: 8%;
    }
`;

export const Tabs = styled(MaterialUI.Tabs)`
    background-color: #27ae60;

    .MuiTabs-indicator {
        background-color: #c0392b;
    }
`;

export const Tab = styled(MaterialUI.Tab)`
    && {
        color: white;
        font-weight: bold;
    }
`;

export const Content = styled(MaterialUI.Container)``;
