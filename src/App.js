import './App.css';
import React, { useEffect, useState,useRef } from 'react';


function App() {
  const fileUpload = " ";
  const [number, setNumber] = useState(0);
  const [container, setContainer] = useState([]);
  const [input, setInput] = useState("");
  const handleClick = event => {
    event.preventDefault();
     const value = {
      id: Math.random() + 1,
      inputObject: input
    }
    setContainer([...container, value]);

   
    setInput(''); 
  };

  const uploadedFile = event =>
  {
    fileUpload = event.target.files;
  }

  useEffect(() => { 
  console.log("hello");
  
},[number]);
  return (
    <div className="App">
      <form>
        <input type="file" name="filename" ref= {fileUpload }></input>
        <input type="submit " onChange={uploadedFile}></input>
      </form>

      {console.log(fileUpload.files)}
    </div>

  );
}

export default App;
