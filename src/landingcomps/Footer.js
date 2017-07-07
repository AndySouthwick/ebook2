import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap';

class Footer extends Component{
    render(){
        return(
            <footer>
                <Container>
                    <p align="center">
                        Trading Futures, options on futures and retail off-exchange foreign currency transactions
                        involves substantial risk of loss and is not suitable for all investors. You should carefully
                        consider whether trading is suitable for you in light of your circumstances, knowledge, and
                        financial resources. You may lose all or more of your initial investment. The lower the day
                        trade margin, the higher the leverage and riskier the trade. Leverage can work for you as well
                        as against you; it magnifies gains as well as losses. Past performance is not necessarily
                        indicative of future results.
                    </p>
                </Container>
            </footer>
        )
    }
}

export default Footer