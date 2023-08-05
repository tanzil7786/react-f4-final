import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from 'react-redux';
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));