import React from 'react'
import { Member } from './Member'


export const Profile = ({ image, name, id, gender}) => ( <Member id={id} name={name} image={image} gender={gender} />)