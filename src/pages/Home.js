import React from "react";

export const Home = ({ ...props }) => {
  const { name, created, gender, species, status, location } = props;
  console.log(props)

  if (name) {
    return (
      <div className="Card">
        <h1>
          <strong>Name</strong>: {name}
        </h1>
        <p>
          <strong>Created</strong>: {created}
        </p>
        <p>
          <strong>Gender</strong>: {gender}
        </p>
        <p>
          <strong>Species</strong>: {species}
        </p>
        <p>
          <strong>Status</strong>: {status}
        </p>
        <p>
          <strong>Address</strong>: {location.name}
        </p>
      </div>
    );
  } else {
    return (
      <div className="Card">
        <h1>
          <strong>Please Login</strong>
        </h1>
      </div>
    );
  }
};
