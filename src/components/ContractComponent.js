import React, { useContext, useEffect, useState } from "react";

import ContractContext from './../contexts/ContractContext';

function ContractChoice(props) {
  
  const {contractName, updateContractName, methodName, updateMethodName} = useContext(ContractContext);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    updateContractName(value);
    fetch("http://localhost:8080/api/v1/contracts/"+ value)
    .then(res => res.json())
    .then(
      (result) => {
        updateMethodName(result[0].name);
        setInputs(result[0].inputs[0].type);
        setOutputs(result[0].outputs[0].type);
      },
      (error) => {
        updateMethodName("erreur");
        setInputs("erreur");
        setOutputs("erreur");
        setError(error);
      }
    )
  }

  const [inputs, setInputs] = useState("choisir contrat");
  const [outputs,setOutputs] = useState("choisir contrat");
  const [error,setError] = useState(null);

  const myTitle = {
    borderBottom: "solid",
  }

  const mySelect = {
    width: "100%",
    marginBottom: "5px"
  }

  return (
  <div>
    <div style={myTitle}>
      <center><h3>{contractName}</h3></center>
    </div>
    <div>
      <p><strong><u>Méthode disponible:</u></strong> {methodName} </p>
      <p><strong><u>type de l'input:</u></strong> {inputs}</p>
      <p><strong><u>type de l'output:</u></strong> {outputs}</p>
    </div>
      <select name="contractName" defaultValue={contractName} onChange={handleChange} style={mySelect}>
        {props.choices.map(name =>(
            <option value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
}

function ContractInformation(props) {
  return (
    <div>
      <div>
        <ContractChoice choices={props.choices} contractName={props.contractName} updateContractName={props.updateContractName}/>
      </div>
    </div>
  );
}

export function ContractComponent() {

  const [contractName, setContractname] = useState("BubbleSort");
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [names, setNames] = useState([]);

  useEffect(()=>{
      fetch("http://localhost:8080/api/v1/contracts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setNames(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
  }, [])

  const style ={
    border: "solid",
    borderRadius : "10px"
  }

  if(error){
      return <div style={style}>Erreur : Problème de communication avec le serveur {error.message}</div>
  }else if (!isLoaded){
      return <div>Chargement...</div>
  }else{
    return (
        <div style={style}>
          <ContractInformation choices={names} contractName={contractName} updateContractName={setContractname}/>
        </div>
    );
  }
}

