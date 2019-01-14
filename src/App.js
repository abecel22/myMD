import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navbar';
import Doctors from './components/doctors';
import DoctorDetails from './components/doctorDetails';
import Clinics from './components/clinics';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <div className="container-fluid">
                    <Switch>
                        <Route
                            path="/doctorDetails/:id"
                            component={DoctorDetails}
                        />
                        <Route path="/clinics" component={Clinics} />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/" exact component={Doctors} />
                        <Redirect to="not-found" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
