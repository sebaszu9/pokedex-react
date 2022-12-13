import React, { useEffect, useState } from 'react'
import './../App.css';

export const CardPokedex = ({ item }) => {

    return (
        <div>
            <div className="card mb-3 mt-3">
                <div className="face front">
                    <img src={ item.sprites.front_default } alt="..." />
                    <h3>{ item.name }</h3>
                </div>
                <div className="face back">
                    <h3>{ item.name }</h3>
                    {/* <ul>
                        <li>
                            {item.stats}
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}
