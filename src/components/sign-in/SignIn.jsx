import React from 'react';
import FormInput from '../form-input/FormInput';
import './signin.scss';

class SignIn extends React.Component {
	constructor () {
		super()
		this.state = {
			name: "",
			email: ""
		}
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ email: "", password: "" })
	}

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
							label="email"
							required
							/>
							<label>Email</label>

							<FormInput
								name="password"
								type="password"
								value={this.state.email}
								handleChange={this.handleChange}
								label="password"
								required
							/>
							<label>Email</label>

							<input  type="submit" value="Submit Form"/>
					</form>
				</div>
			</div>
		)
	};
}

export default SignIn;
