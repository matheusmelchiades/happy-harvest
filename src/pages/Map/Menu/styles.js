import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Menu = styled(MaterialUI.Paper)`
    position: absolute;
    left: ${({ position }) => `${position.x - 48}px`};
    top: ${({ position }) => `${position.y + 20}px`};
`;

export const MenuItem = styled(MaterialUI.MenuItem)``;
