
import '../styles/app.scss';
import React from "react";
import ReactDom from 'react-dom';
import App from "./components/App";

ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);


