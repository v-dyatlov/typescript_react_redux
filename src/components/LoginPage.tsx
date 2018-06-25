import * as React from "react";
import {connect} from "react-redux";
import {ApplicationState} from "../redux";
import {loginRequest, loginSuccess} from "../redux/auth/auth.actions";
import {AuthService} from "../redux/auth/auth.service";
import {UserInterface} from "../interfaces/user.interface";
import {history} from "../history";

class LoginPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e: any) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e: any) {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(loginRequest(true));

        const user: UserInterface = {
            login: this.state.username,
            password: this.state.password
        };

        const result = AuthService.login(user);
        if (result) {
            dispatch(loginSuccess(user));
            history.push('/');
        } else {
            // login fail
            dispatch(loginSuccess);
        }
    }

    render() {
        return <div>
            {this.state.username}
            <input type="text" name="username" onChange={this.handleChange}/>
            <input type="password" name="password" onChange={this.handleChange}/>
            <input type="submit" onClick={this.handleSubmit}/>
            {this.props.loggingIn &&
                <div>Woo-hoo login request is send</div>
            }
        </div>
    }
}

function mapStateToProps(state: ApplicationState) {
    const {loggingIn} = state.auth;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export {connectedLoginPage as LoginPage};