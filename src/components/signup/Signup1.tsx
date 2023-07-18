import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Signup1() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [conPassword, setConPassword] = useState('')
    const [email, setEmail] = useState('')

    const [userNameErrorMessage, setUserNameErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [conPasswordErrorMessage, setConPasswordErrorMessage] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')

    const [userNameValid, setUserNameValid] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)
    const [conPasswordValid, setConPasswordValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)

    const handleUsername = () => {
        let regUsername = /^[a-zA-Z ]{2,30}$/
        if (username === "") {
            setUserNameValid(true)
            setUserNameErrorMessage("Username can not be empty.")
            return { msg: "Username can not be empty.", valid: true, toSend: false }
        } else if ((!regUsername.test(username))) {
            setUserNameValid(true)
            setUserNameErrorMessage("Invalid Username.")
            return { msg: "Invalid Username.", valid: true, toSend: false }
        } else {
            setUserNameValid(false)
            setUserNameErrorMessage("")
            return { msg: "", valid: false, toSend: true }
        }
    }

    const handlePassword = () => {
        let regPassword = /^[a-zA-Z ]{2,30}$/
        if (password === "") {
            setPasswordValid(true)
            setPasswordErrorMessage("Password can not be empty.")
            return { msg: "Password can not be empty.", valid: true, toSend: false }
        } else if ((!regPassword.test(password))) {
            setPasswordValid(true)
            setPasswordErrorMessage("Invalid Password.")
            return { msg: "Invalid Password.", valid: true, toSend: false }
        } else {
            setPasswordValid(false)
            setPasswordErrorMessage("")
            return { msg: "", valid: false, toSend: true }
        }
    }

    const handleConPassword = () => {
        if (password === "") {
            setConPasswordValid(true)
            setConPasswordErrorMessage("Confirm Password can not be empty.")
            return { valid: true, toSend: false }
        } else if (conPassword != password) {
            setConPasswordValid(true)
            setConPasswordErrorMessage("Password Does not Match.")
            return { valid: true, toSend: false }
        } else {
            setConPasswordValid(false)
            setConPasswordErrorMessage("")
            return { valid: false, toSend: true }
        }
    }

    const handleEmail = () => {
        let reg_email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if (email === "") {
            setEmailValid(true)
            setEmailErrorMessage("Email can not be empty.")
            return { msg: "Email can not be empty.", valid: true, toSend: false }
        } else if (!reg_email.test(email)) {
            setEmailValid(true)
            setEmailErrorMessage("Invalid Email ID.")
            return { msg: "Invalid Email ID.", valid: true, toSend: false }
        } else {
            setEmailValid(false)
            setEmailErrorMessage("")
            return { msg: "", valid: false, toSend: true }
        }
    }


    const handleSubmit = () => {
        let resUsername = handleUsername();
        let resPassword = handlePassword();
        let resConPassword = handleConPassword();
        let resEmail = handleEmail();


        if (resUsername.toSend && resPassword.toSend && resConPassword.toSend && resEmail.toSend) {
            const data = {
                "Username": username,
                "Password": password,
                "Email": email
            }
            console.log(data)
        }
    }


    return (
        <Box className={"container border border-primary rounded my-5"}>
            <Typography variant="h2" className='text-center' >SIGN UP FORM</Typography>
            <hr />
            <Box className={"d-flex flex-column align-items-center"}>

                <TextField
                    error={userNameValid}
                    className='my-4 w-75'
                    id="userName"
                    label="Username"
                    variant="outlined"
                    helperText={userNameErrorMessage}
                    onChange={(e) => setUserName(e.target.value)} />

                <TextField
                    error={passwordValid}
                    className='w-75'
                    id="password"
                    label="Password"
                    variant="outlined"
                    helperText={passwordErrorMessage}
                    onChange={(e) => setPassword(e.target.value)} />

                <TextField
                    error={conPasswordValid}
                    className='my-4 w-75'
                    id="conPassword"
                    label="Confirm Password"
                    variant="outlined"
                    helperText={conPasswordErrorMessage}
                    onChange={(e) => setConPassword(e.target.value)} />

                <TextField
                    error={emailValid}
                    type="email"
                    className='my-4 w-75'
                    id="email"
                    label="Email"
                    variant="outlined"
                    helperText={emailErrorMessage}
                    onChange={(e) => setEmail(e.target.value)} />

                <Button variant="contained" className='my-4 primary' onClick={() => handleSubmit()}>Submit</Button>
            </Box>
        </Box >
    )
}
