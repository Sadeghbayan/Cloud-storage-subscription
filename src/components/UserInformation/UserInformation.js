import React, {Component} from 'react';
import {Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Button, Icon} from 'antd';
import styles from "../Parameters/parameters.module.scss";
import {Link} from "react-router-dom";

const InputGroup = Input.Group;
const { TextArea } = Input;

class UserInformation extends Component {
    render() {
        return (
            <div>
                <h1>User Information</h1>
                <div className="fieldWrapper">
                    <section className="fields">
                        <InputGroup size="large">
                            <Row gutter={8}>
                                <Col span={12}>
                                    <h2>First Name</h2>
                                    <Input placeholder="Soheil" />
                                </Col>
                                <Col span={12}>
                                    <h2>Last Name</h2>
                                    <Input placeholder="Sadeghbayan" />
                                </Col>
                            </Row>
                        </InputGroup>
                        <Col span={24} className="textarea-wrapper">
                            <h2>Street Address</h2>
                            <TextArea rows={2} placeholder="Iran - Tehran"/>
                        </Col>

                    </section>
                    <div className="sectionFooter">
                        <Button type="link">
                            <Icon type="left" />
                            <Link to="/">Back</Link>
                        </Button>
                        <Button type="link">
                            <Link to="/credit-card">Next</Link>
                            <Icon type="right" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInformation;