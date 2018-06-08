import { connect } from 'react-redux';
import Greeting from './greeting';
import { login, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) =>({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch =>({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
