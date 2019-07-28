import React from "react";
import { Carousel, Card, Rate, Row, Col } from "antd";

const style = {
  margin: "0px"
};
class VenueDetails extends React.Component {
  render() {
    return (
      <div>
        <Card bordered={false}>
          <Carousel autoplay>
            <div>
              <h3>Venue Image 1</h3>
            </div>
            <div>
              <h3>Venue Image 2</h3>
            </div>
            <div>
              <h3>Venue Image 3</h3>
            </div>
            <div>
              <h3>Venue Image 4</h3>
            </div>
          </Carousel>
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 16 }}>
              <Row>
                {" "}
                <h2 style={style}>M2K</h2>
              </Row>
              Sector-3 , Rohini
            </Col>
            <Col
              xs={{ span: 12 }}
              lg={{ span: 8 }}
              style={{ textAlign: "right" }}
            >
              Ratings:
              <Rate disabled defaultValue={2} style={{ fontSize: "18px" }} />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 6 }} lg={{ span: 3 }}>
              Ameneties :
            </Col>
            <Col xs={{ span: 18 }} lg={{ span: 7 }}>
              WiFi, Parking
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default VenueDetails;
