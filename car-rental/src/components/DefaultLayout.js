import React from "react";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";

const DefaultLayout = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/admin">Admin</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "orangered" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <Link to="/" style={{ color: "black" }}>
                  Janata Garage
                </Link>
              </h1>
              <hr />

              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>{user.username}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <hr />
      <div className="content">{props.children}</div>
      <div className="footer text-center">
        <hr />

        <p>Desinged and Developed By</p>

        <p>Shree Bodke</p>
      </div>
    </>
  );
};

export default DefaultLayout;
