import React from "react";
import {useExpanded, useTable} from "react-table";
import './App.css';
import './Table.css';
export default function Table({columns, data, renderRowSubComponent}) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: {expanded},
    } = useTable({
            columns,
            data
        },
        useExpanded
    );
    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <React.Fragment {...row.getRowProps()}>
                        <tr>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                        {
                        }
                        {
                            row.isExpanded ? (
                                <tr>
                                    <td colSpan={4}>
                                        {}
                                        {renderRowSubComponent(row)}
                                    </td>
                                </tr>
                            ) : null
                        }
                    </React.Fragment>
                )

            })}
            </tbody>
        </table>
    );
}