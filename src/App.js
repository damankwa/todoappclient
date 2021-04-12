import React from 'react';
import {hot} from 'react-hot-loader';
import TodoList from './todos/TodoList';
import {Container}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
    <div className = "App">
        <Container>
        <TodoList />
        </Container>
    </div>
);

export default hot(module)(App);