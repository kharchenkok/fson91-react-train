import React, { Component } from 'react';

export default class CreateTodoForm extends Component {
  state = {
    title: '',
    description: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit event', event);
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
    console.log('handleChange event.target.value', value);
  };
  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">
            Todo title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleInputTitle"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">
            Todo Description
          </label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="exampleInputDescription"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Create
        </button>
      </form>
    );
  }
}
