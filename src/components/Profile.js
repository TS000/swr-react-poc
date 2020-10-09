import React from 'react'
import { Member } from './Member'


export const Profile = ({ image, name, id}) => ( <Member id={id} name={name} image={image} />)