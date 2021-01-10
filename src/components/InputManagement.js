import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap'; 
import ContractContext from '../contexts/ContractContext';
import './../styles/InputManager.css';

export function InputManagement(props){
 
    const [taille,setTaille] = useState(1);
    const [step,setStep] = useState(1);
    const [execution,setExecution] = useState(1);
    const [executionName, setExecutionName] = useState("");

    const [myTasks,setTasks] = useState([]);

    const [executionNames, setExecutionNames] = useState({});

    const contractValues = useContext(ContractContext);

    const handleInput = (event) =>{
        const target = event.target;
        if(target.name === "taille"){
            setTaille(target.value);
        }else if(target.name === "step"){
            setStep(target.value);
        }else if(target.name === "name"){
            setExecutionName(target.value);
        }else{
            setExecution(target.value);
        }
    }

    const handleChange = (event) => {
        const target = event.target.value;
        const res = target.split(",");
        
        if(res[1] === "SUCCEEDED"){
            fetch("http://localhost:8080/api/v1/tasks/" + res[0])
                .then((res) => res.json())
                .then((result) => {
                    let gasTab = [];
                    let data = [];
                    let tmp = parseInt(taille,10);
                    let myStep = parseInt(step,10);
                    for(let i=0; i<result.results.results.length; i++){
                        gasTab.push(result.results.results[i]["gas"])
                    }
                    for(let i=0; i<result.results.results.length; i++){
                        data.push({
                            x : tmp,
                            y : gasTab[i]
                        });
                        tmp += myStep;
                    }
                    console.log(data);
                    props.updateData(data)
                })
                .catch((error) =>{
                    alert("Erreur données");
                });
        }else{
            alert("Execution non valide ! vérifier l'état");
        }
    }

    const reload = () => {
        fetch("http://localhost:8080/api/v1/tasks")
            .then((res) => res.json())
            .then((result) => {
                setTasks(result);
            })
            .catch((error)=>{
                alert("Erreur récupération des executions");
                console.log(error.message);
            });
    }

    const handleSubmit = () => {
        
        const url = 
            'http://localhost:8080/api/v1/contracts/'+ contractValues.contractName +
            '/'+ contractValues.methodName + '/execute';

        let data;
        if(contractValues.contractName.toLowerCase().includes("sort")){
            data = {
                "config": [
                    {
                        "type" : "list",
                        "increaseStep": step,
                        "initialSize": taille,
                        "argIndex": 0
                    }
                ],
                "executionTimes": execution,
            }
        }
        else{
            data = {
                "config": [
                    {
                        "type" : "bignatural",
                        "increaseStep": step,
                        "initialValue": taille,
                        "argIndex": 0
                    }
                ],
                "executionTimes": execution,
            }
        }
        
        const headers = {
            'accept': '*/*',
            'Content-Type': 'application/json'
        }
        
        axios.post(url,data,{
            headers:headers
        }).then((response) => { 
            let uuid = response.data.uuid;
            let elems = executionNames;
            elems[uuid] = executionName;
            setExecutionNames(elems);
            console.log(elems);
        }).catch((error) => {
            console.log(error);
        })

        reload();
        
    }

    const style = {
        border: "solid",
            borderRadius : "10px"
    }

    const mySelect = {
        width:"100%",
        marginBottom: "5px" 
    }

    return(
        <div style={style}>
            <div>
                <center><h3>Configuration inputs</h3></center>
            </div>
            <div className="myInputs">
                <input onChange={handleInput} name="taille" type="number" placeholder="insérer la taille d'un input: " min="0"></input>
                <input onChange={handleInput} name="step" type="number" placeholder="indiquer le pas: " min="1"></input>
                <input onChange={handleInput} name="execution" type="number" placeholder="Nombre d'éxécution" min="1"></input>
                <input onChange={handleInput} name="name" type="text" placeholder="Nom de mon execution"></input>
                <Button variant="secondary" onClick={handleSubmit}> Executer</Button>
                <Button variant="secondary" onClick={reload}>Recharger contrats</Button>
            </div>
            <div>
                <select name="name" onChange={handleChange} style={mySelect}>
                    <option value ="">--Choisir mon contrat--</option>
                        {myTasks.map(task =>(
                            <option  value={[Object.keys(task)[0],task[Object.keys(task)[0]]]}>nom: "{executionNames[Object.keys(task)[0]]}" état: {task[Object.keys(task)[0]]}</option>
                        ))}
                </select>
            </div>
        </div>
    )
}