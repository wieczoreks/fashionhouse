import './signup.styles.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import React, { Component } from 'react'

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if(password!== confirmPassword){
            alert("password don't match")
            return 
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({email:'', password:'', confirmPassword:'', displayName:''})
        }

        catch(err) {
            console.log(err)
        }

        
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>        
                    <FormInput 
                        type='text' 
                        name="displayName" 
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required />
                    <FormInput 
                        type='email' 
                        name="email" 
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required />
                    
                    <FormInput 
                        type='password' 
                        name="password" 
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required  />
                    
                    <FormInput 
                        type='password' 
                        name="confirmPassword" 
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required />
                    <CustomButton type="submit">
                    SIGNUP
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup
