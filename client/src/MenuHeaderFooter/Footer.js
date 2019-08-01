import React from "react";
import './Footer.css';
import { Icon, Button } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
export default function Footer() {
  return (
    <div className="footer-bg">
      <div className="info">
        <Icon type="mail" /> Email: pioneeringwebsolutions@gmail.com
      </div>
      <div className="tandc">
        Terms and condition
      </div>
      <div className="info">
        <Icon type="phone" /> Phone no: 9999999999
      </div>

      <div className="aboutus">
        About Us
      </div>
      <div className="contactus">
        Contact Us
      </div>
      <div className="faq">
        FAQ
      </div>
      <div className="pws">
        _______________________________________________________________PioneeringWebSolutions____________________________________________________________________
      </div>
      <div className="icons-list">
        <Icon type="facebook" theme="filled" />
        <Icon type="twitter-square" theme="filled" />
        <Icon type="instagram" theme="filled" />
        <Icon type="linkedin" theme="filled" />
      </div>


      <div className="cright">Copyright &copy; Cafehungama.com. All rights reserved</div>
    </div>
  );
}
