import React from 'react';
import GhentParkingsContextProvider from '../provider/GhentParkingsContextProvider';
import { Header } from './Header';
import Parkingtable from './Parkingtable';
import {Switch, Route} from 'react-router-dom';
import ParkingInfo from './ParkingInfo';

const App = () => {
    return (
        <GhentParkingsContextProvider>
            <div className='container'>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Parkingtable}/>
                    <Route path='/parking/:parkingId' component={ParkingInfo}/>
                </Switch>
            </div>
        </GhentParkingsContextProvider>
    )
}


export default App;
