import {signup} from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = () =>{
  let formType = 'signup';
  let form = { username: '', email: '', password: ''};
  return { form, formType }
}

const mapDispatchToProps = dispatch =>({
  signup: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
