import { connect } from "react-redux";
import LikeButton from "./like_button";
import { createLike } from "../../actions/like_actions";
// import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => ({
  createLike: post => dispatch(createLike(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
