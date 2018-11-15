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

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        console.log(this.state.results.profile);
        const { results } = this.state;
        if (results.profile) {
            return (
                <div className="container">
                    <img
                        className="mt-3"
                        src={results.profile.image_url}
                        alt=""
                    />
                    <h1 className="mt-3">{`${results.profile.first_name} ${
                        results.profile.last_name
                    }, ${results.profile.title}`}</h1>
                    <h4 className="mb-3">
                        {this.capitalize(results.specialties[0].uid)}
                    </h4>
                    <div className="body text-left">
                        <h4>Professional Bio</h4>
                        <p>{results.profile.bio}</p>
                        <h4>Insurance Accepted</h4>
                        <ul>
                            {results.insurances.map((insurance) => (
                                <li>{insurance.insurance_plan.name}</li>
                            ))}
                        </ul>
                    </div>
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
