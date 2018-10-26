import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div>
                {this.props.results.map((result) => (
                    <div className="card mb-3" key={result.uid}>
                        <div className="card-header">{`${
                            result.profile.first_name
                        } ${result.profile.last_name}`}</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="col-sm">
                                    <img
                                        src={result.profile.image_url}
                                        alt=""
                                    />
                                </span>
                                <span className="col-sm-12">
                                    {result.specialties > 0 &&
                                        result.specialties[0].actor}
                                </span>
                            </li>
                            <li className="list-group-item">
                                {result.profile.bio}
                            </li>

                            <li className="list-group-item">
                                <ul>
                                    <li>{result.practices[0].name}</li>
                                    <li>
                                        {
                                            result.practices[0].visit_address
                                                .street
                                        }
                                    </li>
                                    <li>
                                        {`${
                                            result.practices[0].visit_address
                                                .city
                                        }, ${
                                            result.practices[0].visit_address
                                                .state_long
                                        } ${
                                            result.practices[0].visit_address
                                                .zip
                                        }`}
                                    </li>
                                    <li>
                                        Phone:
                                        {result.practices[0].phones[0].number}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default Cards;
