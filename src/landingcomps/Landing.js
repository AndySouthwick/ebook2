import React, {Component} from 'react'
import {Container, Col, Row, Form, FormGroup }from 'reactstrap'
import Header from './Header'
import BarOne from './BarOne'
import BarTwo from './BarTwo'
import BarThree from './BarThree'
import Footer from './Footer'
class Landing extends Component{
    render(){
        return(

                <Container>
                        <Header/>
                        <BarOne/>
                        <BarTwo/>
                        <BarThree/>
                        <Footer/>
                </Container>

        )
    }
}
export default Landing;