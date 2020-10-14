import React from 'react'

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

export default Openingtimes
