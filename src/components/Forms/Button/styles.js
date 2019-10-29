import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Button = styled(MaterialUI.Button).attrs({
    variant: 'contained',
})`
    && {
        color: white;
        background-color: #27ae60;
    }

    &&:hover {
        background-color: #27ae60;
        border-color: #27ae60;
        box-shadow: none;
    }

    &&:active {
        box-shadow: none;
        background-color: #27ae60;
        border-color: #2ecc71;
    }

    &&:focus {
        box-shadow: 0 0 0 0.2rem #2ecc71;
    }
`;

export const Title = styled(MaterialUI.Typography)`
    color: white;
    && {
        font-weight: 500;
        font-family: 16px;
    }
`;
