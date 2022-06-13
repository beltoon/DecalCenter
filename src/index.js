import React from 'react';
import ReactDom from "react-dom";
import { Router} from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContext from "./context/AuthContext";

const customHistory = createBrowserHistory();

ReactDom.render(
    <React.StrictMode>
        <AuthContext>
            <Router history={customHistory}>
                <App/>
            </Router>
        </AuthContext>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
