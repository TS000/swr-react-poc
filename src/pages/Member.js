import React, { useState } from "react"

export const Member = ({ ...props}) => {
    const {id, name, image, gender} = props;

    return (
           <div className='Card'>
            <img
                className='Card--image'
                src={image}
                alt={id}
            />
            
            <span className='Card--details'>
                <h3>{name}</h3>
                <p>Member ID: {id}</p>
                <p>Gender: {gender}</p>
            </span>
        </div>
    )
}