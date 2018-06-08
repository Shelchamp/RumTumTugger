import {login} from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapStateToProps = () => {
  let formType = 'login';
  let form = { email: '', password: ''};
  return { form, formType }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
