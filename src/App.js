import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies/Movies";
import Auth from "./components/Auth/Auth";
import Admin from "./components/Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store";
import Booking from "./components/Bookings/Booking";
import UserProfile from "./profile/UserProfile";
import AddMovie from "./components/Movies/AddMovie";
import AdminProfile from "./profile/AdminProfile";


function App() {
  const dispatch=useDispatch()

  const isAdminLoggedIn=useSelector((state)=>state.admin.isLoggedIn)
  const isUserAdminLoggedIn=useSelector((state)=>state.user.isLoggedIn)
  console.log("admin",isAdminLoggedIn);
  console.log("user",isUserAdminLoggedIn);
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(userActions.login())
    }
    else if(localStorage.getItem("adminId")){
      dispatch(adminActions.login())
    }
  },[])
  return (
    <div >
      <Header></Header>
      <section>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/user" element={<UserProfile/>}></Route>

          <Route path="/add" element={<AddMovie/>}></Route>
              <Route path="/user-admin" element={<AdminProfile/>}></Route>

          <Route path="/booking/:id" element={<Booking/>}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
