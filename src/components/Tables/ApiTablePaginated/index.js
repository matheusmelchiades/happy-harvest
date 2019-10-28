import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import Table from '../Table';

export default function ApiTablePaginated({ path = '', ...props }) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [inputSearch, setInputSearch] = useState('');

    async function fetchData() {
        try {
            const response = await api.get(`${path}/listing`, {
                params: {
                    page,
                    rowsPerPage,
                },
            });
            setData(response.data);
        } catch (err) {
            return err.message;
        }
    }

    useEffect(() => {
        fetchData();
    }, [page, rowsPerPage]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Table
            {...props}
            data={data}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            search={{
                searchInput: inputSearch,
                onChangeInput: value => setInputSearch(value),
                clearInput: () => setInputSearch(''),
            }}
        />
    );
}
