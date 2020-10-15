import React, {useContext} from 'react'
import { Link, useParams } from 'react-router-dom';
import { GhentParkingsContext } from '../context/GhentParkingsContext'
import Contact from './Contact';
import Openingtimes from './Openingtimes';

const ParkingInfo = (props) => {

    const {parkings} = useContext(GhentParkingsContext);
    const {parkingId} = useParams()

    const chosenParking = parkings.find(parking => parseInt(parking.id) === parseInt(parkingId));
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
