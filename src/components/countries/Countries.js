import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../../api';

import Countrie from '../countrie/Countrie';
import Filter from '../filter/Filter';

import './Countries.css';

const Countries = () => {


    const [countries, setCountries] = useState([]);

    useEffect(() => {

        const allCountries = async() => {

            const currentCountries = await getAllCountries();
            setCountries(currentCountries);
        }

        allCountries();
        
       
    },[]);

    console.log(countries);


    
    return (
        <>
            <Filter />
            <div className="container">

                {
                    countries.map( countrie => (
                        <Countrie 
                            key={countrie.id}
                            countrie={countrie}
                        />
                    ))
                }
            
               
                
                
            </div>
        </>
        
    )
}

export default Countries;