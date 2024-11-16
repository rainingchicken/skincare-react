import { useState } from "react";
import Skincare from "./components/Skincare";
import Form from "./components/Form";

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
      <Skincare skincareSteps={skincareSteps} />
    </>
  );
}

export default App;
