import React, { Component, Fragment } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Spinner from "./Spinner";

class Form extends Component {
  state = {
    data: {},
    errors: {},
    showSpinner: false
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const { error } = Joi.validate(obj, { [name]: this.schema[name] });
    if (!error) return null;
    return error.details[0].message;
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    data[input.name] = input.value;
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.showSpinner = true;
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        onChange={this.handleChange}
        label={label}
        value={data[name]}
        error={errors[name]}
      />
    );
  };

  renderButton = (label) => (
    <Fragment>
      <button disabled={this.validate()} className="btn btn-primary mt-2">
        {label}
      </button>
      <Spinner showSpinner={this.state.showSpinner} />
    </Fragment>
  );
}

export default Form;
