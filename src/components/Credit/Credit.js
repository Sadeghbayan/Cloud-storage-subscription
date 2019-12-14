import React, {Component} from 'react';
import {Col, Input, Row, DatePicker, Button, Icon} from "antd";
import moment from 'moment';
import {Link} from "react-router-dom";

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const InputGroup = Input.Group;
class Credit extends Component {

    constructor(props) {
        super(props);
        const value = props.value || {};

        this.state = {
            number: "",
            exp:"",
            security:""
        };
    }

    cardNumberFormat = e => {
        var val = e.target.value;
        const valArray = val.split(' ').join('').split('');
        var valSpace = val.split("")

        // to work with backspace
        if(valSpace[valSpace.length-1] == ' '){
            var valSpaceN = valSpace.slice(0, -2)
            val = valSpaceN.join("")
            this.setState({ number:val });
            return;
        }

        if(isNaN(valArray.join('')))
            return;
        if(valArray.length === 17)
            return
        if(valArray.length % 4 === 0 && valArray.length <= 15) {
            this.setState({ number: e.target.value + "  " });
        }else{

            this.setState({ number: e.target.value})
        }

    }
    cardSecurityFromat = e => {
        const val = e.target.value;
        const valArray = val.split(' ').join('').split('');
        if(isNaN(valArray.join('')))
            return;
        if(valArray.length === 5){
            return
        }else{
            this.setState({ security: e.target.value})
        }

    }

    render() {
        return (
            <div>
                <h1>Credit Card</h1>
                <div className="fieldWrapper">
                    <section className="fields">
                        <Col span={24} className="custom-input">
                            <h2>Card number</h2>
                            <Input value={this.state.number} onChange={this.cardNumberFormat} />
                        </Col>
                        <Col span={24} className="custom-input">
                            <InputGroup size="large">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <h2>Card expiration</h2>
                                        <MonthPicker defaultValue={moment('15/01', monthFormat)} format={monthFormat} />

                                    </Col>
                                    <Col span={12}>
                                        <h2>Card security code</h2>
                                        <Input value={this.state.security} onChange={this.cardSecurityFromat}/>
                                    </Col>
                                </Row>
                            </InputGroup>
                        </Col>

                    </section>
                    <div className="sectionFooter">
                        <Button type="link">
                            <Icon type="left" />
                            <Link to="/">Back</Link>
                        </Button>
                        <Button type="link">
                            <Link to="/confirm">Next</Link>
                            <Icon type="right" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Credit;