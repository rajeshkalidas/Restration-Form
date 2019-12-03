import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormContainer from '../components/FormContainer';
import SuccessScreen from './SuccessScreen';

/**
 * Main - Container to display the Register form.
 */
class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            emailId: '',
            password: '',
            confirmPassword: '',
            inValidPassword: false,
            validInfo: false         
        };
        this.onInputHandler = this.onInputHandler.bind(this);  
        this.onSubmitHandler = this.onSubmitHandler.bind(this);         
      }

      onSubmitHandler(event) {
          event.preventDefault();
          const {password, confirmPassword} = this.state;         
          if (password !== confirmPassword) {
             this.setState({inValidPassword: true});
          } else {
            this.setState({validInfo: true});
          }
          
      }

      onInputHandler(element, event) {
          this.setState({
            [element]: event.target.value,
            inValidPassword: false,
            validInfo: false
          });
      }
    
   /**
     * render
     * @return {ReactElement} markup
     */
    render() {
        const {inValidPassword, validInfo, emailId} = this.state;
        return(
            <div className="container">          
              <section>				
                <div id="container_demo">                  
                    <div id="wrapper">
                        {!validInfo ? <FormContainer inValidPassword={inValidPassword} onInputHandler={this.onInputHandler}
                        onSubmitHandler={this.onSubmitHandler} /> : <SuccessScreen />}					
                    </div>
                </div>  
            </section>
        </div>
        );
    }
};


export default Main;
