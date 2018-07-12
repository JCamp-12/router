import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css';
import { Jumbotron, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Webcam from 'react-webcam';


class About extends Component {
    constructor() {
      super();
      this.state = {
        testArray: ['test1','test2','test3'],
        test: {test: 'test', test1: 'test1', test2: 'test3'},

        imageArray: [],
        devices: [],
        dropdownOpen: false
      };
      this.toggle = this.toggle.bind(this);
    }


  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentWillMount() {

    navigator.mediaDevices.enumerateDevices()
    .then((result) => {
      console.log('haha', result)
      this.setState({devices: result})
      for(let i = 0; i < result.length; i ++){
        let device = result[i];
        if (device.kind === 'videoinput') {
            let option = document.createElement('option');
            option.value = device.deviceId;
            option.text = device.label || 'camera ' + (i + 1);
            document.querySelector('select#videoSource').appendChild(option);
        }
    };
  })
    .catch((err) => {
      console.log('error getting MediaDeviceInfo list', err);
    });
 }

 populateOptions(options) {
  return options.map((option, index) => (
    <DropdownItem key={index} value={option}>{option}</DropdownItem>
  ));
}

  render() {
    console.log('this is devices ',this.state.devices);
    const deviceskeys = Object.keys(this.state.devices)
    // console.log('this is the device keys: ' + deviceskeys)
    const devicesvalues = Object.values(this.state.devices)
    // console.log('this is the device values:', devicesvalues)
    const devicesdevices = devicesvalues.map(object => {
      // console.log('this is every loop', object.kind)
      if(object.kind === 'videoinput') console.log('this is videoinput?', object.kind)
      if(object.kind === 'videoinput') console.log('this is name of input?', Object.values(object))
    });
    // console.log('oh please', devicesdevices);
    
    // let list = this.state.
    return (
      <div className='about-container'>
        <div className='container'>
          <Jumbotron>
            <h1 className='about-main-title text-center'>Welcome to About</h1>
            <h4> now we are cooking with fire</h4>
          </Jumbotron>
        </div>

        <div>
          <select id="videoSource"></select>
        </div>
        <div>
         <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Webcam Selection
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Choose Your Webcame</DropdownItem>
            {/* <DropdownItem disabled>Action</DropdownItem> */}
            <DropdownItem divider />
            <DropdownItem id="videoSource">
            {/* <li id="videoSource"></li> */}
            
            </DropdownItem>
            
            
            {/* <DropdownItem>Another Action</DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
        </div>

        <div>
          <Webcam/>
        </div>


          <Link to="/">
            <Button color='primary'>Home!</Button>
          </Link>
      </div>
      )
  }
}

export default About;
