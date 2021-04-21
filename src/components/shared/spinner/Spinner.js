import { Component } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './Spinner.css';

let spnEle = document.getElementById('spinner');

class Spinner extends Component {

    render() {
        return (
            ReactDOM.createPortal(<div id="loader"></div>, spnEle)
        )
    }

       

}

export default Spinner;