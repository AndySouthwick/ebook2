import React, {Component} from 'react'
import { Col, Row } from 'reactstrap'

class CountdownTimer extends Component{
    constructor(props){
        super(props);

        this.state = { time: {}, minutes: 1, seconds: 90};
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);


    }
    secondsToTime(secs){
        let days = 0
        let hours = Math.floor(secs / (60 * 60));

        let divisior_for_minutes = secs % (60 * 60)
        let minutes = Math.floor(divisior_for_minutes / 60);

        let divisior_for_seconds = divisior_for_minutes % 60;
        let seconds = Math.ceil(divisior_for_seconds)

        let obj = {
            'd': days,
            'h': hours,
            'm': minutes,
            's': seconds
        };



        return obj

    }

    componentDidMount(){

        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar});
        window.addEventListener('load', this.startTimer);
    }

    startTimer(){
        if(this.timer == 0) {
        this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        //check if seconds were at 0

        if(seconds == 0){
        clearInterval(this.timer);
        }
    }


    render(){
        return(
            <div>
                <Row className="justify-content-center text-center">
                    <Col lg="1"><h1>{this.state.time.d}</h1><hr/>Days</Col>   <Col lg="1"><h1>{this.state.time.h}</h1><hr/>Hours</Col>  <Col lg="1"><h1>{this.state.time.m}</h1><hr/>Minute</Col>  <Col lg="1"><h1>{this.state.time.s}</h1><hr/> Seconds </Col>
                </Row>
            </div>
        )
    }
}

export default CountdownTimer