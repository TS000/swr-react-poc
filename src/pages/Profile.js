import React from "react";
import { Member } from "../components/Member";

export const Profile = ({ ...props }) => {
  const { id, name, image, gender } = props;
  return <Member id={id} name={name} image={image} gender={gender} />;
};
