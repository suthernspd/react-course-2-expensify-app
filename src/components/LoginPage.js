import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);



/* 
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: props.user ? props.user.userName : '',
            password: props.user ? props.user.password : '',
            error: ''
        };
    }
    onUserNameChange = (e) => {
        const userName = e.target.value;
        this.setState(() => ({ userName }));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.userName || !this.state.password) {
            this.setState(() => ({ error: 'Please provide a valid username and password.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                userName: this.state.userName,
                password: this.state.password
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="User Name"
                        autoFocus
                        value={this.state.userName}
                        onChange={this.onUserNameChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    <button onClick={startLogin}>Login</button>
                </form>
            </div>
        )
    }
} */