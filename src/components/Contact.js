import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({address, contactinfo}) => {
    return (
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <ul>
            <li>Address: {address}</li>
            <li>{contactinfo}</li>
        </ul>
    </div>
    )
}

Contact.propTypes = {
    address: PropTypes.string,
    contactinfo: PropTypes.string
}

export default Contact
