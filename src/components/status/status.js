import React from "react";

import "./status.scss";

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: false,
      status: {}
    };
  }

  componentDidMount() {
    fetch("https://fbhzv4f2nk7b.statuspage.io/api/v2/status.json")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            enabled: true,
            status: result.status
          });
        },
        error => {}
      );
  }

  render() {
    const { enabled, status } = this.state;

    return enabled ? (
      <a href="https://www.hackeronestatus.com" target="_blank">
        <span className={`status__dot status__dot--${status.indicator}`} />
        <span className="status__description">{status.description}</span>
      </a>
    ) : null;
  }
}

export default Status;
