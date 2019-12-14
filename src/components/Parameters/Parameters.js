import React, {Component} from 'react';
import { Radio, Button, Icon, Form } from 'antd';
import styles from './parameters.module.scss'
import {Link} from "react-router-dom";


class Parameters extends Component {

    state = {
        Duration:""
    }


    saveAndContinue = e => {
//to="/user-information"

        console.log(this.state)
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <h1>Parameters</h1>
                <Form onSubmit={this.handleSubmit}>
                    <div className="fieldWrapper">
                        <section className="fields">
                            <h2>
                                Duration <span className={styles.smallInfo}>(Month)</span>
                            </h2>
                            {getFieldDecorator('duration', {
                                'initialValue':'12'
                            })(
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="3">3 </Radio.Button>
                                <Radio.Button value="6">6  </Radio.Button>
                                <Radio.Button value="12">12 </Radio.Button>
                            </Radio.Group>
                            )}
                        </section>
                        <section className="fields">
                            <h2>
                                Amount<span className={styles.smallInfo}>(Gigabytes)</span>
                            </h2>
                            {getFieldDecorator('amount', {
                                'initialValue':'5'
                            })(
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="3">3</Radio.Button>
                                <Radio.Button value="5">5</Radio.Button>
                                <Radio.Button value="10">10</Radio.Button>
                                <Radio.Button value="20">20</Radio.Button>
                                <Radio.Button value="30">30</Radio.Button>
                                <Radio.Button value="50">50</Radio.Button>
                            </Radio.Group>
                            )}
                        </section>
                        <section className="fields">
                            <h2>
                                Upfront payment
                            </h2>
                            {getFieldDecorator('upfront',{
                                'initialValue':'no'
                            })(
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="yes">Yes</Radio.Button>
                                <Radio.Button value="no">No</Radio.Button>
                            </Radio.Group>
                            )}
                        </section>
                        <div className="sectionFooter right">
                            <Button type="link">
                                <Link onClick={this.saveAndContinue} to="/user-information">Next</Link>
                                <Icon type="right" />
                            </Button>
                        </div>
                    </div>
                </Form>

            </div>
        );
    }
}

export default Form.create()(Parameters);