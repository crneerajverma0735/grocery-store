import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Register() {
  return (
    <LoginStyle>
      <div>
        <div className='login_background d-flex justify-content-center align-items-center'>
          <form className='login_form'>
            <div className='form-group text-center text-light mb-5'>
              <div>
                <h2>Register your account</h2>
                <div className='underLine mx-auto'></div>
              </div>
            </div>
            <div className='form-group'>
              <div className='icon'>
                <i className='fas fa-user' aria-hidden='true'></i>
              </div>
              <input
                type='text'
                className='form-control'
                aria-describedby='emailHelp'
                placeholder='Name'
              />
            </div>

            <div className='form-group'>
              <div className='icon'>
                <i class='fas fa-envelope-square'></i>
              </div>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
              />
            </div>

            <div className='form-group'>
              <div className='icon'>
                <i className='fas fa-unlock-alt'></i>
              </div>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
              />
            </div>

            <div className='form-group'>
              <div className='icon'>
                <i className='fas fa-unlock-alt'></i>
              </div>
              <input
                type='password'
                className='form-control'
                placeholder='Confirm Password'
              />
            </div>

            <div className='form-group'>
              <div className='icon'>
                <i class='fas fa-address-card'></i>
              </div>
              <input
                type='text'
                className='form-control'
                placeholder='Address'
              />
            </div>

            <div className='form-group'>
              <div className='icon'>
                <i class='fas fa-mobile-alt'></i>
              </div>
              <input
                type='number'
                className='form-control'
                placeholder='Mobile'
              />
            </div>

            <div className='form-group'>
              <div className='icon'>
                <i className='fas fa-sign-in-alt'></i>
              </div>
              <button type='submit' className='btn btn-primary bg-light'>
                Register
              </button>
            </div>

            <div className='form-group'>
              <span>
                Already have an account?{" "}
                <Link
                  to='/login'
                  className='register'
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Sign in
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
}

const LoginStyle = styled.div`
  .login_background {
    background-image: linear-gradient(120deg, #a7dad8, #368684, #022c2b);
    width: 100%;
    height: 100vh;
  }

  .login_form {
    width: 40% !important;
    border: 3px solid white;
    padding: 3rem;
    border-radius: 3rem;
    background-image: linear-gradient(320deg, #8abada, #1da5a5, #075753);
    height: 90vh;
    overflow-y: scroll;
  }

  .login_form::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .login_form {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .underLine {
    width: 100px;
    height: 3px;
    background-color: white;
    border-radius: 10px;
  }

  .form-group {
    display: flex;
    justify-content: space-around;
    heigth: 3rem;
    margin-bottom: 30px;
  }

  .form-control {
    width: 70%;
    height: 3rem;
    border-radius: 3rem;
  }

  .btn {
    width: 70% !important;
    height: 3rem;
    color: #00b1ab;
    border-radius: 3rem;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .btn:hover {
    color: white;
    background-color: #00b1ab !important;
    border: 1px solid white;
  }

  .icon {
    font-size: 2rem;
    background-color: white;
    width: 10%;
    text-align: center;
    border-radius: 3rem;
    color: #00b1ab;
  }

  .register:hover {
    color: white !important;
    text-decoration: none;
  }
`;

export default Register;
