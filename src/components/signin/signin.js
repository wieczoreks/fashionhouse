import './signin.styles.scss'
import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import {connect} from "react-redux";

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {emailSignInStart} = this.props
        const {email, password} = this.state
        emailSignInStart(email, password)

        
    }

    render() {
        const {email, password} = this.state
        const {googleSignInStart} = this.props
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
                            DUPA
                            </CustomButton>
                            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >
                            Sign in with Google
                            </CustomButton>
                        </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        googleSignInStart:()=>dispatch(googleSignInStart()),
        emailSignInStart:(email, password)=>dispatch(emailSignInStart({email, password}))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)
