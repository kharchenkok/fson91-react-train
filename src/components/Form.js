import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    email: '',
    experience: 'junior',
    licence: false,
  };
  nameInputId = shortid.generate();
  emailInputId = shortid.generate();

  // handleNameChange = (e) => {
  //   this.setState({ name: e.currentTarget.value });
  // };
  // handleEmailChange = (e) => {
  //   this.setState({ email: e.currentTarget.value });
  // };
  handleFormChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleLicenceChange = (e) => {
    this.setState({ licence: e.currentTarget.checked });
  };
  reset = () => {
    this.setState({ name: '', email: '' });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSabmitProp(this.state);
    this.reset();
  };
  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name={'name'}
            value={name}
            onChange={this.handleFormChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.emailInputId}>
          Email
          <input
            type="email"
            value={email}
            name={'email'}
            onChange={this.handleFormChange}
            id={this.emailInputId}
          />
        </label>
        <br />
        <br />
        <br />
        <p>Your level</p>
        <label>
          <input
            type={'radio'}
            name={'experience'}
            value={'junior'}
            onChange={this.handleFormChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type={'radio'}
            name={'experience'}
            value={'middle'}
            onChange={this.handleFormChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type={'radio'}
            name={'experience'}
            value={'senior'}
            onChange={this.handleFormChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />
        <label>
          <input
            type={'checkbox'}
            name={'licence'}
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Agree
        </label>
        <br />
        <button type={'submit'} disabled={!this.state.licence}>
          Sent
        </button>
      </form>
    );
  }
}
export default Form;
