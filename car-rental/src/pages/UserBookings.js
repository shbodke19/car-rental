import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from "../components/Spinner";
import moment from "moment";
function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  console.log(bookings);

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <h3 className="text-center mt-2">My Bookings</h3>

      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {bookings
            .filter((val) => val.user === user._id)
            .map((values) => {
              return (
                <Row gutter={16} className="bs1 mt-3 text-left">
                  <Col lg={6} sm={24} key={values.id}>
                    <p>
                      <b>{values.car.name}</b>
                    </p>
                    <p>
                      Total hours : <b>{values.totalHours}</b>
                    </p>
                    <p>
                      Rent per hour : <b>{values.car.rentPerHour}</b>
                    </p>
                    <p>
                      Total amount : <b>{values.totalAmount}</b>
                    </p>
                  </Col>

                  <Col lg={12} sm={24}>
                    <p>
                      Transaction Id : <b>{values.transactionId}</b>
                    </p>
                    <p>
                      From: <b>{values.bookedTimeSlots.from}</b>
                    </p>
                    <p>
                      To: <b>{values.bookedTimeSlots.to}</b>
                    </p>
                    <p>
                      Date of booking:{" "}
                      <b>{moment(values.createdAt).format("MMM DD yyyy")}</b>
                    </p>
                  </Col>

                  <Col lg={6} sm={24} className="text-right">
                    <img
                      style={{ borderRadius: 5 }}
                      src={values.car.image}
                      height="140"
                      className="p-2"
                      alt=""
                    />
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;
