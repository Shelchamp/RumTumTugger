import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  // debugger
  let formType = 'Create Post';
  let post = {
                post_type: 'text',
                title: '',
                body: '',
                image_url: '',
                user_id: state.session.id
              }
  return { post, formType }
}

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
