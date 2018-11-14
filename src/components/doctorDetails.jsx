import React, { Component } from 'react';

class DoctorDetails extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        const docId = this.props.match.params.id;
        const key = process.env.REACT_APP_SECRET_CODE;

        fetch(
            `https://api.betterdoctor.com/2016-03-01/doctors/${docId}?user_key=${key}`
        )
            .then((res) => res.json())
            .then((result) => {
                const results = result.data;
                console.log(results);
                this.setState({ results: results });
            });
    }

    render() {
        console.log(this.state.results.profile);
        const { results } = this.state;
        if (results.profile) {
            return (
                <div className="container">
                    <h1>Doctor Search Results</h1>
                    <h3>{results.profile.first_name}</h3>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <h1>Loading....</h1>
                </div>
            );
        }
    }
}

export default DoctorDetails;
