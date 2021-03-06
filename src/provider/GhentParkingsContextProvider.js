import {GhentParkingsContext} from '../context/GhentParkingsContext'
import React, {useState, useEffect} from 'react';

const GhentParkingsContextProvider = props => {

    const [parkings, setParkings] = useState([]);
    const [parkedParking, setParkedGarage] = useState(null);

    useEffect(() => {
        //fetch(process.env.REACT_APP_GHENT_PARKINGS_API)
        fetch('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&rows=100')
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
        const chosenParkingIndex = parkings.findIndex(parking => parking.id === id);

        setParkedGarage(parkings[chosenParkingIndex]);

        const updatedParkings = [...parkings];
        updatedParkings[chosenParkingIndex].availablecapacity -= 1;
        setParkings(updatedParkings);

    }

    const leaveParking = (id) => {
        const chosenParkingIndex = parkings.findIndex(parking => parking.id === id);

        setParkedGarage(null);

        const updatedParkings = [...parkings];
        updatedParkings[chosenParkingIndex].availablecapacity += 1;
        setParkings(updatedParkings);
    }

    return (
        <GhentParkingsContext.Provider value={{parkings, parkAtParking, parkedParking, leaveParking}}>
            {props.children}
        </GhentParkingsContext.Provider>
    )
}

export default GhentParkingsContextProvider;