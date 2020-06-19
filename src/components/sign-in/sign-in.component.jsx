import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';


import './sign-in.styles.scss';
import CustomButton from '../custome-button/custom-button.component';

import { signInWithGogle} from '../../firebase/firebase.utils';
class SignIn extends Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: ' ', password: ' ' });

    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                    name='email'
                    type='email' 
                    handleChange={ this.handleChange }
                    label='email' 
                    value={ this.state.email }
                    
                    required 
                    />
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={ this.state.password }
                    handleChange={ this.handleChange } label='password' 
                    required 
                    />

                    <div className='buttons'>
                    <CustomButton type='submit' >Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGogle} isGoogleSignIn>{' '} Sign in with Google{' '}
                    </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;
