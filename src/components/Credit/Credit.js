import React, {Component} from 'react';
import {Col, Input, Row, DatePicker, Button, Icon, Form} from "antd";
import moment from 'moment';
import {Link, withRouter} from "react-router-dom";

const { MonthPicker } = DatePicker;

const monthFormat = 'YY/MM';

const InputGroup = Input.Group;
class Credit extends Component {

    constructor(props) {
        super(props);
    }

    cardNumberFormat = (rule, value, callback)  => {
        let val = value;
        const valArray = val.split(' ').join('').split('');
        const valSpace = val.split("")
        // to work with backspace
        if(valSpace[valSpace.length-1] == ' '){
            var valSpaceN = valSpace.slice(0, -2)
            val = valSpaceN.join("")
            this.props.form.setFieldsValue({
                cardNumber: val,
            });
            return callback();
        }

        if(isNaN(valArray.join(''))){
            this.props.form.setFieldsValue({
                cardNumber: "",
            });
            return callback()
        }
        if(valArray.length === 17){
            this.props.form.setFieldsValue({
                cardNumber: valSpace.slice(0, 22).join(''),
            });
            return callback();
        }
        if(val && valArray.length % 4 === 0 && valArray.length <= 15) {
            this.props.form.setFieldsValue({
                cardNumber: val + "  ",
            });
            return callback()
        }
        callback()

    }
    cardSecurityFromat = (rule, value, callback) => {
        const val = value;
        const valArray = val.split(' ').join('').split('');
        const valSpace = val.split("")
        if(isNaN(valArray.join(''))){
            this.props.form.setFieldsValue({
                cardSec: "",
            });
            return callback()
        }
        if(valArray.length === 5){
            this.props.form.setFieldsValue({
                cardSec: valSpace.slice(0, 4).join(''),
            });
            return callback()
        }
        callback()
    }

    saveAndContinue = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            values.cardNumber = values.cardNumber.split(" ").join("");
            values.cardExp = values.cardExp.format(monthFormat);
            if (!err) {
                this.props.addCredit(values);
                this.props.history.push({
                    pathname: '/confirm',
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h1>Credit Card</h1>
                <Form onSubmit={this.saveAndContinue}>
                    <div className="fieldWrapper">
                        <section className="fields">
                            <Col span={24} className="custom-input">
                                <Form.Item label="Card Number">
                                    {getFieldDecorator('cardNumber', {
                                        'initialValue': this.props.credit_info ? this.props.credit_info.cardNumber : "",
                                        rules: [
                                            { required: true, message: 'Please input your Card number!' },
                                            {validator: this.cardNumberFormat},
                                        ],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={24} className="custom-input">
                                <InputGroup size="large">
                                    <Row gutter={8}>
                                        <Col span={12}>
                                            <Form.Item label="Card expiration">
                                                {getFieldDecorator('cardExp', {
                                                    'initialValue': this.props.credit_info ? moment(this.props.credit_info.cardExp, monthFormat) : moment('14/01', monthFormat),
                                                    rules: [
                                                        {required: true, message: 'Please input your Card expiration!' },
                                                    ],
                                                })(
                                                     <MonthPicker format={monthFormat}/>
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item label="Card security code">
                                                {getFieldDecorator('cardSec', {
                                                    'initialValue': this.props.credit_info ? this.props.credit_info.cardSec : "",
                                                    rules: [
                                                        {required: true, message: 'Please input your Card security code!'},
                                                        {validator: this.cardSecurityFromat},
                                                    ],
                                                })(
                                                    <Input/>
                                                )}
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </InputGroup>
                            </Col>

                        </section>
                        <div className="sectionFooter">
                            <Button type="link">
                                <Icon type="left" />
                                <Link to="/user-information">Back</Link>
                            </Button>
                            <Button type="link" htmlType="submit">
                                Next
                                <Icon type="right" />
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}

export default withRouter(Form.create()(Credit));