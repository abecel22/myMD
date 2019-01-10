import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cards extends Component {
    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        return (
            <div>
                {this.props.results.map((result, index) => (
                    <div className="card mb-3" key={result.uid}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-2">
                                    <img
                                        src={result.profile.image_url}
                                        alt=""
                                    />
                                </div>
                                <div className="col-5">
                                    <h5 className="card-title">{`${
                                        result.profile.first_name
                                    } ${result.profile.last_name}`}</h5>
                                    <h6 className="card-subtitle text-muted">
                                        {this.capitalize(
                                            result.specialties[0].uid
                                        )}
                                    </h6>
                                    <p className="pt-3">
                                        {result.profile.bio.slice(0, 75) +
                                            '...'}
                                        <Link to={`/doctorDetails/${index}`}>
                                            read more
                                        </Link>
                                    </p>
                                </div>
                                <div className="col-5">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            {result.practices[0].name}
                                        </li>
                                        <li className="list-group-item">
                                            {`${
                                                result.practices[0]
                                                    .visit_address.street
                                            }
                                            
                                            ${
                                                result.practices[0]
                                                    .visit_address.city
                                            }, ${
                                                result.practices[0]
                                                    .visit_address.state_long
                                            } ${
                                                result.practices[0]
                                                    .visit_address.zip
                                            }`}
                                        </li>
                                        <li className="list-group-item">
                                            Phone:
                                            {' ' +
                                                result.practices[0].phones[0]
                                                    .number}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Cards;
