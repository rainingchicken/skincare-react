import React from "react";
import Display from "./Display";

const Skincare = ({ skincareSteps }) => {
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
