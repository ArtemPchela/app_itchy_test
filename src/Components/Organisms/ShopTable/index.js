import React, {useState, useEffect, useMemo} from "react";
import styles from "./style.module.scss";
import {useTable, usePagination} from 'react-table'


function Table() {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'kCal',
                accessor: 'kcal'
            },
            {
                Header: 'Fat',
                accessor: 'fat'
            },
            {
                Header: 'Protein',
                accessor: 'protein'
            },
            {
                Header: 'Carbs',
                accessor: 'carbs'
            }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: {pageIndex},
    } = useTable(
        {
            columns,
            data: tableData,
            initialState: {pageIndex: 0},
        },
        usePagination
    );

    const fetchData = () => {
        fetch('https://test.itsitchy.com/api/v1/health/food/', {
            headers: {
                'Authorization': '',
            }
        }).then(response => response.json())
            .then(posts => {
                setTableData(posts);
            })
    };


    return (
        <div className={styles.table_wrapper}>
            <div className="container">
                <table {...getTableProps()} className={`${styles.table} row`}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className={styles.tr}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className={styles.th}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className={styles.tr}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()} className={styles.td}>
                                        {cell.render('Cell')}
                                    </td>
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

            <div className="container">
                <div className={`${styles.pagination} row`}>
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}
                            className={`${styles.last}`}>
                        {'>>'}
                    </button>
                    <div className={`${styles.page_index}`}>
                        <span>
                            <strong>
                             &nbsp; Page &nbsp; {pageIndex + 1} &nbsp; of &nbsp; {pageOptions.length} &nbsp;
                            </strong>
                        </span>
                    </div>
                    <div className={`${styles.pagination_input}`}>
                        <span>
                            Go to page:
                            <input
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                    gotoPage(page)
                                }}
                                style={{width: '50px'}}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
