import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts } from "../../actions/post_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchLikes } from "../../actions/like_actions";

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    users: state.entities.users,
    currentUser: state.session.id,
    likes: state.entities.likes
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchLikes: () => dispatch(fetchLikes())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
