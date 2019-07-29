import React, { useState } from "react";
import { EventItem } from "./EventList";
import { Rate, Select } from "antd";
import { Link } from "react-router-dom";
import "./Events.css";
import { Icon } from "antd";

const SelectedList = props => {
  const [selected_list, setSelectedList] = useState([]);
  return (
    <div className="selected-events">
      {" "}
      <div className="time-slots">
        <div className="time-slot-item">
          <div className="timings">4-5 </div>
          <div className="price">600</div>
          <div className="seat">60/100</div>
          <div className="success">
            {" "}
            <Icon type="check-circle" />
            Successful
          </div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
        </div>
        <div>Time SLot</div>
        <div>Time SLot</div>
        <div>Time SLot</div>
        <div>Time SLot</div>
        <div>Time SLot</div>
      </div>
      <p>SelectedList Events</p>
    </div>
  );
};

const RecentEvents = () => {
  return (
    <div className="recent-events">
      {" "}
      <p>Recent Events</p>
    </div>
  );
};

export default function EventDetails(props) {
  const [eventid, setid] = useState(props.match.params.id);
  const [event, setEvent] = useState({
    name: "Event1",
    location: "Delhi",
    description: "Comedy",
    ticket_price: 100,
    ratings: 4,
    img:
      "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
  });
  return (
    <div className="event-details-container">
      {" "}
      <div className="event-details">
        <EventItem
          event={{
            name: "Event1",
            location: "Delhi",
            description: "Comedy",
            ticket_price: 100,
            ratings: 4,
            img:
              "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
          }}
          is_view_details={false}
        />
        <p className="permanent-note">NOTE: You can select multiple seats</p>
      </div>
      <div className="quantity-btn">
        <button>-</button>
        {1}
        <button>+</button>
      </div>
      <div className="event-days">
        <div className="event-morning">
          <p>Morning</p>
          <img src=" https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-06-512.png" />
        </div>
        <div className="time-slots">
          <div className="time-slot-item">
            <div className="timings">4-5 </div>
            <div className="price">600</div>
            <div className="seat">60/100</div>
            <div className="success">
              {" "}
              <Icon type="check-circle" />
              Successful
            </div>
            <div className="checkbox">
              <input type="checkbox" />
            </div>
          </div>
          <div>Time SLot</div>
          <div>Time SLot</div>
          <div>Time SLot</div>
          <div>Time SLot</div>
          <div>Time SLot</div>
        </div>
      </div>
      <div className="event-days">
        <div className="event-afternoon">
          <p>Afternoon</p>
          <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-07-512.png" />
        </div>
        <div className="time-slots">
          <div>Time SLot</div>
          <div>Time SLot</div>
          <div>Time SLot</div>
          <div>Time SLot</div>
          <div>Time SLot</div>
          <div>Time SLot</div>
        </div>
      </div>
      <div className="event-days">
        <div className="event-evening">
          <p>Evening</p>
          <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-11-512.png" />
        </div>
      </div>
      <div className="event-days">
        <div className="event-night">
          <p>Night</p>
          <img src=" https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png" />
        </div>
      </div>
      <RecentEvents />
      <SelectedList />
      <button className="book-btn">Book Tickets and Pay</button>
    </div>
  );
}
