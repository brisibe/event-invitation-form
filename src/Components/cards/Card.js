import React from "react";
import moment from "moment";
import PropType from "prop-types";

const Card = ({ firstName, lastName, email, phone }) => {
  return (
    <div className="card">
      <h5 className="card-header">{`${firstName} ${lastName}`}</h5>
      <div className="card-body pt-2">
        <p className="card-text text-muted mb-0">{email}</p>
        <p className="card-text text-muted">{phone}</p>
        <p className="card-text  small text-muted">{moment().calendar()}</p>
      </div>
    </div>
  );
};

Card.prototype = {
  firstName: PropType.string.isRequired,
  lastName: PropType.string.isRequired,
  email: PropType.string.isRequired,
  phone: PropType.number.isRequired,
};

export default Card;
