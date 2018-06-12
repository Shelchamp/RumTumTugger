import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';


const mapStateToProps = (state) => {
  return {
  posts: Object.values(state.entities.posts).reverse(),
  users: Object.values(state.entities.users)
}}

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
