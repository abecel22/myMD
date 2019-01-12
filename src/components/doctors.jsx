import React, { Component } from 'react';
import Form from './form';
import Results from './results';

import docImage from '../Assets/woman-3187087_1920.jpg';

class Doctors extends React.Component {
    state = {
        formData: {},
        results: [],
        location: ''
    };

    componentDidMount() {
        let doctors = localStorage.getItem('doctors');
        doctors = JSON.parse(doctors);
        this.setState({ results: doctors });
        console.log(doctors);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.makeGeoAPICall();
    };

    handleChange = ({ currentTarget: input }) => {
        const formData = { ...this.state.formData };
        formData[input.name] = input.value;
        this.setState({ formData });
    };

    makeGeoAPICall = () => {
        const geoKey = process.env.REACT_APP_SECRET_KEY;
        const formData = this.state.formData;
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${
                formData.zipCode
            }&key=${geoKey}`
        )
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                const latitude = result.results[0].geometry.location.lat;
                const longitude = result.results[0].geometry.location.lng;
                this.setState({ location: `${latitude},${longitude}` });
                this.makeAPICall();
            });
    };

    makeAPICall = () => {
        const key = process.env.REACT_APP_SECRET_CODE;
        const formData = this.state.formData;
        const coordinates = this.state.location;
        console.log(formData);
        fetch(
            `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${
                formData.specialty
            }&location=${coordinates},10&limit=20&user_key=${key}`
        )
            .then((res) => res.json())
            .then((result) => {
                const doctors = result.data;
                this.setState({ results: doctors });
                localStorage.setItem('doctors', JSON.stringify(doctors));
            });
    };

    render() {
        const { results } = this.state;
        return (
            <div className="container">
                <img
                    src={docImage}
                    className="img-fluid main-image"
                    alt="Responsive"
                />
                <h2>Find a Doctor</h2>
                <Form
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                />
                <Results result={results} />
            </div>
        );
    }
}

export default Doctors;
