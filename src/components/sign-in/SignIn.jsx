import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custombutton/CustomButton';

// firebase authentication with Google
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.scss';

class SignIn extends React.Component {
	constructor () {
		super()
		this.state = {
			email: "",
			password: ""
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: ""});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value })
	}

	render () {
		return (
      <div>
        <div className="sign-in">
          <h2>I have already an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              value={this.state.email}
              handleChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
			<div className="button">
				<CustomButton type="submit">Sign In</CustomButton>
				{/* Sign In with Google */}
				<CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
					Sign In With Google
				</CustomButton>
			</div>
          </form>
        </div>
      </div>
    );
	};
}

export default SignIn;
