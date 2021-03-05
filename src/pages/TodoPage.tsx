import React, { useState, useEffect } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { ITodo } from "./../interfaces";
export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "") as ITodo[];
    setTodos(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    console.log("Add new Todo", title);
    const newTodos: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodos,...todos])
    setTodos((prev) => [newTodos, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm(
      "Are you sure you want to delete the item"
    );

    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  return (
    <>
      <Form onAdd={addHandler} />
      <List todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </>
  );
};
