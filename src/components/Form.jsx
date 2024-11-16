import React, { useState } from "react";

const Form = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ skincareStep: inputValue, id: Date.now() });
    // setInputValue(""); //reset inputValue to empty string
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" value={inputValue} onChange={onChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
