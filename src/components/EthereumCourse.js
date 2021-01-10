import React from 'react';

import etherum_logo from './../ressources/img/etherum_logo.png';
import euro_logo from './../ressources/img/euro_logo.png';
import './../App.css'

export class EthereumCourse extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            eurValue: 0,
            error: null
        }
    }

    componentDidMount(){
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd,eur&include_24hr_change=true")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        eurValue: result.ethereum.eur
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(){
        const {eurValue, isLoaded, error} = this.state;
        const style = {
            border: "solid",
            borderRadius : "10px"
        }
        const euro_value = {
            backgroundColor: "#FDEA63",
            margin: 0,
            padding: 0,
            borderTop: "solid",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px"
            
        }
        const eth_value = {
            backgroundColor: "#BBA8FF",
            borderBottom: "solid",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            margin: 0,
            padding: 0,
        }



        if(error){
            return(
                <div>
                    <div>
                        <h3>1 ethereum équivaut à</h3>
                    </div>
                    <div>
                        <h3>Erreur recupération API coingecko: {error.message}</h3>
                    </div>
                </div>  
            ) 
        }else if(!isLoaded){
            return(
                <div>
                    <div>
                        <h2>1 ethereum équivaut à</h2>
                    </div>
                    <div>
                        <h2>Chargement...</h2>
                    </div>
                </div>  
            ) 
        }else{
            return(
                <div style={style}>
                    <div style={eth_value}>
                        <center><img src={etherum_logo} width="64px" height="64px"></img></center>
                       <center><h3>1 ethereum</h3></center>
                    </div>
                    <div>
                        <center><h3>équivaut à</h3></center>
                    </div>
                    <div style={euro_value}>
                        <center><h3>{eurValue} euros</h3></center>
                        <center><img src={euro_logo} width="44px" height="44px"></img></center>
                    </div>
                </div>            
            )
        }
    }

}