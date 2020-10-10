import React from 'react'
import { Member } from './Member'


export const Profile = ({ ...props}) => ( <Member id={props.id} name={props.name} image={props.image} gender={props.gender} />)