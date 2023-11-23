import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuthRequest } from '../../api/api';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const onResRecived=(data)=>{
    console.log("Auth",data)
    dispatch(userActions.login())
    localStorage.setItem("userId",data.id)
    
  navigate("/")
  }
  const getData=(data)=>{
    
    sendUserAuthRequest(data.inputs,data.signup).
    then(onResRecived)
    .catch(err=>
      console.log(err)
    )
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false}></AuthForm>
    </div>
  )
}

export default Auth