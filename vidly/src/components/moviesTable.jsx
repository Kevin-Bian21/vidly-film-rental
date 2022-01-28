import React, { Component } from 'react';
import Like from './common/Like';
import TableHeader from './common/TableHeader';


class MoviesTable extends Component {

    //columns没有声明在state中，因为它的生命周期不会变化
    columns = [
        { path : 'title', label : 'Title' },
        { path : 'genre.name', label : 'Genre' },
        { path : 'numberInStock', label : 'Stock' },
        { path : 'dailyRentalRate', label : 'Rate' },
        { key : 'Like' },
        { key : 'delete' },
    ];


    render() {
        const {movies, onDelete, onLike, sortColumn, onSort} = this.props;

        return (
            <table className="table">
                <TableHeader
                    columns = {this.columns}
                    sortColumn = {sortColumn}
                    onSort = {onSort}
                />
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like liked = {movie.liked} onClick={() => onLike(movie)} />
                            </td>
                            <td>
                                <button onClick={() => onDelete(movie)} className='btn btn-danger btn-sm'>删除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;