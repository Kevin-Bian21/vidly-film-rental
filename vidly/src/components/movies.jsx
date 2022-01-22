import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies : getMovies()
    }

    handleDelete = (movie) => {
        console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);  //将传入的movie的id和movies中的id不相同的movie重新选出赋值给state中的movies
        this.setState({ movies : movies})
    }

    render() {

        const { length : count } = this.state.movies;

        if(count === 0)
            return <p>数据库中没有电影</p>;

        return (
            <React.Fragment>
                <p>数据库中有{count}部电影</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm'>删除</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )}
}

export default Movies;