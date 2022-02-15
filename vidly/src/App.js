import React, { Component } from 'react';
import Movies from './components/movies';
import Customers from './components/customers';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Login from './components/Login';
import MovieForm from './components/movieForm';
import NavBar from './components/navBar';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Routes>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path="movies" element={<Movies />} ></Route>
            <Route path="movies"  >
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
