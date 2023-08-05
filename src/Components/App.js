import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Item from './Item';
import Error from './Error';

const App = () => {
    return(
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/item/:id' element={<Item />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

export default App;