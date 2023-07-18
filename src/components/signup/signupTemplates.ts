export interface SignupStateInterface {
    firstName: string,
    lastName: string,
    email: string,
    Organization: string,

    firstNameErrorMsg: string,
    lastNameErrorMsg: string,
    emailErrorMsg: string,
    orgErrorMsg: string,

    firstNameValid: boolean,
    lastNameValid: boolean,
    emailValid: boolean,
    orgValid: boolean,
    
    firstNameToSend: boolean,
    lastNameToSend: boolean,
    emailToSend: boolean,
    organizationToSend: boolean
}