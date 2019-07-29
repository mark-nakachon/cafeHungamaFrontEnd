import React,{Component} from 'react';
import {Row,Col} from 'antd';
import {Card,Button} from 'antd';
import './Checkout.css';
import { ContextConsumer } from '../Context';
class Checkout extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[{
                slot:'12-13',
                price:100,
                left:'12/15',
                remaining:'3'
            },
            {
                slot:'12-13',
                price:100,
                left:'12/15',
                remaining:'3'
            }]

    }
    }
    render(){
        const {data} = this.state;
        return(
            <ContextConsumer>
                {(value)=>{
                    console.log(value.selectedData);
                    return (
                        <div>
                        <h2 style={{textAlign:'center'}}>Pay for your selected slots</h2>
                        {value.selectedData.map(d=>(
                            <Row type="flex" justify="space-between" className="checkout">
                            <Col span={4}>{d.key}</Col>
                            <Col span={4}>{d.price}</Col>
                            <Col span={4}>{d.name}</Col>
                            <Col span={4}>{d.status}</Col>
                            </Row>
                        ))}
                        <Card size="small" bordered={false} style={{ width: 300,margin:'auto' }}>
                            <Row type="flex" justify="space-between" >
                            <p>Total Amount</p>
                            <p>100</p>
                            </Row>
                            <Row type="flex" justify="space-between" >
                            <p>Voucher</p>
                            <p>-100</p>
                            </Row>
                            <Row type="flex" justify="space-between" >
                            <p>Coupon</p>
                            <p>-100</p>
                            </Row>
                            <Button type="primary">Pay</Button>
                        </Card>
                    </div>
                    )

                }

                }

            </ContextConsumer>

        )
    }
}

export default Checkout;