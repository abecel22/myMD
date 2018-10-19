import React, { Component } from 'react';
import NavBar from './components/navbar';
import Doctors from './components/doctors';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Doctors />
            </div>
        );
    }
}

export default App;
