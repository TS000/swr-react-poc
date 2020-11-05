import React from "react";
import Member from "../components/Member";

export const Home = ({ ...props }) => {
  const { name, id, gender, image } = props;

  if (name) {
    return <Member id={id} name={name} image={image} gender={gender} />;
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
