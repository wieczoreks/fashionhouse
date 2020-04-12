import './signinup.styles.scss'
import React from 'react'
import SignIn from '../../components/signin/signin'
import SignUp from '../../components/signup/signup'

const SignInUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>

    )
}

export default SignInUp
