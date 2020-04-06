import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.sass';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import { authActionLogin, clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import Home from "../Home/Home";
import {Route, Router} from 'react-router-dom';

const LoginPage = ({authClear, loginUser, error, ...restProps}) => {

    const handleSubmit = values => {
        loginUser(values);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <div className={styles.headerSignUpPage}>
                    <Link to='/' >
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
                    </Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/registration' style={{textDecoration: 'none'}}><span>Signup</span></Link>
                    </div>
                </div>
                <div className={styles.loginFormContainer}>
                    <LoginForm onSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = state => state.auth;

const mapDispatchToProps = (dispatch) => ({
        clearError: () => dispatch(clearErrorSignUpAndLogin()),
        loginUser: credentialData => dispatch(authActionLogin(credentialData)),
        authClear: () => dispatch(clearAuth())
    }
);

export default connect(null, mapDispatchToProps)(LoginPage);
