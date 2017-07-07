import React, {Component} from 'react'
import CountdownTimer from './CountdownTimer'

class Header extends Component{
    render(){
        return(
            <div>
            <CountdownTimer/>
                <h6><span className="alert-danger">WARNING:</span> Don’t even think about making another trade until you read this remarkable
                    internationally best-selling eBook for FREE...</h6>
            </div>
        )
    }
}

export default Header