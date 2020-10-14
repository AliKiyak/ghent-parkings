import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { GhentParkingsContext } from '../context/GhentParkingsContext';

const ParkingtableItem = ({parking}) => {

    const {parkAtParking, parkedParking} = useContext(GhentParkingsContext);

    return (
        <tr>
            <td>{parking.name}</td>
            <td>{parking.address}</td>
            <td>{parking.availablecapacity} / {parking.totalcapacity}</td>
            <td>
                <button className='btn btn-success' onClick={() =>  parkAtParking(parking.id)}>
                    Park Here
                </button>
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

