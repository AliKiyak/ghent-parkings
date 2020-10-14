import React, {createContext, useState, useEffect} from 'react';

export const GhentParkingsContext = createContext();

const GhentParkingsContextProvider = props => {





    const [parkings, setParkings] = useState([]);
    const [parkedParking, setParkedGarage] = useState(null);

    useEffect(() => {
        fetch('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=description')
        .then(result => result.json())
        .then(result => {
            console.log('Unfiltered results of the API request.', result.records);
            const apiParkings = result.records.map(apiParking => {
                return apiParking.fields;
            })
            console.log('Information about the parkings after filtering the API request.', apiParkings);
    
            setParkings(apiParkings);
    
        })
    }, [])

    const parkAtParking = (id) => {
        // const chosenParking = parkings.find(parking => parking.id == id);
        // setParkedGarage(chosenParking);

        const chosenParkingIndex = parkings.findIndex(parking => parking.id === id);
        setParkedGarage(parkings[chosenParkingIndex]);

        const updatedParkings = [...parkings];
        updatedParkings[chosenParkingIndex].availablecapacity -= 1;
        setParkings(updatedParkings);

    }

    return (
        <GhentParkingsContext.Provider value={{parkings, parkAtParking, parkedParking}}>
            {props.children}
        </GhentParkingsContext.Provider>
    )
}

export default GhentParkingsContextProvider;