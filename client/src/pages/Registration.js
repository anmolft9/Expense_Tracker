import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Registration = ({ addUser }) => {
  const [registerForm, setRegisterForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setRegisterForm({ ...registerForm, [name]: value });
  };
  //   console.log(register);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(registerForm);
    setRegisterForm(initialState);
  };

  return (
    <MainLayout>
      <div className="registration-page d-flex justify-content-center mt-3 mb-5">
        <div className="registration-form border p-5 shadow p-5 bg-body rounded">
          <h3 className="text-center mb-3">Sign Up</h3>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              onChange={handleOnChange}
            >
              <Form.Label>First name</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={registerForm.firstName}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              onChange={handleOnChange}
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={registerForm.lastName}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              onChange={handleOnChange}
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={registerForm.email}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              onChange={handleOnChange}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={registerForm.password}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              onChange={handleOnChange}
            >
              <Form.Label>Confirm Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password again"
                name="confirmPassword"
                value={registerForm.confirmPassword}
              />
            </Form.Group>

            <Button variant="primary" type="submit ">
              Login
            </Button>

            <div className="mt-5 text-end">
              Have account? <Link to="/login">Login</Link>
            </div>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
};
