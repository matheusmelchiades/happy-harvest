import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Container = styled(MaterialUI.Paper)`
    padding: 5px;
    padding-right: 60px;
    padding-left: 60px;
    width: 100%;
    && {
        background-color: ${({ color }) => (color === 'green' ? '#27ae60' : ' #c0392b')};
        border-radius: 5px;
    }

    &&:focus {
        box-shadow: 0 0 0 0.2rem ${({ color }) => (color === 'green' ? '#27ae60' : '#c0392b')};
    }
`;

export const Message = styled(MaterialUI.Typography)`
    color: white;
    && {
        font-weight: 600;
        font-family: 16px;
    }
`;
