import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Container = styled(MaterialUI.Container)`
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 2%;
`;

export const Content = styled(MaterialUI.Container)`
    padding: 0;
`;

export const Footer = styled(MaterialUI.Container)`
    padding-top: 2%;
    display: flex;
    align-content: space-between;
    justify-content: space-between;
`;

export const FooterStart = styled.div``;
export const FooterEnd = styled.div``;
