import { get } from 'lodash';
import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/Like';
import ListGroup from './common/ListGroup';
import Pagination from './common/Pagination';
import  { paginate }  from './utils/paginate';

class Movies extends Component {
    state = {
        movies : getMovies(),
        pageSize : 5,
        currentPage : 1,
        genre : getGenres(),
    };

    handleDelete = (movie) => {
        console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);  //将传入的movie的id和movies中的id不相同的movie重新选出赋值给state中的movies
        this.setState({ movies : movies})
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
    };

    handlePageChange = (page) => {
        this.setState({currentPage : page});
    };

    handleGenreSelect = (item) => {
        console.log(item);
    }
    render() {

        const { length : count } = this.state.movies;
        const { pageSize, currentPage } = this.state;

        if(count === 0)
            return <p>数据库中没有电影</p>;

        const movies = paginate(this.state.movies, currentPage, pageSize); //调用分页算法

        return (
            <div className='row'>
                <div className='col-2'>
                    <ListGroup
                        items={this.state.genre}
                        onItemSelect = {this.handleGenreSelect}
                    />
                </div>
                <div className='col-5'>
                    <p>数据库中有{count}部电影</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <Like liked = {movie.liked} onClick={() => this.handleLike(movie)} />
                                    </td>
                                    <td>
                                        <button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm'>删除</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        )}
}

export default Movies;