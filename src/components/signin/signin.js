import './signin.styles.scss'
import React, {  useState } from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import {connect} from "react-redux";

const SignIn = ({emailSignInStart, googleSignInStart}) =>  {
    
    const [userCredentials, setCredentials] = useState({email:'',password:''})
    const {email, password} = userCredentials

    const handleSubmit = async (e) => {
        e.preventDefault()      
        emailSignInStart(email, password)     
    }

    const handleChange = (event) => {
        const {value, name} = event.target
        setCredentials({...userCredentials, [name]:value})
    }
    
    return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="email" 
                        name="email" 
                        value={email} 
                        required
                        handleChange={handleChange} 
                        label="Email"/>
                    
                    <FormInput
                        type="password" 
                        name="password" 
                        value={password} 
                        required
                        handleChange={handleChange}
                        label="Password" />
                        <div className='buttons'>
                            <CustomButton type="submit">
                            Sign in
                            </CustomButton>
                            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >
                            Sign in with Google
                            </CustomButton>
                        </div>
                </form>
            </div>
    )
}


const mapDispatchToProps = (dispatch) =>{
    return {
        googleSignInStart:()=>dispatch(googleSignInStart()),
        emailSignInStart:(email, password)=>dispatch(emailSignInStart({email, password}))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)
