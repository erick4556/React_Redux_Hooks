import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoAction } from "../redux/actions";

const List = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            {todo.name} {todo.complete && "🚀"}
          </p>
          <button onClick={() => dispatch(deleteTodoAction(todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
