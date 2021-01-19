import React from 'react';
import './Countrie.css';

const Countrie = ({countrie}) => {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={countrie.flag} alt=""/>
            </div>
            <div className="card-text">
                <h4>{countrie.name}</h4>
                <div className="card-description">
                    <p>
                        Population: <span>{countrie.popularion}</span>
                    </p>
                    <p>
                        Region: <span>{countrie.region}</span>
                    </p>
                    <p>
                        Capital: <span>{countrie.capital}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Countrie;
