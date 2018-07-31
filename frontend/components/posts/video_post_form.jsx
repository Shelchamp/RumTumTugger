import React from "react";
import { withRouter, Link } from "react-router-dom";

class VideoPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    // debugger
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(
      setTimeout(() => {
        this.props.history.push("/");
      })
    );
  }

  render() {
    let postButton;
    if (
      this.state["image_url"].includes("https") &&
      this.state["image_url"].includes("youtube") &&
      this.state["image_url"].includes("/embed/")
    ) {
      postButton = (
        <button className="tx-button create-post-button" type="submit">
          POST
        </button>
      );
    } else {
      postButton = (
        <span className="tx-button create-post-button-off" type="submit">
          POST
        </span>
      );
    }
    return (
      <li className="post-form post new-post-buttons-container post-forms-above-glass fade-in">
        <div className="post-form post-form-text post post-full">
          <div className="post-margin">
            <div className="post-form-avatar">
              <div className="channel-avatar avatar-container">
                {/* AVATAR IMAGE*/}
              </div>
              <div className="primary-avatar avatar-container">
                {/* AVATAR IMAGE*/}
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="post-container-inner post">
              <div className="post-form-header clearfix" />
              <form onSubmit={this.handleSubmit}>
                <div className="post-form-form post-content-text">
                  <div className="title-field">
                    <div className="editor-wrapper">
                      <div className="editor-slot">
                        <div className="editor editor-plaintext">
                          <input
                            className="create-text-post-title editor-placeholder"
                            type="text"
                            value={this.state.image_url}
                            onChange={this.update("image_url")}
                            placeholder="Paste a youtube embed URL"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="example-vid">
                      <h1 className="guide">-replace-</h1>
                      https://www.youtube.com/<b className="bold">
                        watch?v=
                      </b>dQw4w9WgXcQ
                      <h1 className="guide">-with-</h1>
                      https://www.youtube.com/<b className="bold">
                        embed/
                      </b>dQw4w9WgXcQ
                    </h1>
                  </div>
                  <div className="caption-field">
                    <div className="editor-slot">
                      <div className="editor editor-richtext">
                        <input
                          className="create-text-post-body editor-placeholder"
                          value={this.state.body}
                          onChange={this.update("body")}
                          placeholder="Optional caption here"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-form-footer">
                  <div className="post-form-tag-editor">
                    <div className="tag-input-wrapper">
                      <div className="tagInput">
                        <div className="editor-wrapper">
                          <div className="editor-slot">
                            <div className="editor editor-plaintext">
                              <div className="editor-placeholder" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-form-guard" />
                <div className="post-form-bottom">
                  <div className="controls-container">
                    <div className="control left">
                      <Link className="tx-button" to="/feed">
                        Close
                      </Link>
                    </div>
                    <div className="control right">
                      {/* <div className='post-form-save-button'>
                           <div className='split-button'> */}
                      {postButton}
                      {/*   </div>
                         </div> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(VideoPostForm);
