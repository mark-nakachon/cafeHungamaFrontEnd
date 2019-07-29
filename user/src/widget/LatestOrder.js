import React from "react";
import { Alert } from 'antd';
import './Sidebar.css';

const onClose = e => {
  console.log(e, 'I was closed.');
};

export default function LatestOrder(props) {
  return (
    <div className="latest-order">
      {props.is_latest_order ? 
        <Alert className="alert"
          message="Please confirm your last order !"
          type="success"
          closable
          onClose={onClose}
        /> 
      : 
        <Alert
          message="There is no latest order yet !"
          type="warning"
          closable
          onClose={onClose}
        />
      }
    </div>
    
  );
}
