import React, { Component } from 'react';

class DoctorDetails extends Component {
    state = {
        results: [],
        doctor: {}
    };

    componentDidMount() {
        const index = this.props.match.params.id;
        let doctors = sessionStorage.getItem('doctors');
        doctors = JSON.parse(doctors);
        const doctor = doctors[index];
        this.setState({ doctor: doctor });
        console.log(doctor);
    }

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        console.log(this.state.doctor.profile);
        const { doctor } = this.state;
        if (doctor.profile) {
            return (
                <div className="detail-container pt-4">
                    <div className="container">
                        <div className="detail-info mt-5">
                            <img src={doctor.profile.image_url} alt="" />
                            <h1 className="mt-3">{`${
                                doctor.profile.first_name
                            } ${doctor.profile.last_name}, ${
                                doctor.profile.title
                            }`}</h1>
                            <h4 className="mb-5">
                                {this.capitalize(doctor.specialties[0].uid)}
                            </h4>
                            <div className="body text-left">
                                <h4>Professional Bio</h4>
                                <p>{doctor.profile.bio}</p>
                                <h4>Practice Name</h4>

                                <p>{doctor.practices[0].name}</p>
                                <p>
                                    {doctor.practices[0].visit_address.street}{' '}
                                    <br />
                                    {`${
                                        doctor.practices[0].visit_address.city
                                    }, ${
                                        doctor.practices[0].visit_address.state
                                    } ${doctor.practices[0].visit_address.zip}`}
                                </p>
                                <h4>Languages Spoken</h4>
                                <p>
                                    {doctor.profile.languages.map(
                                        (lan, index) => (
                                            <span key={index}>{lan.name}</span>
                                        )
                                    )}
                                </p>
                                <h4>Insurance Accepted</h4>
                                <ul className="list-Columns">
                                    {doctor.insurances.map(
                                        (insurance, index) => (
                                            <li key={index}>
                                                {insurance.insurance_plan.name}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
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
