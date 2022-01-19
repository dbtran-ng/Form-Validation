import React, { Component } from 'react';
import './style.css';
import Swal from 'sweetalert2';
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
    } else {
      newError[name] = '';
    }
    if (type === 'email') {
      const regexEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        newError[name] = name + ' is invalid!';
      } else {
        newError[name] = '';
      }
    }
    if (name === 'passwordConfirm') {
      if (value === newValue['password']) {
        newError[name] = '';
      } else {
        newError[name] = name + ' is not matching with your password';
      }
    }
    this.setState({ values: newValue, errors: newError });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // Set condition for button submit
    let valid = true; // valid form
    let {values, errors} = this.state;
    let profileContent = '';
    let errorContent = '';
    for(let key in values) {
        if(values[key]===''){
            valid = false;
        }
        profileContent += `
            <p class="text-left"><b>${key}:</b> ${values[key]}</p>
        `
    }
    for(let key in errors) {
        if(errors[key]!==''){
            valid = false;
            errorContent += `
            <p><b class="text-danger">${key} is invalid!</b></p>
        `
        }
    }
    if ( !valid ){
        Swal.fire({
            title: 'Error!',
            icon: 'error', // icon: success, error, warning, question
            html: errorContent,
            confirmButtonText: 'Cool'
          })
    }
    else{
        Swal.fire({
            icon: 'success',
            title: 'Your Account has been registered',
            html: profileContent,
            showConfirmButton: false,
            timer: 1500
          })
    }
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
          onSubmit={this.handleSubmit}
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
                  value={this.state.values.passwordConfirm}
                  name="passwordConfirm"
                  type="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Password Confirm</label>
                <span className="text text-danger">
                  {this.state.errors.passwordConfirm}
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
