import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import __1 from '../../../assets/audio/timereminder/it\'s 1 o\'clock.mp3';
import __2 from '../../../assets/audio/timereminder/it\'s 2 o\'clock.mp3';
import __3 from '../../../assets/audio/timereminder/it\'s 3 o\'clock.mp3';
import __4 from '../../../assets/audio/timereminder/it\'s 4 o\'clock.mp3';
import __5 from '../../../assets/audio/timereminder/it\'s 5 o\'clock.mp3';
import __6 from '../../../assets/audio/timereminder/it\'s 6 o\'clock.mp3';
import __7 from '../../../assets/audio/timereminder/it\'s 7 o\'clock.mp3';
import __8 from '../../../assets/audio/timereminder/it\'s 8 o\'clock.mp3';
import __9 from '../../../assets/audio/timereminder/it\'s 9 o\'clock.mp3';
import __10 from '../../../assets/audio/timereminder/it\'s 10 o\'clock.mp3';
import __11 from '../../../assets/audio/timereminder/it\'s 11 o\'clock.mp3';
import __12 from '../../../assets/audio/timereminder/it\'s 12 o\'clock.mp3';

export default class TimeReminder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        currentDate: new Date().toLocaleString(),
        currentTime: '00:00:00',
    }
  }

  abortController = new AbortController();

  componentDidMount(){
    this.mounted = true;

    setInterval(() => {
      var td = new Date();
      var h = td.getHours();
      var m = td.getMinutes();
      var s = td.getSeconds();

      m = m < 10 ? "0"+m : m;
      s = s < 10 ? "0"+s : s;

      var timeHIS = h+":"+m+":"+s;
      if (this.mounted) {
        this.setState({
          currentTime: timeHIS
        },() => {
          this.props.timeReminder.forEach((item, i) => {
            if (item.time === timeHIS) {
              new Audio(item.audio).play()
            }
          });
        })
      }
    }, 1000);
  }

  componentWillUnmount(){
    this.mounted = false;
  }


  render(){
    return(
      <div>
        <h1 className="mb-5 text-center">Time Reminder</h1>
        <Row>
          <Col sm="12" className="text-center mb-3">
            <span style={{ fontSize: '72px' }}>{this.state.currentTime}</span>
          </Col>
          <Col sm="12">
            <label>Reminds :</label>
            <Row>
              {this.props.timeReminder.map((item, index) => (
                <Col sm="12" md="3" className="p-0" key={index}>
                  <Card className="m-3 text-center">
                    <Card.Body>
                      {item.time}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

TimeReminder.defaultProps = {
  'timeReminder' : [
    {time: '01:00:00', audio: __1},
    {time: '02:00:00', audio: __2},
    {time: '03:00:00', audio: __3},
    {time: '04:00:00', audio: __4},
    {time: '05:00:00', audio: __5},
    {time: '06:00:00', audio: __6},
    {time: '07:00:00', audio: __7},
    {time: '08:00:00', audio: __8},
    {time: '09:00:00', audio: __9},
    {time: '10:00:00', audio: __10},
    {time: '11:00:00', audio: __11},
    {time: '12:00:00', audio: __12},
    {time: '13:00:00', audio: __1},
    {time: '14:00:00', audio: __2},
    {time: '15:00:00', audio: __3},
    {time: '16:00:00', audio: __4},
    {time: '17:00:00', audio: __5},
    {time: '18:00:00', audio: __6},
    {time: '19:00:00', audio: __7},
    {time: '20:00:00', audio: __8},
    {time: '21:00:00', audio: __9},
    {time: '22:00:00', audio: __10},
    {time: '23:00:00', audio: __11},
    {time: '24:00:00', audio: __12},
  ]
}
