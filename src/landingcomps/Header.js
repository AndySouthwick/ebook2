import React, {Component} from 'react'
import CountdownTimer from './CountdownTimer'
import {Row, Col} from 'reactstrap'

class Header extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col><CountdownTimer/></Col>

            </Row>
                <Row className="text-center">

                    <h3 className="text-center">SEVEN DEVASTATING MISTAKES</h3>
                    <h6><span className="alert-danger">WARNING:</span> Don’t even think about making another trade until you read this remarkable
                        internationally best-selling eBook for FREE...</h6>
                </Row>
            </div>

        )
    }
}

export default Header