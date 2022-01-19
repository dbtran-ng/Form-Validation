import React, { Component } from 'react';
import './style.css';
export default class UserProfile extends Component {
  state = {
    values: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    errors: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;
    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.errors };
    if (value.trim() === '') {
      newError[name] = name + ' is required!';
    }
    if (type === 'email') {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regexEmail.test(value)){
            newError[name] = name + ' is invalid!';
        } else{
            newError[name] = '';
        }
    }
    if (name === 'passwordConfirm') {
        if(value === newValue['password']){
            newError[name] ='';
        }
        else {
            newError[name] = name + ' is not matching with your password';
        }
    }
    this.setState({ values: newValue, errors: newError });
  };
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <form
          style={{
            fontSize:
              'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
            width: 600,
          }}
          className=" bg-white p-5 m-5"
        >
          <h1 className="text-center mt-0 mb-5">User Profile</h1>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.firstName}
                  type="text"
                  name="firstName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>First Name</label>
                <span className="text text-danger">
                  {this.state.errors.firstName}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.lastName}
                  type="text"
                  name="lastName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Last Name</label>
                <span className="text text-danger">
                  {this.state.errors.lastName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.username}
                  type="text"
                  name="username"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Username</label>
                <span className="text text-danger">
                  {this.state.errors.username}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.email}
                  type="email"
                  name="email"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
                <span className="text text-danger">
                  {this.state.errors.email}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.password}
                  type="password"
                  name="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Password</label>
                <span className="text text-danger">
                  {this.state.errors.password}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passWordConfirm}
                  name="passwordConfirm"
                  type="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Password Confirm</label>
                <span className="text text-danger">
                  {this.state.errors.passWordConfirm}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <button
              className="btn text-white bg-dark w-100 col-12"
              style={{ fontSize: 25 }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
