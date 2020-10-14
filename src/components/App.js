import React from 'react'
import GhentParkingsContextProvider from '../context/GhentParkingsContext';

import { Header } from './Header'
import Parkingtable from './Parkingtable';

const App = () => {
    return (
        <GhentParkingsContextProvider>
            <div className='container'>
                <Header/>
                <Parkingtable/>
            </div>
        </GhentParkingsContextProvider>
    )
}


export default App;
