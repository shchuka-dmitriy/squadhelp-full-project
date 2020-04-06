import React from 'react';
import {connect} from 'react-redux';
import {authActionLogin, clearAuth} from "../../actions/actionCreator";
import {Redirect} from 'react-router-dom';
import styles from './LoginForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schemas from '../../validators/validationSchems';
import Error from '../../components/Error/Error';


const LoginForm = props => {

    clicked = (values) => {
        this.props.loginRequest(values);
    };



        const {error, isFetching} = this.props;
        const {handleSubmit, submitting} = this.props;

    return (
        <div className={styles.loginFormWrapper}>
            {error && <Error data={error.data} status={error.status} clearError={authClear}/>}
            <h2>LOGIN TO YOUR ACCOUNT</h2>
            <form onSubmit={handleSubmit}>
                <Field
                    name='email'
                    classes={{
                        container: styles.inputContainer,
                        input: styles.input,
                        warning: styles.fieldWarning,
                        notValid: styles.notValid,
                        valid: styles.valid,
                    }}
                    component={FormInput}
                    type='text'
                    label='Email Address'
                />
                <Field
                    name='password'
                    classes={{
                        container: styles.inputContainer,
                        input: styles.input,
                        warning: styles.fieldWarning,
                        notValid: styles.notValid,
                        valid: styles.valid,
                    }}
                    component={FormInput}
                    type='password'
                    label='password'
                />
                <button type='submit'
                        disabled={submitting}
                        className={styles.submitContainer}>
                    <span className={styles.inscription}>LOGIN</span>
                </button>
            </form>
        </div>
    );
}

export default reduxForm({
    form: 'login',
    validate: customValidator(Schemas.LoginSchem)
})(LoginForm);
