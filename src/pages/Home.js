import React from 'react'
import { Member } from './Member'


export const Home = ({ ...props}) => {
    const {name, created} = props;

    return (
        <div className='Card'>
            <h1><strong>Name</strong>: {name}</h1>
            <p><strong>Created</strong>: {created}</p>
        </div>
    )
}