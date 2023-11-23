import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { sendAdminAuthRequest } from '../../api/api';
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const onResRecived=(data)=>{
    console.log(data)
    dispatch(adminActions.login())
    localStorage.setItem("adminId",data.id)
    localStorage.setItem("token",data.token)
    navigate("/")
  }
  const getData=(data)=>{
    console.log("Admindata",data);
    sendAdminAuthRequest(data.inputs).then(onResRecived)
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin