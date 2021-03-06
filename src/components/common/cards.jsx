import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cards extends Component {
  capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  formatPhoneNumber = phoneNumberString => {
    var cleaned = ("" + phoneNumberString).replace(
      /\D/g,
      ""
    );
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return (
        "(" + match[1] + ") " + match[2] + "-" + match[3]
      );
    }
    return null;
  };

  render() {
    return (
      <div>
        {this.props.results.map((result, index) => (
          <div className="card mb-3" key={result.uid}>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-2">
                  <img
                    className="card-body_img"
                    src={result.profile.image_url}
                    alt={`Dr. ${
                      result.profile.last_name
                    }'s profile`}
                  />
                </div>
                <div className="col-sm-5">
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
                      "..."}
                    <Link to={`/doctorDetails/${index}`}>
                      read more
                    </Link>
                  </p>
                </div>
                <div className="col-sm-5">
                  <ul className="list-group">
                    <li className="list-group-item">
                      {result.practices[0].name}
                    </li>
                    <li className="list-group-item">
                      {`${
                        result.practices[0].visit_address
                          .street
                      }
                                            
                                            ${
                                              result
                                                .practices[0]
                                                .visit_address
                                                .city
                                            }, ${
                        result.practices[0].visit_address
                          .state_long
                      } ${
                        result.practices[0].visit_address
                          .zip
                      }`}
                    </li>
                    <li className="list-group-item">
                      Phone:
                      {" " +
                        this.formatPhoneNumber(
                          result.practices[0].phones[0]
                            .number
                        )}
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
