import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div>
                {this.props.results.map((result) => (
                    <div className="card mb-3" key={result.uid}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm">
                                    <img
                                        src={result.profile.image_url}
                                        alt=""
                                    />
                                </div>
                                <div className="col-sm">
                                    <h5 className="card-title">{`${
                                        result.profile.first_name
                                    } ${result.profile.last_name}`}</h5>
                                    <h6 className="card-subtitle text-muted">
                                        {result.specialties[0].uid}
                                    </h6>
                                    <p>
                                        {result.profile.bio.slice(0, 40)}{' '}
                                        <a href="/">Read more..</a>
                                    </p>
                                </div>
                                <div className="col-sm">
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
