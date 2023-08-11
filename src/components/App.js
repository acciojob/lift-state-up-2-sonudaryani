

import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <ParentComponent />
    </div>
  )
}

const ParentComponent = () => {

  let [inputValue, setInputValue] = useState("")
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      {inputValue ? <p>{inputValue}</p> : null}
      <ChildComponent inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  )
}

const ChildComponent = ( {inputValue, setInputValue}) => {

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <div className="child">
      <h1>Child Component</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  )
}

export default App;
