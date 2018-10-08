import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    let formString = "";
    let formUrl = ""
    let currentPage ="";

    if (this.props.formType === 'signup') {
      formUrl = '/login';
      formString ="Log In";
      currentPage = "Sign Up";
    } else  {
      formUrl = '/signup';
      formString = "Sign Up";
      currentPage = "Log In";
    }
   return (
   <div className="session-form-container">
     <h3 className="form-header">{currentPage}</h3>
     <Link className="head-link" to={`${formUrl}`}>{formString} Instead</Link>
   </div>
   );

  }

} //end of class

export default withRouter(SessionForm);
