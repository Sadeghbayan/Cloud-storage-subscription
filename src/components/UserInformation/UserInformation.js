import React, {Component} from 'react';
import {Input, Col, Row, Button, Icon, Form} from 'antd';
import {Link, withRouter} from "react-router-dom";

const InputGroup = Input.Group;
const { TextArea } = Input;

class UserInformation extends Component {

    saveAndContinue = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.addUserInformation(values);
                this.props.history.push({
                    pathname: '/credit-card',
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h1>User Information</h1>
                <Form onSubmit={this.saveAndContinue}>
                    <div className="fieldWrapper">
                        <section className="fields">
                            <InputGroup size="large">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <Form.Item label="First Name">
                                        {getFieldDecorator('firstname', {
                                            'initialValue': this.props.user_information ? this.props.user_information.firstname : '',
                                            rules: [
                                                { required: true, message: 'Please input your first name!' },
                                            ],
                                        })(
                                             <Input placeholder="Soheil" />
                                        )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Last Name">
                                        {getFieldDecorator('lastname', {
                                            'initialValue': this.props.user_information ? this.props.user_information.lastname : '',
                                            rules: [
                                                { required: true, message: 'Please input your last name!' },
                                            ],
                                        })(
                                             <Input placeholder="Sadeghbayan" />
                                        )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </InputGroup>
                            <Col span={24} className="textarea-wrapper">
                                <Form.Item label="Street Address">
                                {getFieldDecorator('streetAddress', {
                                    'initialValue': this.props.user_information ? this.props.user_information.streetAddress : '',
                                    rules: [
                                        {required: true, message: 'Please input your Street address!' },
                                    ],
                                })(
                                     <TextArea rows={2} placeholder="Iran - Tehran"/>
                                )}
                                </Form.Item>
                            </Col>

                        </section>
                        <div className="sectionFooter">
                            <Button type="link">
                                <Icon type="left" />
                                <Link to="/">Back</Link>
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

export default withRouter(Form.create()(UserInformation));