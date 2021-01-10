import React from "react";

export default React.createContext({
    contractName: "",
    updateContractName: name => {},
    methodName: "",
    updateMethodName: name => {}
});