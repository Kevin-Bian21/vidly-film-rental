import { get } from 'lodash';
import React, { Component } from 'react';
import { genres, getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/Like';
import ListGroup from './common/ListGroup';
import Pagination from './common/Pagination';
import MoviesTable from './moviesTable';
import  { paginate }  from './utils/paginate';
import lodash from "lodash";

class Movies extends Component {
    state = {
        movies : [],  //先使用空数组，防止产生undefined异常，当DOM渲染完毕后，调用componentDidMount来进行赋值
        pageSize : 5,
        currentPage : 1,
        genres : [],
        sortColumn : {path : 'title', order : 'asc'}
    };

    componentDidMount() {
        const genres = [{ _id : "",name : "All genre"}, ...getGenres()];  //在得到的genres中再添加一项all genre
        this.setState( {movies : getMovies(), genres : genres } );
    }

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

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre : genre, currentPage : 1});
    };

    handleSort = (path) => {
        this.setState( { sortColumn : {path : path, order : 'asc'}} );
    }
    render() {

        const { length : count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies : allMovies, sortColumn} = this.state;

        if(count === 0)
            return <p>数据库中没有电影</p>;

        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies; //筛选出同一分组的电影

        const sorted = lodash.orderBy(filtered, [sortColumn.path], [sortColumn.order]); //排序

        const movies = paginate(sorted, currentPage, pageSize); //调用分页算法

        return (
            <div className='row'>
                <div className='col-2'>
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect = {this.handleGenreSelect}
                    />
                </div>
                <div className='col-5'>
                    <p>数据库中有{filtered.length}部电影</p>
                    <MoviesTable
                        movies = {movies}
                        onDelete = {this.handleDelete}
                        onLike = {this.handleLike}
                        onSort = {this.handleSort}
                    />
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        )}
}

export default Movies;