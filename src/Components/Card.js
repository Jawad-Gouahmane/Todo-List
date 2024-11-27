import React, { useRef, useState } from "react";

const Card = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value.trim();

    if (!text) {
      alert("Veuillez entrer une tâche valide.");
      return;
    }

    const newItem = { complited: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].complited = !newTodos[index].complited;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
        <h1> Your To do list</h1>
      <h2 className="card-title">Add Your Task</h2>
      <div className="input-container">
        
        <input type="text" ref={inputRef} placeholder="Enter task" />
        <button onClick={handleAddTodo} className="add-btn">Add</button>
      </div>

      <div className="tasks-container">
        {todos.map(({ text, complited }, index) => (
          <div key={index} className={`task-card ${complited ? "done" : ""}`}>
            <p
              onClick={() => handleItemDone(index)}
              className="task-text"
            >
              {text}
            </p>
            <button
              onClick={() => handleDeleteItem(index)}
              className="delete-btn"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
