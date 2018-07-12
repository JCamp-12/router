import React, { Component } from 'react';
import Webcam from 'react-webcam';

export default class WebcamCapture extends Component {
  constructor() {
    super();
    this.state = {
      
      imageArray: []
      
    };
  }
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };
    

    return (
      <div>
        <Webcam
          audio={false}
          height={auto}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={auto}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
        
      </div>
    );
  }
}