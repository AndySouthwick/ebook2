import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap';
import MyForm from './Form'
class BarOne extends Component{
    render(){
        return(

                <Row>

                    <Col lg="6">
                        <img src="./images/book.png" alt=""/>
                    </Col>

                    <Col lg="6" className="formmargin" text-align="center">

                        <p><h2>There’s Never Been A Better Time to Take Control Of Your Financial Freedom...</h2></p>
                        <p className="alert-danger">
                            <h3>Now you can with
                                The Complete Guide to Day Trading​</h3>
                        </p>
                        <p><h3>For A Limited Time: $14 <span className="bg-danger">FREE</span></h3></p>
                        <p><h4>Where Should We Send Your Copy?
                        </h4></p>
                        <p><i>*No credit card required - This eBook is 100% free</i></p>
                        <MyForm/>
                    </Col>
                </Row>
          
        )
    }
}
export default BarOne