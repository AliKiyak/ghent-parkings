import React from 'react';
import PropTypes from 'prop-types';

const Openingtimes = ({openingtimes}) => {
    return (
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <ul>
                {openingtimes.days.map((day, i) => {
                    return <li key={i}>{day} from {openingtimes.from} to {openingtimes.to}</li>
                })}
            </ul>
        </div>
    )
}

Openingtimes.propTypes = {
    openingtimes: PropTypes.shape({
        days: PropTypes.array,
        from: PropTypes.string,
        to: PropTypes.string
    }),
};

export default Openingtimes
