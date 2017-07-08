import React, { Component } from 'react'
import {Col, Row, Container} from 'reactstrap'
import ModalForm from './ModalForm'


class BarThree extends Component{
    render(){
        return(
            <Container className="bar3">
                <Row className="text-center">
                    <h1 >Features</h1>
                </Row>

                <Row>
                    <Col lg="6" md="12" xs="12" className="text-center">
                        <p><h2>Simple</h2>
                            No hassle delivery method
                        </p>
                        <p><h2>Convenient PDF Format</h2>
                            Allows you to read the book on any and all devices, even your phone
                        </p>
                    </Col>

                    <Col lg="6" md="12" xs="12" className="text-center">
                        <p><h2>Start reading right away</h2>
                            You’ll get your instant download link sent directly to your e-mail in just a few minutes
                        </p>
                        <p><h2>100% free</h2>
                            Use the information you’ll receive immediately to get
                            started or improve your trading. No credit card or any form of payment required
                        </p>
                    </Col>
                </Row>
                <Row>
                    <ModalForm/>
                </Row>
            </Container>
        )
    }
}
export default BarThree