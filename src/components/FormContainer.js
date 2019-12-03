import React from 'react';
import PropTypes from 'prop-types';


const FormContainer = ({inValidPassword, onInputHandler, onSubmitHandler}) => (   
        <div id="register" >
            <form  autoComplete="on" onSubmit={onSubmitHandler}> 
                <h1> Register Form </h1> 
                <p> 
                    <label className="uname">First Name</label>
                    <input id="firstName" name="usernamesignup" required="required" type="text" placeholder="first name here" 
                      onChange={(event) => onInputHandler('firstName', event)} />
                </p>
                <p> 
                    <label className="uname">Last Name</label>
                    <input id="lastName" name="usernamesignup" required="required" type="text" placeholder="last name here" 
                      onChange={(event) => onInputHandler('lastName', event)} />
                </p>
                <p> 
                    <label className="uname">Your username</label>
                    <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="myusername"
                      onChange={(event) => onInputHandler('userName', event)}  />
                </p>
                <p> 
                    <label className="youmail" data-icon="e" > Your email</label>
                    <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="myemail@mail.com"
                      onChange={(event) => onInputHandler('emailName', event)}  /> 
                </p>
                <p> 
                    <label className="youpasswd" >Your password </label>
                    <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"
                      onChange={(event) => onInputHandler('password', event)} />                                    
                </p>
                <p> 
                    <label className="youpasswd">Please confirm your password </label>
                    <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"
                      onChange={(event) => onInputHandler('confirmPassword', event)} />
                      {inValidPassword && <label className="youpasswd" >Password and Confirm password should be same </label>} 
                </p>
                <p className="keeplogin"> 
                  <input type="checkbox" name="loginkeeping" id="loginkeeping" required="required" value="loginkeeping" /> 
                  <label>Keep me logged in</label>
                </p>
                 <p className="signin button"> 
                  <input type="submit" value="Sign up"/> 
                </p>                
            </form>
         </div>
);

// PropTypes
FormContainer.propTypes = {
  inValidPassword: PropTypes.bool,
  onInputHandler: PropTypes.func,
  onSubmitHandler: PropTypes.func
};
    
export default FormContainer;

