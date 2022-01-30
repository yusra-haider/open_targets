// Table.js

import React from "react";
import {useExpanded, useTable} from "react-table";
import chart from "./chart";

export default function Table({columns, data}) {

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
                        {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */
                        }
                        {
                            row.isExpanded ? (
                                <tr>
                                    <td colSpan={columns.length}>
                                        {/*
                              Inside it, call our renderRowSubComponent function. In reality,
                              you could pass whatever you want as props to
                              a component like this, including the entire
                              table instance. But for this example, we'll just
                              pass the rows
                            */}
                                        {chart(row)}
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