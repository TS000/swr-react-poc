import React from 'react'


export const Member = ({ image, name, id}) => {
   
    return (
        <div className='Card'>
            <img
                className='Card--image'
                src={image}
                alt={id}
            />
            
            <span className='Card--details'>
                <h3>{name}</h3>
            </span>
        
        </div>
    )
}