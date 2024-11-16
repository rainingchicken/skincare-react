import { useReducer } from "react";

export const initialSkincareSteps = [
  // {
  //   skincareStep: "",
  //   id: "",
  // },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(state);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
