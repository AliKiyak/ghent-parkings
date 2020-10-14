import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById("root")
);