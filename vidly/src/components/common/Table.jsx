import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = (props) => {
    const {data, sortColumn, onSort, columns} = props;
    console.log(props);

    return (
        <table className="table">
            <TableHeader
                columns = {columns}
                sortColumn = {sortColumn}
                onSort = {onSort}
            />
            <TableBody
                data = {data}
                columns = {columns}
            />
        </table>
    );
}

export default Table;