import {signup} from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = () =>{
  let formType = 'signup';
  let state = { username: '', email: '', password: ''};
  return { state, formType }
}

const mapDispatchToProps = dispatch =>({
  submitForm: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
