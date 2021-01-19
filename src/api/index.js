import axios from  'axios';

const url = 'https://restcountries.eu/rest/v2/';

export const getAllCountries = async() =>{

    const currentUrl = `${url}all`;

    try {

        const {data: countries} = await axios.get(currentUrl);
        
        const currentCountries = countries.map( countrie => (
            {
                id: countrie.alpha2Code,
                name: countrie.name,
                flag: countrie.flag,
                population: countrie.population,
                region: countrie.region,
                capital: countrie.capital
            }
        ));

        return currentCountries;

         
        
    } catch (error) {

        console.log('Error - Errow when getting all the countries ', error);
        
    }
}


export const getCountrieByRegion = async( region= 'europe') => {

    const currentUrl = `${url}region/${region}`;

    try {

        const {data} = await axios.get(currentUrl);
        return data;
        
    } catch (error) {

        console.log('Error - Error when getting countrie by region', error);
        
    }
}