import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

export const Container = styled(MaterialUI.Container)`
    height: 100vh;
    padding-top: 5%;
`;

export const Paper = styled(MaterialUI.Paper)`
    &&.MuiPaper-rounded {
        border-radius: 15px;
    }
`;

export const Table = styled(MaterialUI.Table)``;

export const TableHeader = styled(MaterialUI.TableHead)``;

export const TableBody = styled(MaterialUI.TableBody)`
    && .MuiTableRow-root:hover {
        background: #2ecc71;
        color: white;
    }
`;

export const TableRow = styled(MaterialUI.TableRow)``;

export const TableCell = styled(MaterialUI.TableCell).attrs({
    align: 'center',
})``;

export const TablePagination = styled(MaterialUI.TablePagination)``;

export const Toolbar = styled(MaterialUI.Toolbar)`
    display: flex;
    justify-content: space-between;
`;
export const Title = styled(MaterialUI.Typography)``;

export const InputSearch = styled(MaterialUI.TextField)`
    width: 40%;
`;

export const ButtonIcon = styled(MaterialUI.IconButton)``;

export const Icon = styled(MaterialUI.Icon)`
    margin: 3%;
`;
