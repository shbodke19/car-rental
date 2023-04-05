import "./App.css";
import {
  BrowserRouter,
  Navigate,
  redirect,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import { useEffect } from "react";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";
import AdminHome from "./pages/AdminHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking/:carid" element={<BookingCar />} />
          <Route path="/userbookings" element={<UserBookings />} />
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/editcar" element={<EditCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// export function ProtectedRoute(props) {
//   const { Component } = props;
//   const navigate = useNavigate();
//   useEffect(() => {
//     let login = localStorage.getItem("user");
//     if (!login) {
//       return navigate("/login");
//     } else {
//       return navigate("/");
//     }
//   });
// }
