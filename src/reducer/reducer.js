//usestate
//const [varaible, setter] = useState(initialSkincareSteps)
//setter => {
//   varaible = newValue
// }
export const initialSkincareSteps = [];

//action is whatever the user is doing
const reducer = (skincareSteps, action) => {
  switch (action.type) {
    //fn handleAdd
    case "ADD":
      return [...skincareSteps, action.payload];
    case "BANANA":
      return ["Bruh"];
    case "EDIT":
      return;
    default:
      return skincareSteps;
  }
};

export default reducer;
