import React from "react"

const Member = ({ ...props}) => {
    const {id, name, image, gender} = props;

    return (
           <div className='Card'>
            <img
                className='Card--image'
                src={image}
                alt={id}
            />
            
            <div className='Card--details'>
                <h3>{name}</h3>
                <p>Member ID: {id}</p>
                <p>Gender: {gender}</p>
            </div>
        </div>
    )
}

export default Member;