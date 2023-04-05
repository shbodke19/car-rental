import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import Spinner from "../components/Spinner";

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const onFinish = (val) => {
    dispatch(userRegister(val));
    console.log(val);
  };
  return (
    <>
      <div className="login">
        {loading && <Spinner />}
        <Row gutter={16} className="d-flex align-items-center">
          <Col lg={16} style={{ position: "relative" }}>
            <img
              src="https://wallpaperaccess.com/full/271399.jpg"
              className="imgg"
              alt=""
            />
            <h1 id="login-logo">Janata Garage</h1>
          </Col>
          <Col lg={8} className="text-left p-5">
            <Form
              layout="vertical"
              className="login-form p-5"
              onFinish={onFinish}
            >
              <h1>Register Here</h1>
              <hr />
              <Form.Item
                name="username"
                label="UserName"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="confirm password"
                label="Confirm Password"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <button className="btn1 mt-2 mb-3">Register</button>
              <br />
              <Link to="/login">Click Here to Login</Link>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Register;
