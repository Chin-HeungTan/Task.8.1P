import React from 'react';
import './App.css';
import Header from './Header'
import CardList from './CardList'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <
        div >
        <
        img src = { require('./images/mr-simu.jpeg') }
        alt = 'main'
        width = '100%'
        height = '800' / >

        <
        Header text = "Featured Experts"

        /
        >
        <
        CardList / >
        <
        /div>
    );
}

export default App;


// <div style={{ 
//       backgroundImage: `url("https://via.placeholder.com/500")` 
//     }}></div>