import React from "react";
import AddBookingFilters from "./AddBookingFilters";
import AddBooking from "./AddBooking";
import PastBooking from "./PastBooking/PastBooking";
import { Tabs } from "antd";
const { TabPane } = Tabs;

class Booking extends React.Component {
  render() {
    return (
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Add New Booking" key="1">
            <AddBookingFilters />
            <AddBooking />
          </TabPane>
          <TabPane tab="Past Bookings" key="2">
            <PastBooking />
          </TabPane>
          <TabPane tab="Upcoming Bookings" key="3">
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
          </TabPane>
          <TabPane tab="Drafts" key="4">
            <p>Content of Tab Pane 4</p>
            <p>Content of Tab Pane 4</p>
            <p>Content of Tab Pane 4</p>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Booking;
