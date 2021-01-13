import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import './Filter.css';

const Filter = () => {
    return (
        <div className="filter-container">
            <div className="search-input-container">
                <IconContext.Provider value={{color: 'gray', className:"global-class-name"}}>
                    <div className="search-icon">
                        <FaSearch />
                    </div>
                </IconContext.Provider>
                <input className="search-input" type="text" placeholder="Search for a country..."/>
            </div>

            <div className="filter-dropdow-box">
            <select name="continents" id="continents" className="select">
                <option value="africa">África</option>
                <option value="américa">América</option>
                <option value="asia">Asia</option>
                <option value="europa">Europa</option>
                <option value="oceania">Oceania</option>
            </select>
            </div>
    </div>
    )
}

export default Filter;
