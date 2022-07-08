import { useTable, usePagination } from 'react-table'

import ornament from "assets/img/common/ornament.png"

const LeaderboardTable = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        pageOptions,
        gotoPage,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 25 },
        },
        usePagination
    )
    return (
        <>
            <div className="table-wrapper">
                <div className="border"></div>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                {pageOptions.map((item) => (
                    <span className={pageIndex === item ? "active" : ""} onClick={() => gotoPage(item)}>
                        <div className="border"></div>
                        {item + 1}
                    </span>
                ))}
            </div>
        </>
    )
}

export default LeaderboardTable