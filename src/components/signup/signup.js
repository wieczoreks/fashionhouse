import './signup.styles.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import React, { useState } from 'react'

const Signup = ({signUpStart}) => {
    
    const [userCredentials, setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const {displayName, email, password, confirmPassword} = userCredentials

    const handleChange = (e) => {
        setUserCredentials({...userCredentials, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(password!== confirmPassword){
            alert("password don't match")
            return 
        }
        signUpStart({displayName, email, password})
    }

    
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>        
                    <FormInput 
                        type='text' 
                        name="displayName" 
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required />
                    <FormInput 
                        type='email' 
                        name="email" 
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required />
                    
                    <FormInput 
                        type='password' 
                        name="password" 
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required  />
                    
                    <FormInput 
                        type='password' 
                        name="confirmPassword" 
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required />
                    <CustomButton type="submit">
                    SIGNUP
                    </CustomButton>
                </form>
            </div>
        )
}


const mapDispatchToProps = dispatch =>({
    signUpStart:(userCredentials)=>dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(Signup)
