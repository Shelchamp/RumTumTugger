import { connect } from "react-redux";
import LikeButton from "./like_button";
import { createLike, deleteLike } from "../../actions/like_actions";
// import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    // currentUser: state.session.id,
    likes: state.entities.likes

  };
};

const mapDispatchToProps = dispatch => ({
  createLike: post => dispatch(createLike(post)),
  deleteLike: post => dispatch(deleteLike(post)),
  fetchLikes: () => dispatch(fetchLikes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
