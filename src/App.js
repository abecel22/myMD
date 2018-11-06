import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Doctors from './components/doctors';
import DoctorDetails from './components/doctorDetails';
import Clinics from './components/clinics';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route
                            path="/doctorDetails/:id"
                            component={DoctorDetails}
                        />
                        <Route path="/clinics" component={Clinics} />
                        <Route path="/" component={Doctors} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
