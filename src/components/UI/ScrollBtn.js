import React, { Component } from "react";

import "./ScrollBtn.css";
import arrow from "../assets/arrow_up.svg";

export default class ScrollToTop extends Component {
  // var scroll_to_top = document.getElementsByClassName('scroll-to-top');
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop(e) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.documentElement.style.setProperty("--show", "block");
  }

  render() {
    const { is_visible } = this.state;
    return (
      <>
        {is_visible && (
          <div className="scroll-to-top" onClick={(e) => this.scrollToTop(e)}>
            <div className="scrollbtn_wrapper">
              <img id="arrow" src={arrow} alt="top" />
            </div>
          </div>
        )}
      </>
    );
  }
}
