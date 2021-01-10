import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';
import React, {useState} from 'react';

import {ContractComponent} from './components/ContractComponent';
import {Header} from './components/Header';
import {EthereumCourse} from './components/EthereumCourse';
import './App.css';

import ContractContext from './contexts/ContractContext';
import { InputManagement } from './components/InputManagement';
import { ScatterChart } from './components/ScatterChart';
import { Footer } from './components/Footer';
import { Row, Col, Container } from 'react-bootstrap';

const App = () => {

  const [contractName, setContractname] = useState("Choisir un contrat");
  const [methodName, setMethodName] = useState("Choisir un contrat");
  const [data,setData] = useState([]);

  const contextContractValue = {
    contractName,
    updateContractName: setContractname,
    methodName,
    updateMethodName: setMethodName
  }

  const myMargin = {
    marginTop: "2px",
  }

  return (
    <div>
      <Header/>
        <Container style={myMargin}>
          <Row>
            <ContractContext.Provider value={contextContractValue}>
              <Col><ContractComponent className="styleElem"/></Col>
              <Col><InputManagement className="styleElem" data={data} updateData={setData}/></Col>
            </ContractContext.Provider>
            <Col><EthereumCourse className="styleElem"/></Col>
        </Row>
        </Container>
      <ScatterChart data={data} updateData={setData}/>
      <Footer/>
    </div>
  )
}
export default App;
