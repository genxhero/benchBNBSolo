import SessionForm from './session_form';
import {connect} from 'react-redux';
import {login} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'login'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  processForm: () => dispatch(login())
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
