import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  // REMOVE TASK FROM LIST
  const deleteItem = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  // REMOVE ALL TASKS FROM LIST
  const deleteAll = () => {
    setList([]);
  };

  // CREATE NEW TASK
  const newTask = () => {
    let input = document.getElementById("input");
    let newObject = {
      id: list.length + 1,
      content: input.value,
    };
    input.value = "";
    setList([...list, newObject]);
  };
  return (
    <div className="App">
      <h1>To-do List</h1>
      <div className="input-bar">
        <input id="input" placeholder="create new task"></input>
        <button onClick={() => newTask()}>Create</button>
      </div>
      <div className="items">
        {list.map((item) => {
          return (
            <div className="item" key={item.id}>
              <h3>{item.content}</h3>
              <button className="remove" onClick={() => deleteItem(item.id)}>
                X
              </button>
            </div>
          );
        })}
      </div>
      <button id="delete-all" onClick={() => deleteAll()}>
        Delete all
      </button>
    </div>
  );
};

export default App;
