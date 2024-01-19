import React, { useState, useEffect, useRef } from "react";

//recebe os valores da lista de tarefas
function Todoform(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  //evita que sempre que apertar no botão ele recarregue a pagina
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        ></input>
        <button className="btn-todo"> adicionar tarefa</button>
      </form>
    </div>
  );
}

export default Todoform;
