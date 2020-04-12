import './signin.styles.scss'
import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import {signInWithGoogle} from '../../firebase/firebase.utils.js'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value, e.target.name)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email:'', password:''})
    }

    render() {
        const {email, password} = this.state 
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email" 
                        name="email" 
                        value={email} 
                        required
                        handleChange={this.handleChange} 
                        label="Email"/>
                    
                    <FormInput
                        type="password" 
                        name="password" 
                        value={password} 
                        required
                        handleChange={this.handleChange}
                        label="Password" />
                        <div className='buttons'>
                            <CustomButton type="submit">
                            Sign in
                            </CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            Sign in with Google
                            </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn
