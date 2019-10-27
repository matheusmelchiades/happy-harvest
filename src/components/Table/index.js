import React from 'react';

import {
    Container,
    Paper,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
} from './styles';

export default ({ data: { headers = [], body = [] } }) => {
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
                        {body.map(row => (
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
            </Paper>
        </Container>
    );
};
