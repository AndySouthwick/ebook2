import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap';
import ModalForm from './ModalForm'

class BarTwo extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h1> In the book you'll discover</h1>


                        <ul>
                            <h4 className="lineSpacing">
                            <li> <b> Exactly What Day Trading Is</b></li>
                            <li>
                                How To Build a Great Part Time or Full Time Income With No Boss & Have Complete Control of Your Time Day Trading
                            </li>
                            <li>
                                How to Take Control of Your Retirement Account - and set yourself up to beat the markets in 2017 without learning confusing or complicated investing methods.
                            </li>
                            <li>
                                A complete 1-2-3 checklist of everything you need to start day trading so you can be equipped with the tools you need to invest with confidence.
                            </li>
                            <li>
                                Step-by-step guidance on how to develop your own day trading strategy for trading Stocks, Forex or Futures
                            </li>
                            <li>
                                Learn to invest the right way and gain confidence so you can avoid con-men and slick talking Wall Street types, who just want your money and have no interest in seeing you succeed.
                            </li>
                            <li>
                                10 Power Principles to Make Certain Your Day-Trading Strategy Works – Any one of these Power Principles can help you be a better trader. Combined, they could take your trading to the next level!
                            </li>
                            <li>
                                7 Mistake Traders Routinely Make & How to Avoid Them – These mistakes cripple any traders’ ability to earn consistent profits trading. Avoiding them could give you the edge you are looking for.
                            </li>
                            <li>
                                And a whole lot more...
                            </li>
                            </h4>
                        </ul>

                    </Col>

                </Row>
                <Row className="justify-content-center">
                    <ModalForm/>
                </Row>
            </Container>
        )
    }
}

export default BarTwo