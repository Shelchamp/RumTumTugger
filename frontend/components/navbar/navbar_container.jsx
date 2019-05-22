import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) =>({
  currentUser: state.entities.users[state.session.id],
  users : Object.values(state.entities.users).map(user => user.username)
})

const mapDispatchToProps = dispatch =>({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
