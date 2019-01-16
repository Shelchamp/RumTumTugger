import React from "react";
import { withRouter, Link } from "react-router-dom";

class PostForm extends React.Component {
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
    // POST FORM BUTTON WILL RENDER CONDITIONALLY
    let postButton;
    if (this.state["body"] === "" && this.state["title"] === "") {
      postButton = (
        <span className="tx-button create-post-button-off" type="submit">
          POST
        </span>
      );
    } else {
      postButton = (
        <button className="tx-button create-post-button" type="submit">
          POST
        </button>
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
              {/* 
                FORM TAG & onSubmit
              */}
              <form onSubmit={this.handleSubmit}>
                <div className="post-form-form post-content-text">
                  <div className="title-field">
                    <div className="editor-wrapper">
                      <div className="editor-slot">
                        <div className="editor editor-plaintext">
                          <input
                            className="create-text-post-title editor-placeholder"
                            type="text"
                            value={this.state.title}
                            onChange={this.update("title")}
                            placeholder="Title"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="caption-field">
                    <div className="editor-slot">
                      <div className="editor editor-richtext">
                        <input
                          className="create-text-post-body editor-placeholder"
                          value={this.state.body}
                          onChange={this.update("body")}
                          placeholder="Your text here"
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
                      {/* 
                        POST BUTTON
                      */}
                      {postButton}
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

export default withRouter(PostForm);
