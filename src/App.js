import React, { Component } from 'react';
import NavBar from './components/navbar';
import Form from './components/form';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                    <h1>Find a Doctor</h1>
                    <Form />
                </div>
            </div>
        );
    }
}

export default App;
