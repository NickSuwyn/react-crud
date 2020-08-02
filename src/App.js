import React, { Component } from 'react';
import './App.css';
import { HousesList } from './Components/HousesList';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <HousesList props={{ test: 'data' }} />
            </div>
        );
    }
}

export default App;
