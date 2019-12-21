import React, {Component} from 'react';
import {Form, Checkbox, Button, Icon, Spin, message} from 'antd'
import {Link} from "react-router-dom";
import styles from "./Confirm.module.scss"

class Confirm extends Component {
    state = { loading: false };

    componentDidMount() {
        this.props.fetchParameters()
    }


    componentDidUpdate(prevProps, prevState) {
        const {sendServerStatus, error} = this.props.subscription;
        if(!prevProps.subscription.sendServerStatus && sendServerStatus){
            message.success('Your information has been submitted successfully!');
            this.setState({ loading: false });
            return;
        }
        if(!prevProps.subscription.error && error) {
            message.error('Something wrong has happend !');
        }
    }


    submit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            this.setState({ loading: true });
            let finalData = [];
            finalData = this.props.data;
            finalData.totalPrice = {totalPrice:this.props.finalParams.totalPrice}
            if (!err) {
                this.props.submitSelectedSubscription(finalData);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h1>Your Order</h1>
                <Spin spinning={this.state.loading}>
                <div className="fieldWrapper">
                {
                    this.props.finalParams ?
                        <section className={styles.selectedSubscription}>
                            <span className={styles.priceDollar}>
                            $
                            </span>
                            <span className={styles.price}>{this.props.finalParams.totalPrice}</span>
                            <span className={styles.priceTime}>/ {this.props.finalParams.parameters.duration === '12' ? '1 yr' : `${this.props.finalParams.parameters.duration} mo`}</span>

                            <span className={styles.desc}>{this.props.finalParams.parameters.amount} GB Subscription</span>
                        </section>
                     : null
                }

                <Form onSubmit={this.submit}>
                    <Form.Item>
                        {getFieldDecorator('agreement', {
                            rules: [
                                { required: true, message: 'Please check the agreement' },
                            ],
                        })(
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <div className="sectionFooter">
                        <Button type="link">
                            <Icon type="left" />
                            <Link to="/credit-card">Back</Link>
                        </Button>
                        <Button type="link" htmlType="submit">
                            Confirm
                            <Icon type="check" />
                        </Button>
                    </div>
                 </Form>
                </div>
                </Spin>
            </div>
        );
    }
}

export default Form.create()(Confirm);