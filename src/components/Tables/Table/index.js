import React from 'react';

import {
    Container,
    Paper,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
} from './styles';
import { Toolbar, Typography } from '@material-ui/core';

export default ({
    title = '',
    data: { headers = [], rows = [], count = 0 },
    page = 0,
    rowsPerPage = 10,
    handleChangePage,
    handleChangeRowsPerPage,
}) => {
    return (
        <Container>
            {!!rows && (
                <Paper>
                    {title && (
                        <Toolbar>
                            <Typography variant="h6">{title}</Typography>
                        </Toolbar>
                    )}
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {headers.map(header => (
                                    <TableCell key={header}>{header}</TableCell>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    {headers.map(fieldName => (
                                        <TableCell key={fieldName}>
                                            {row[fieldName]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        page={page}
                        count={count}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10]}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            )}
        </Container>
    );
};
