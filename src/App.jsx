import { useState } from "react";
import Skincare from "./components/Skincare";
import Form from "./components/Form";
import { Component1 } from "./components/Component1";
import skincareContext from "./context/createContext";

function App() {
  const [skincareSteps, setSkincareSteps] = useState([]);

  //add fn
  const handleAdd = (newItem) => {
    setSkincareSteps([...skincareSteps, newItem]);
    console.log(skincareSteps);
  };

  return (
    <>
      <Form handleAdd={handleAdd} />
      {/* {make skincareSteps available to use in any children of component1} */}
      <skincareContext.Provider value={skincareSteps}>
        <Component1 />
      </skincareContext.Provider>
    </>
  );
}

export default App;
