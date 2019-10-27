import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';
import * as MaterialIcons from '@material-ui/icons';

export const Container = styled(MaterialUI.Paper)`
    display: flex;
    flex-direction: column;

    && {
        background-color: #27ae60;
        padding: 0;
        border-radius: 0;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30%;
    margin-bottom: 50%;
`;

export const LogoIcon = styled(MaterialUI.Icon)`
    margin: 0;
    padding: 0;
`;

export const EcoIcon = styled(MaterialIcons.Eco)`
    color: white;
`;

export const ToolContent = styled(MaterialUI.List)``;

export const ToolContentItem = styled(MaterialUI.ListItem)`
    margin: 0;
    padding: 0;
    margin-top: 10%;
    margin-bottom: 10%;
`;

export const ButtonIcon = styled(MaterialUI.IconButton)`
    && {
        padding: 5px;
    }
`;

export const Icon = styled(MaterialUI.Icon)`
    color: white;
`;
