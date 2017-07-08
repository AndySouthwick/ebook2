import React, {Component} from 'react'
import { Form, FormGroup, Input, Button} from 'reactstrap';

class MyForm extends Component{
    render(){
        return(

                <Form acceptCharset="utf-8" action="https://fq248.infusionsoft.com/app/form/process/6eeeec81362b2b181b668586ef580792"  method="POST">
                    <input name="inf_form_xid" type="hidden" value="6eeeec81362b2b181b668586ef580792" />
                    <input name="inf_form_name" type="hidden" value="Web Form submitted" />
                    <input name="infusionsoft_version" type="hidden" value="1.67.0.44" />
                    <FormGroup>
                        <div className="infusion-field">
                            <Input  id="inf_field_Email" name="inf_field_Email" type="email" placeholder="Email" />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="infusion-submit">
                            <br/>
                            <Button type="submit" value="Submit" className="btn-danger"> GET MY EBOOK NOW</Button>
                        </div>
                    </FormGroup>
                </Form>

        )
    }
}
export default MyForm