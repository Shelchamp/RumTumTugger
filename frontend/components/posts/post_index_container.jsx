import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts } from "../../actions/post_actions";
import { fetchUsers } from "../../actions/user_actions";
import { createLike, deleteLike } from "../../actions/like_actions";

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    users: state.entities.users,
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers()),
  createLike: post => dispatch(createLike(post)),
  deleteLike: post => dispatch(deleteLike(post)) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
