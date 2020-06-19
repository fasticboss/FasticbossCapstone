import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

export default class TestApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.userID,
      blogItem: {},
    };
  }

  componentDidMount() {
    console.log("currentID", this.state.currentId);

    axios
      .get(
        `https://fasticboss.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then((res) => {
        console.log("API REQ ", res);
        this.setState({
          blogItem: res.data.portfolio_blog,
        });
      })
      .catch((error) => {
        console.log("getBlogItem error", error);
      });
  }

  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status,
    } = this.state.blogItem;



    const contentManager = () => {

      

      return (
        <div>
          <h1>{title}</h1>

          <img src={featured_image_url} />

          <div className="content">{ReactHtmlParser(content)}</div>
        </div>
      );
    };

    return <div className="blog-container">{contentManager()}</div>;
  }
}
