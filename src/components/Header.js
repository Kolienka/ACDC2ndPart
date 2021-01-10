import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends React.Component{

    render(){
        const style = {
            backgroundColor : "#716B94",
        }
        return(
            <Navbar bg="#716B94" style={style}>
                <h1 class = "mx-auto">Smart Contracts performances </h1>
            </Navbar>
        );
    }
}