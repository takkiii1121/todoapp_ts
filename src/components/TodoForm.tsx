import React, { HTMLProps, ChangeEvent } from "react";

interface Props extends HTMLProps<HTMLFormElement> {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;      //HTMLFormElementはform内の要素を表すジェネリクス
    inputValue: string
}

const TodoForm = ({onInputChange, inputValue, ...props}: Props) => {
  return (
    <form {...props}>
      <input
        className="form-control"
        placeholder="What would you like to get done?"
        onChange={onInputChange}
        value={inputValue}
      />
      <button className="btn btn-primary">Create</button>
    </form>
  );
};
export default TodoForm;