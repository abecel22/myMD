import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Doctors from './components/doctors';
import DoctorDetails from './components/doctorDetails';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <div className="container-fluid">
                    <Route
                        render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={300}
                                >
                                    <Switch location={location}>
                                        <Route
                                            path="/doctorDetails/:id"
                                            component={DoctorDetails}
                                        />
                                        <Route
                                            path="/"
                                            exact
                                            component={Doctors}
                                        />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default App;
