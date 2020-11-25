import './style.css';
import React, { useEffect, useState,useRef } from 'react';


function App() {
  const fileUpload = " ";
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // function that handles push input to array
  const handleClick = event => {
    event.preventDefault();
     const value = {
      id: Math.random() + 1,
      inputObject: input
    }
    setTodos([...todos, value]);

   
    setInput(''); 
  };

  //if input is populated sets input 
  const handleOnchange = event => {
    setInput(event.target.value);
  } 
  
  //remove a given div
  const removeDiv = (id) => {
    let newArrayFiltered = todos.filter((item) => item.id != id);
    setTodos([...newArrayFiltered]);
  }


  return (
    <div className="App">
      <form>
        <input onChange={handleOnchange} value={input} type="text" placeholder="Input todo"></input>
        <button onClick={handleClick} disabled={!input}> add</button>

        {todos.map(todo => {
          return (
            <div className="todoContainer" key={todo.id}>
              <div>
                <h1 >
                {todo.inputObject}
                </h1>
              </div>
              <div>
                <button onClick={(event) => {
                  event.preventDefault();
                  removeDiv(todo.id)
                }}>Delete</button>
              </div>
           </div>
          )
        }
        )}
      </form>

    </div>

  );
}

export default App;
