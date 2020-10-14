import React from 'react'

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

export default Contact
