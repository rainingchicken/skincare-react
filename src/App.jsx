import { useReducer, useState } from "react";
import Form from "./components/Form";
import { Component1 } from "./components/Component1";
import skincareContext from "./context/createContext";
import reducer, { initialSkincareSteps } from "./reducer/reducer";

function App() {
  //    state, dispatch == setter
  const [skincareSteps, dispatch] = useReducer(reducer, initialSkincareSteps);

  // const [skincareSteps, setSkincareSteps] = useState([]);

  //functions

  // const handleAdd = (newItem) => {
  //   setSkincareSteps([...skincareSteps, newItem]);
  //   console.log(skincareSteps);
  // };

  // const BANANA = () => {
  //   setSkincareSteps(['bruh'])
  // }

  return (
    <>
      {/* <Form handleAdd={handleAdd} /> */}
      <Form dispatch={dispatch} />
      {/* {make skincareSteps available to use in any children of component1} */}
      <skincareContext.Provider value={skincareSteps}>
        <Component1 />
      </skincareContext.Provider>
    </>
  );
}

export default App;
