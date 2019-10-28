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
    Toolbar,
    Title,
    InputSearch,
    Icon,
    ButtonIcon,
} from './styles';

export default ({
    title = '',
    data: { headers = [], rows = [], count = 0 },
    page = 0,
    rowsPerPage = 10,
    handleChangePage,
    handleChangeRowsPerPage,
    search: {
        searchInput = '',
        onChangeInput = () => {},
        clearInput = () => {},
    },
}) => {
    return (
        <Container>
            {!!rows && (
                <Paper>
                    {title && (
                        <Toolbar>
                            <Title variant="h6">{title}</Title>
                            <InputSearch
                                value={searchInput}
                                onChange={e => onChangeInput(e.target.value)}
                                placeholder="Search..."
                                InputProps={{
                                    startAdornment: (
                                        <Icon position="start">search</Icon>
                                    ),
                                    endAdornment: (
                                        <ButtonIcon onClick={clearInput}>
                                            <Icon position="close">close</Icon>
                                        </ButtonIcon>
                                    ),
                                }}
                            />
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
