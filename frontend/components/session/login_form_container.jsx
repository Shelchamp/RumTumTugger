import {login} from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
// const mapStateToProps = ({errors}) => {
  let formType = 'login';
  let form = { email: '', password: ''};
  return {
    form,
    formType,
    errors: state.errors.session
    // errors: errors.session
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
