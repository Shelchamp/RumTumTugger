import React from "react";
import { withRouter, Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import request from "superagent";
import merge from "lodash/merge";

const CLOUDINARY_UPLOAD_PRESET = "RUM_TUM_CLOUD";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/shelchamp/image/upload";
let cloudinary = {
  uploadedFileCloudinaryUrl: ""
};

class ImagePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.post, cloudinary);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onImageDrop(files) {
    // this.setState({
    //   uploadedFile: files[0]
    // })
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
          image_url: response.body.secure_url
        });
      }
    });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then(setTimeout(this.props.history.push("/")), 1500);
  }

  render() {
    // POST FORM BUTTON WILL RENDER CONDITIONALLY
    let postButton;
    if (!this.state["image_url"].includes("https")) {
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
                            placeholder="Paste a URL"
                          />
                          <div>
                            <h2 className="or">-or-</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CLOUDINARY IMAGE */}
                  <div id="drop">
                    <Dropzone
                      className="drop-box heat"
                      multiple={false}
                      accept="image/*"
                      onDrop={this.onImageDrop.bind(this)}
                    >
                      <p>Drop an image or click to select a file to upload.</p>
                    </Dropzone>
                    <div>
                      <div>
                        {this.state.uploadedFileCloudinaryUrl === "" ||
                        this.state.image_url === "" ? null : (
                          <div className="drop-prev">
                            <img src={this.state.uploadedFileCloudinaryUrl} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* CLOUDINARY IMAGE */}
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

export default withRouter(ImagePostForm);
