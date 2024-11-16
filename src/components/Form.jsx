import React, { useState } from "react";

const Form = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ skincareStep: inputValue, id: Date.now() });
    setInputValue("");
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" onChange={onChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
