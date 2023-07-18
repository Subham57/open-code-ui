import { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';
import {SignupStateInterface} from './signupTemplates'



export class Signup extends Component<object, SignupStateInterface> {
    constructor(props: object) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            Organization: "",

            firstNameErrorMsg: "",
            lastNameErrorMsg: "",
            emailErrorMsg: "",
            orgErrorMsg: "",

            firstNameToSend: false,
            lastNameToSend: false,
            emailToSend: false,
            organizationToSend: false,


            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            orgValid: false
        }
    }

    handleSubmit() {

        let em_first_name = this.handleFirstName();
        let em_last_name = this.handleLastName();
        let em_email = this.handleEmail();
        let em_org = this.handleOrg();

        this.setState({
            ...this.state,
            firstNameErrorMsg: em_first_name.msg,
            lastNameErrorMsg: em_last_name.msg,
            emailErrorMsg: em_email.msg,
            orgErrorMsg: em_org.msg,
            firstNameValid: em_first_name.valid,
            lastNameValid: em_last_name.valid,
            emailValid: em_email.valid,
            orgValid: em_org.valid,
            firstNameToSend: em_first_name.toSend,
            lastNameToSend: em_last_name.toSend,
            emailToSend: em_email.toSend,
            organizationToSend: em_org.toSend,
        })
        if (em_first_name.toSend && em_last_name.toSend && em_email.toSend && em_org.toSend) {
            const data = {
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "email": this.state.email,
                "org": this.state.Organization
            }
            console.log(data)
            const url = "http://localhost:5001/create"
            axios.post(url, data).then((res) => {
                console.log(res)
                alert("User Created Successfully :)");
            }).catch((err) => {
                console.log(err)
                alert("Somthing Went Wrong.");
            });
        }
    }

    handleFirstName() {
        let reg_first_name = /^[a-zA-Z ]{2,30}$/
        if (this.state.firstName === "") {
            return { msg: "First Name can not be empty.", valid: true, toSend: false }
        } else if ((!reg_first_name.test(this.state.firstName))) {
            return { msg: "Invalid First Name.", valid: true, toSend: false }
        } else {
            return { msg: "", valid: false, toSend: true }
        }
    }

    handleLastName() {
        let reg_last_name = /^[a-zA-Z ]{2,30}$/
        if (this.state.lastName === "") {
            return { msg: "Last Name can not be empty.", valid: true, toSend: false }
        } else if ((!reg_last_name.test(this.state.lastName))) {
            return { msg: "Invalid Last Name.", valid: true, toSend: false }
        } else {
            return { msg: "", valid: false, toSend: true }
        }
    }

    handleEmail() {
        let reg_email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if (this.state.email === "") {
            return { msg: "Email can not be empty.", valid: true, toSend: false }
        } else if (!reg_email.test(this.state.email)) {
            return { msg: "Invalid Email ID.", valid: true, toSend: false }
        } else {
            return { msg: "", valid: false, toSend: true }
        }
    }

    handleOrg() {
        if (this?.state?.Organization === "") {
            return { msg: "You have to choose one organization.", valid: true, toSend: false }
        } else {
            return { msg: "", valid: false, toSend: true }
        }
    }

    render() {
        return (
            <Box className={"container border border-primary rounded my-5"}>
                <Typography variant="h2" className='text-center' >SIGN UP FORM</Typography>
                <hr />
                <Box className={"d-flex flex-column align-items-center"}>
                    <TextField
                        error={this.state.firstNameValid}
                        className='my-4 w-75'
                        id="first_name"
                        label="First Name *"
                        variant="outlined"
                        helperText={this.state.firstNameErrorMsg}
                        onChange={(e) => this.setState({ firstName: e.target.value })} />

                    <TextField
                        error={this.state.lastNameValid}
                        className='w-75'
                        id="last_name"
                        label="Last Name *"
                        variant="outlined"
                        helperText={this.state.lastNameErrorMsg}
                        onChange={(e) => this.setState({ lastName: e.target.value })} />

                    <TextField
                        error={this.state.emailValid}
                        type="email"
                        className='my-4 w-75'
                        id="email"
                        label="Email *"
                        variant="outlined"
                        helperText={this.state.emailErrorMsg}
                        onChange={(e) => this.setState({ email: e.target.value })} />


                    <Typography variant="h6" className='text-center'>Organization</Typography>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
                        onChange={(e) => this.setState({ Organization: e.target.value })}>
                        <FormControlLabel value="SSPL" control={<Radio />} label="SSPL" />
                        <FormControlLabel value="TCS" control={<Radio />} label="TCS" />
                        <FormControlLabel value="INFOSYS" control={<Radio />} label="INFOSYS" />
                    </RadioGroup>
                    <Typography variant="h6" className='text-center text-danger'>{this.state.orgErrorMsg}</Typography>

                    <Button variant="contained" className='my-4 primary' onClick={() => this.handleSubmit()}>Submit</Button>
                </Box>
            </Box >
        )
    }
}

export default Signup