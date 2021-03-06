import React, { Component } from 'react';
import Form from './form';
import Results from './results';

class Doctors extends Component {
    state = {
        formData: {},
        results: [],
        location: ''
    };

    componentDidMount() {
        //Checks for session storage and adds to state. Reduces call to doc API.
        let doctors = sessionStorage.getItem('doctors');
        let zip = sessionStorage.getItem('zip');
        doctors = JSON.parse(doctors);
        zip = JSON.parse(zip);
        this.setState({ results: doctors, formData: zip });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.makeGeoAPICall();
    };

    handleChange = ({ currentTarget: input }) => {
        const formData = { ...this.state.formData };
        formData[input.name] = input.value.toLowerCase();
        this.setState({ formData });
    };

    makeGeoAPICall = () => {
        //Makes call to Google geolocation based on zip code. Doc API does not take zip code.
        const geoKey = process.env.REACT_APP_SECRET_KEY;
        const formData = this.state.formData;
        sessionStorage.setItem('zip', JSON.stringify(formData));
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${
                formData.zipCode
            }&key=${geoKey}`
        )
            .then((res) => res.json())
            .then((result) => {
                const latitude = result.results[0].geometry.location.lat;
                const longitude = result.results[0].geometry.location.lng;
                this.setState({ location: `${latitude},${longitude}` });
                this.makeAPICall();
            });
    };

    makeAPICall = () => {
        //Makes call to doc API based on geolaction and form data.
        const key = process.env.REACT_APP_SECRET_CODE;
        const formData = this.state.formData;
        const coordinates = this.state.location;
        console.log(formData);
        fetch(
            `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${
                formData.specialty
            }&location=${coordinates},15&limit=30&user_key=${key}`
        )
            .then((res) => res.json())
            .then((result) => {
                const doctors = result.data;
                sessionStorage.setItem('doctors', JSON.stringify(doctors));
                this.setState({ results: doctors });
            });
    };

    render() {
        const { results, formData } = this.state;
        return (
            <div className="container-fluid">
                <div className="form-container">
                    <h2 className="form-heading mb-3">Find a Doctor</h2>
                    <Form
                        onSubmit={this.handleSubmit}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="results-container">
                    <Results result={results} formData={formData} />
                </div>
            </div>
        );
    }
}

export default Doctors;
