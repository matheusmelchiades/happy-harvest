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

export default ({
    data: { headers = [], rows = [], count = 0 },
    page = 0,
    rowsPerPage = 5,
    handleChangePage,
    handleChangeRowsPerPage,
}) => {
    return (
        <Container>
            <Paper>
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
        </Container>
    );
};
