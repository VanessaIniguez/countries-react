import React from 'react';
import './Countrie.css';

const Countrie = () => {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src="https://restcountries.eu/data/deu.svg" alt=""/>
            </div>
            <div className="card-text">
                <h4>Germany</h4>
                <div className="card-description">
                    <p>
                        Population: <span>81,700.900</span>
                    </p>
                    <p>
                        Region: <span>Europe</span>
                    </p>
                    <p>
                        Capital: <span>Berlin</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Countrie;
