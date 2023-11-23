import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link, useNavigate } from 'react-router-dom';


function AuthForm({onSubmit,isAdmin}) {
    const navigate=useNavigate()

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [isSiginUp, setIsSiginUp] = useState(false)

    const handleChange=(e)=>{
        setInputs((prevState)=>({...prevState,
        [e.target.name]: e.target.value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        
        onSubmit({inputs,signup:isAdmin?false:isSiginUp})
        
    }
    console.log(inputs);
    return (
        <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={'true'}>
            <Box sx={{ ml: "auto", padding: 1 }}>
                <IconButton LinkComponent={Link} to="/">
                    <CloseRoundedIcon ></CloseRoundedIcon>
                </IconButton>
            </Box>
            <Typography variant='h4' textAlign={'center'}>{isSiginUp ? "SignUp" : "Login"}</Typography>
            <form onSubmit={handleSubmit}>
                <Box display={"flex"}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    padding={6}
                    width={300}
                    margin={'auto'}
                    alignItems={'center'}>
                    {/* <FormLabel sx={{mt:1,mb:1}}>Email</FormLabel>
                <TextField margin='normal' variant='standard' type={'email'} name='email'/>
                <FormLabel sx={{mt:1,mb:1}}>Password</FormLabel>
                <TextField margin='normal' variant='standard' type={'password'} name='password'/> */}
                    {!isAdmin && isSiginUp && (
                    <>

                    
                        {''}
                        <TextField
                            margin='normal'
                            sx={{ mt: 1, mb: 1 }}
                            name="name"
                            type={'text'}
                            label="Name"
                            value={inputs.name}
                            onChange={(handleChange)}
                            variant="outlined" 
                            />
                    </>
                    )}

                    <TextField margin='normal'
                        sx={{ mt: 1, mb: 1 }} name="email"
                        type={'email'} label="Email"
                        variant="outlined"
                        value={inputs.email}
                        onChange={(handleChange)} />
                    <TextField margin='normal'
                        sx={{ mt: 1, mb: 1 }} name="password"
                        type={'password'} label="Password"
                        variant="outlined"
                        value={inputs.password}
                        onChange={(handleChange)} />
                    <Button sx={{ mt: 1, borderRadius: 10, bgcolour: "#27005D" }} type='submit' fullWidth>{isSiginUp ? "SignUp" : "Login"}</Button>

                    {
                        !isAdmin && (
                        <Button onClick={() => setIsSiginUp(!isSiginUp)} sx={{ mt: 1, borderRadius: 10, bgcolour: "#27005D" }} fullWidth>Switch To {isSiginUp ? "Login" : "SignUp"}</Button>)}
                </Box>
            </form>
        </Dialog>
    )
}

export default AuthForm