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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
  return event => this.setState({
    [field]: event.currentTarget.value
  });
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
     <br></br>
     <form onSubmit={this.handleSubmit} className="session-form">
       <label className="form-label">Username
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}/>
       </label>
       <label className="form-label">Password
           <input type="password"
             value={this.state.password}
             onChange={this.update('password')}/>
       </label>
       <input className="submission" type="submit" value={currentPage} />
     </form>
     <br></br>
     <Link className="head-link" to={`${formUrl}`}>{formString} Instead</Link>
   </div>
   );

  }

} //end of class

export default withRouter(SessionForm);
