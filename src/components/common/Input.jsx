/**
 * Input component for rendering plain input with type provided (By default text)
 */


import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...rest} className="form-control" />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
