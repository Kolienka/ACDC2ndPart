import React, { useContext } from 'react';
import ContractContext from '../contexts/ContractContext';

export class SmartContractChose extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value: null,
            names : [],
            isLoaded: false,
            error: null
        }

        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(){
        fetch("http://localhost:8080/api/v1/contracts?classNames=false")
            .then(res => res.json())
            .then(
                (result) => {
                  this.setState({
                    isLoaded: true,
                    names: result
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

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    

    render(props){

        const {contractName, updateContractName} = useContext(ContractContext);

        const handleChange = event =>{
            const value = event.currentTarget.value;
            props.updateName(value);
        }
        const {error, isLoaded, names } = this.state;
        if(error){
            return (
                <div> Erreur chargement nom des smart contracts: {error.message}</div>
            )
        }else if(!isLoaded){
            return <div>Chargement...</div>
        }else{
            return(
                <div>
                    <select name="name" value={contractName} onChange={handleChange}>
                        {names.map(name =>(
                            <option value={name}>{name}</option>
                        ))}
                    </select>
                </div>
            )
        }
    }
}