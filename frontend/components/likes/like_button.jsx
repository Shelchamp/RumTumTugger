import React from "react";

class LikeButton extends React.Component {
  // componentDidMount() {}
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log("It worked!");
    console.log(this);
  }

  render() {
    return (
      <div>
        <ul>
          {/* LIKE HEART*/}
          <li className="likes-list" onClick={this.handleClick}>
            &lt;3
          </li>
        </ul>
      </div>
    );
  }
}

export default LikeButton;
