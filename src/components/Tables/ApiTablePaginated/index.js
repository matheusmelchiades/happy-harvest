import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import Table from '../Table';

export default function ApiTablePaginated({
    path = '',
    search: { pathToSearch = '', renderResponse = res => res.data },
    ...props
}) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
        (async function fetchData() {
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
        })();
    }, [page, rowsPerPage]);

    useEffect(() => {
        if (!pathToSearch || !inputSearch) return;

        (async function searchData() {
            try {
                const response = await api.get(pathToSearch, { params: { search: inputSearch } });

                if (response.status === 200) {
                    const resData = renderResponse(response);
                    setData({ ...data, rows: resData });
                }
            } catch (err) {
                return err.message;
            }
        })();
    }, [inputSearch]);

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
                clearInput: () => setInputSearch(''),
                onChangeInput: value => setInputSearch(value),
            }}
        />
    );
}
