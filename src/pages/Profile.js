import React from "react";
import { Member } from "../components/Member";

export const Profile = ({ ...props }) => (
  <Member
    id={props.id}
    name={props.name}
    image={props.image}
    gender={props.gender}
  />
)
