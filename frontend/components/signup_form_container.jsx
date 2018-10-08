import SessionForm from './session_form';
import {connect} from 'react-redux';
import {signup} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  processForm: () => dispatch(signup())
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
