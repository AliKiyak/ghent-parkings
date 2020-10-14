import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { GhentParkingsContext } from '../context/GhentParkingsContext';

const ParkingtableItem = ({parking}) => {

    const {parkAtParking, parkedParking, leaveParking} = useContext(GhentParkingsContext);

    let parkButton;

    if (parking.availablecapacity > 0) {
        if (parkedParking === null) {
            parkButton = <button className='btn btn-success' onClick={() =>  parkAtParking(parking.id)}>Park Here</button>
        } else if (parkedParking !== null && parkedParking.id === parking.id) {
            parkButton = <button className='btn btn-danger' onClick={() =>  leaveParking(parking.id)}>Leave parking</button>
        } 
    }

    return (
        <tr>
            <td>{parking.name}</td>
            <td>{parking.address}</td>
            <td>{parking.availablecapacity} / {parking.totalcapacity}</td>
            <td>
                {parkButton}
            </td>
        </tr>
    )
}

ParkingtableItem.propTypes = {
    parking: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        address: PropTypes.string,
        totalcapacity: PropTypes.number,
        availablecapacity: PropTypes.number
    })
}

export default ParkingtableItem

