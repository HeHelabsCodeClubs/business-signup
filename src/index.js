import isEmpty from 'lodash.isempty';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RenderErrors from 'errors-render-component';
import './style.css';

class BusinessSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formSubmitting: false,
            validationErrors: {},
            buttonText: ''
        };
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { 
            errors,
            formSubmitting,
            submitButtonText
        } = nextProps;
       
        if (!isEmpty(errors)) {
            if (this.state.validationErrors !== errors) {
                this.setState({
                    validationErrors: errors
                });
            }
        }
        if (formSubmitting !== false) {
            if(formSubmitting !== this.state.formSubmitting) {
                this.setState({
                    formSubmitting: formSubmitting
                });
            }
        }
        if (submitButtonText !== this.state.buttonText) {
            this.setState({
                buttonText: submitButtonText
            });
        }
    }
    renderErrors(errors) {
        return <RenderErrors errorData={errors} />
    }

    renderField(field){
        return (
            <RenderField fieldInput={field}/>
        )
    }

    render (){
        const { 
            handleSubmit,
            submit,
            signUpForm,
            titleColor,
            textColor,
            loginBtnClass,
            companyInfoTitleColor,
            subCompanyInfoTitleColor,
            cancelBtnClass,
            signUpBtnClass,
            termColor,
            footerColor,
            headerUrl,
            formInputs,
            backgroundColor,
            shadowBox,
            authlogoClass
        } = this.props;
        const { 
            validationErrors,
            formSubmitting,
            buttonText
        } = this.state;
        const buttonDisableState = formSubmitting ? true : false;
        return (
            <div className="row auth-wrapper" style={{background: backgroundColor}}>
                <div className="authHeaderWrapper">
                    <Link to="/"><img src={headerUrl} className={authlogoClass} /></Link>
                </div>
                <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-md-1">
                    <div className={`signUpWrapper ${shadowBox}`}>
                        <div className="signUpHeader">
                            <span 
                            className="authTitle"
                            style={{ color: titleColor}}
                            >Sign Up</span>
                            <span>
                                <span 
                                className="authText" 
                                style={{ color: textColor}}
                                >Already have an account?</span>
                                <span><Link to="/signin"><button className={loginBtnClass}>Sign In</button></Link></span>
                            </span>
                        </div>
                        <div className="signUpBody">
                            <div className="planSelection">
                                <div>
                                    <div className="create-form form-container">
                                        <div className="validation-errors">{this.renderErrors(validationErrors)}</div>
                                        <form onSubmit={handleSubmit(submit)} >
                                            <div className={`row ${formInputs}`}>
                                                {signUpForm}
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit-button form-component">
                                                <Link 
                                                to="/signup">
                                                <button 
                                                type="cancel" 
                                                className={cancelBtnClass}>
                                                Cancel
                                                </button>
                                                </Link>
                                                <button 
                                                type="submit" 
                                                name="submit"
                                                className={signUpBtnClass}
                                                disabled={buttonDisableState}>
                                                {buttonText}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="terms authText" 
                style={{ color: footerColor}}
                >
                    By Clicking "Signup" you agree to EMS's  
                    <Link to="/" 
                    className="nav-link" 
                    style={{ color: termColor}}
                    >
                    Terms of Services
                    </Link> 
                    and  
                    <Link to="/" 
                    className="nav-link" 
                    style={{ color: termColor}}>
                    Policy Privacy
                    </Link>
                </div>
            </div>
        )
    }
}

export default BusinessSignUp;
