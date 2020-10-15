import React, {useContext} from 'react';
import { GhentParkingsContext } from '../context/GhentParkingsContext';
import ParkingtableItem from './ParkingtableItem';

const Parkingtable = () => {
    const {parkings} = useContext(GhentParkingsContext);

    return (
        <div className='row mt-3'>
            <div className='col-12'>
                <table className='table table-bordered h-100'>
                    <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Capacity</th>
                        <th scope='col' className='w-25'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {parkings.map(parking => {
                        return <ParkingtableItem parking={parking} key={parking.id}/>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Parkingtable
