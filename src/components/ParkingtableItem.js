import React from 'react';
import PropTypes from 'prop-types';

const ParkingtableItem = ({parking}) => {
    return (
        <tr>
            <td>{parking.name}</td>
            <td>{parking.address}</td>
            <td>{parking.availablecapacity} / {parking.totalcapacity}</td>
            <td>
                <button className='btn btn-success'>
                    Park Here
                </button>
            </td>
        </tr>
    )
}

ParkingtableItem.propTypes = {
    parking: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        totalcapacity: PropTypes.number,
        availablecapacity: PropTypes.number
    })
}

export default ParkingtableItem

