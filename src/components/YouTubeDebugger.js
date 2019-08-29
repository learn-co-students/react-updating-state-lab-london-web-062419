import React, { Component } from "react";

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>
          Increase BitRate {this.state.settings.video.resolution}
        </button>
        <button className="resolution" onClick={this.handleResolutionClick}>
          Increase Resolution {this.state.settings.bitrate}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
