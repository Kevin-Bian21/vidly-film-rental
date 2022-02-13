import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import Customers from './components/customers';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import NavBar from './components/navBar';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Routes>
            <Route path="movies" element={<Movies />} >
              <Route path=":id" element={<MovieForm />} />
            </Route>
            <Route path="customers" element={<Customers/>}></Route>
            <Route path="rentals" element={<Rentals/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </main>
        <Outlet />
      </React.Fragment>
    );
  }
}

export default App;
