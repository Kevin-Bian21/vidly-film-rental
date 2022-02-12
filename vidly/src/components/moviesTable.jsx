import React, { Component } from 'react';
import Like from './common/Like';
import Table from './common/Table';
import TableBody from './common/Table';


class MoviesTable extends Component {

    //columns没有声明在state中，因为它的生命周期不会变化
    columns = [
        { path : 'title', label : 'Title' },
        { path : 'genre.name', label : 'Genre' },
        { path : 'numberInStock', label : 'Stock' },
        { path : 'dailyRentalRate', label : 'Rate' },
        { key : 'Like', content : movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> },
        { key : 'delete', content : movie => (
            <button
                onClick={() => this.props.onDelete(movie)}
                className='btn btn-danger btn-sm'>
                删除
            </button>
        )},
    ];


    render() {
        const {movies, sortColumn, onSort} = this.props;

        return (
            <Table
                columns = {this.columns}
                data = {movies}
                sortColumn = {sortColumn}
                onSort = {onSort}
            />
        );
    }
}

export default MoviesTable;