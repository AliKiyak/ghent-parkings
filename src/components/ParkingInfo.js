import { string } from 'prop-types';
import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { GhentParkingsContext } from '../context/GhentParkingsContext'
import Contact from './Contact';
import Openingtimes from './Openingtimes';

const ParkingInfo = (props) => {

    const {parkings} = useContext(GhentParkingsContext);
    const chosenParking = parkings.find(parking => parseInt(parking.id) === parseInt(props.match.params.parkingId));
    console.log('The parking with the extra information being shown on the screen: ', chosenParking);

    const openingTimes = JSON.parse(chosenParking.openingtimes)[0];
    console.log('Openingtimes: ', openingTimes)

    return (
        <div className='row'>
            <Openingtimes openingtimes={openingTimes} />
            <Contact address={chosenParking.address} contactinfo={chosenParking.contactinfo}/>
            <Link exact to='/'>← Go back</Link>
        </div>
    )
}

export default ParkingInfo
