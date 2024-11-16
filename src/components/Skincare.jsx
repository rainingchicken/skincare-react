import React, { useContext } from "react";
import Display from "./Display";
import skincareContext from "../context/createContext";

//component 3
const Skincare = () => {
  const skincareSteps = useContext(skincareContext);
  return (
    <div>
      {skincareSteps &&
        skincareSteps.map((step) => (
          <Display key={step.id} step={step.skincareStep} />
        ))}
    </div>
  );
};

export default Skincare;
