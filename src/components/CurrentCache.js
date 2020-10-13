import React from "react"
import cache from "swr"

export const CurrentCache = ({ ...props}) => {
    const {id, name, image, gender} = props;

    let currentCache = cache.get;

    return (

        {currentCache.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
   
    )
}