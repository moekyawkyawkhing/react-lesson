import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Quiz from './components/Quiz';
import './App';

export default class App extends Component{
  render(){
    return (
        <div className="container">
           <Quiz />
        </div>
    );
  }
}